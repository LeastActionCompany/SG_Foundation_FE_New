import { useState } from "react";
import Modal from "../ui/Modal";
import { submitContact } from "../../api/api";
import { useToast } from "../ToastProvider";

const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-ink outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 placeholder-slate-400";

function getErrorMessage(err, fallback) {
  return err?.response?.data?.error || fallback;
}

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    
    try {
      setSubmitting(true);
      await submitContact({ name, email, message });
      setSubmitted(true);
      form.reset();
      toast.success("Your message has been sent.", "Message sent");
      
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 2000);
    } catch (err) {
      toast.error(getErrorMessage(err, "We could not send your message."), "Message failed");
    } finally { 
      setSubmitting(false); 
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Send a Message">
      <p className="mb-6 text-sm text-muted">
        We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Name</label>
            <input className={inputClass} type="text" name="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Email</label>
            <input className={inputClass} type="email" name="email" placeholder="john@example.com" required />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Message</label>
          <textarea
            className={`${inputClass} min-h-[130px] resize-none`}
            name="message"
            placeholder="How can we help you?"
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full bg-ink hover:bg-primary"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>

        {submitted && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 mt-4">
            <p className="text-center text-sm font-medium text-emerald-700">
              Message received. We'll be in touch!
            </p>
          </div>
        )}
      </form>
    </Modal>
  );
}
