import { useState } from "react";
import Modal from "../ui/Modal";
import { donationAmounts, donationTypes } from "../../data/siteContent";
import { createOrder, verifyPayment } from "../../api/api";
import { loadRazorpay } from "../../utils/loadRazorpay";
import { useToast } from "../ToastProvider";

const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20";

const getImpactText = (amount) => {
  if (!amount) return "Select an amount to see your impact.";
  if (amount < 500) return "Provides daily meals for a child in need.";
  if (amount < 1000) return "Provides 1 month of school supplies and nutrition.";
  if (amount < 5000) return "Supports full healthcare coverage for a family.";
  return "Sponsors comprehensive long-term education and care.";
};

export default function DonationModal({ isOpen, onClose }) {
  const [selectedType, setSelectedType] = useState(donationTypes[0]);
  const [selectedAmount, setSelectedAmount] = useState(donationAmounts[0]);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("upi");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const toast = useToast();

  const getFinalAmount = () => (customAmount ? Number(customAmount) : selectedAmount);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalAmount = getFinalAmount();
    if (!finalAmount || finalAmount < 1) {
      toast.error("Please enter a valid donation amount.");
      return;
    }
    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      toast.error("Razorpay checkout could not be loaded. Please try again.");
      return;
    }
    try {
      setLoading(true);
      const trimmedName = name.trim();
      const trimmedEmail = email.trim();
      const trimmedContact = contact.trim();
      const { data } = await createOrder({ amount: finalAmount, name: trimmedName, email: trimmedEmail, contact: trimmedContact, type: selectedType });
      const options = {
        key: data.key,
        amount: data.amount * 100,
        currency: "INR",
        name: "SG Foundation",
        description: selectedType,
        order_id: data.order_id,
        prefill: {
          name: trimmedName,
          email: trimmedEmail,
          contact: trimmedContact,
          ...(paymentMode === "upi" ? { method: "upi" } : {}),
        },
        handler: async function (response) {
          try {
            await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: finalAmount,
              name: trimmedName,
              email: trimmedEmail,
              contact: trimmedContact,
              type: selectedType,
            });
            toast.success("Thank you for your support.", "Payment successful");
            setName("");
            setEmail("");
            setContact("");
            setCustomAmount("");
            
            setTimeout(() => {
              onClose();
            }, 1500);
          } catch (err) {
            toast.error(err?.response?.data?.error || "Payment verification failed.");
          }
        },
        theme: { color: "#283C81" },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      toast.error("We could not start the payment process.");
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Complete Your Donation">
      <div className="mb-6 flex items-center justify-between rounded-xl bg-primary/5 p-4 border border-primary/10">
        <div>
          <p className="text-xs font-bold text-primary">Every rupee creates real change</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-wider text-muted">Total</div>
          <div className="text-xl font-bold text-gold">Rs. {customAmount || selectedAmount}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-muted">1. Select Cause</label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {donationTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all duration-200 ${
                  selectedType === type
                    ? "border-primary bg-primary text-white shadow-soft"
                    : "border-slate-200 bg-white text-ink hover:border-primary/30 hover:bg-primary/5"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-muted">2. Amount (INR)</label>
          <div className="grid grid-cols-3 gap-2">
            {donationAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setSelectedAmount(amt);
                  setCustomAmount("");
                }}
                className={`rounded-xl border py-3 text-sm font-bold transition-all duration-200 ${
                  selectedAmount === amt && !customAmount
                    ? "border-primary bg-primary text-white shadow-soft"
                    : "border-slate-200 bg-white text-ink hover:border-primary/30"
                }`}
              >
                Rs. {amt}
              </button>
            ))}
          </div>
          <input
            type="number"
            min="1"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              if (e.target.value) setSelectedAmount(Number(e.target.value));
            }}
            placeholder="Or enter custom amount"
            className={`mt-3 ${inputClass}`}
          />
          <div className="mt-3 rounded-lg bg-gold/10 p-3 text-center border border-gold/20">
            <p className="text-xs font-semibold text-ink italic">
              <span className="text-primary not-italic mr-1">✨ Impact:</span>
              {getImpactText(customAmount || selectedAmount)}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name (Optional)" className={inputClass} />
          <div className="grid gap-3 sm:grid-cols-2">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className={inputClass} />
            <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Phone Number" className={inputClass} />
          </div>
        </div>

        <div className="flex items-center rounded-xl bg-slate-50 p-1">
          {["upi", "all"].map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setPaymentMode(mode)}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                paymentMode === mode ? "bg-white text-primary shadow-sm" : "text-muted hover:text-ink"
              }`}
            >
              {mode === "upi" ? "UPI Preferred" : "All Methods"}
            </button>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full uppercase tracking-widest text-sm"
        >
          {loading ? "Processing..." : "Complete Donation"}
        </button>
      </form>
    </Modal>
  );
}
