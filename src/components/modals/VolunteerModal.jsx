import { useState } from "react";
import Modal from "../ui/Modal";
import { submitVolunteer } from "../../api/api";
import { useToast } from "../ToastProvider";

const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-ink outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 placeholder-slate-400";

export default function VolunteerModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const interest = form.interest.value.trim();
    const message = form.message.value.trim();

    // Indian mobile validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanedPhone = phone.replace(/\D/g, "");

    if (!phoneRegex.test(cleanedPhone)) {
      toast.error(
        "Please enter a valid 10-digit mobile number.",
        "Invalid Phone Number"
      );
      return;
    }

    try {
      setSubmitting(true);

      await submitVolunteer({
        name,
        email,
        phone: cleanedPhone,
        interest,
        message
      });

      setSubmitted(true);
      form.reset();

      toast.success(
        "Your volunteer request has been submitted. We will contact you soon.",
        "Registration sent"
      );
      
      // Close modal after short delay
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 2000);
      
    } catch (err) {
      toast.error(
        err?.response?.data?.error ||
          "We could not submit your volunteer request.",
        "Registration failed"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Join the Mission">
      <p className="mb-6 text-sm text-muted">
        Fill in your details to start your volunteering journey. We typically respond within 48 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Full Name</label>
          <input className={inputClass} type="text" name="name" placeholder="e.g. Rahul Sharma" required />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Email Address</label>
            <input className={inputClass} type="email" name="email" placeholder="rahul@example.com" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Phone Number</label>
            <input
              className={inputClass}
              type="tel"
              name="phone"
              placeholder="9876543210"
              maxLength={10}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
              }}
              required
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Area of Interest</label>
          <select className={inputClass} name="interest" required>
            <option value="">Select an area</option>
            <option value="Education">Education & Tutoring</option>
            <option value="Healthcare">Healthcare & Camps</option>
            <option value="Event Organization">Event Organization</option>
            <option value="Fundraising">Fundraising</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Message (Optional)</label>
          <textarea
            className={`${inputClass} min-h-[100px] resize-none`}
            name="message"
            placeholder="Tell us a little about your skills..."
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : "Submit Request"}
        </button>

        {submitted && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 mt-4">
            <p className="text-center text-sm font-medium text-emerald-700">
              Request received! We'll reach out shortly.
            </p>
          </div>
        )}
      </form>
    </Modal>
  );
}
