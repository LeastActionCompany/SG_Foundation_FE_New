import { useState } from "react";
import { BadgeIndianRupee, Globe2, ShieldCheck } from "lucide-react";
import Reveal from "../Reveal";
import { donationAmounts, donationTypes } from "../../data/siteContent";
import { createOrder, verifyPayment } from "../../api/api";
import { loadRazorpay } from "../../utils/loadRazorpay";
import { useToast } from "../ToastProvider";

const trustSignals = [
  {
    icon: ShieldCheck,
    title: "Secure & Encrypted",
    desc: "256-bit SSL protected payments via Razorpay",
  },
  {
    icon: BadgeIndianRupee,
    title: "Tax Deductible",
    desc: "Donations eligible under 80G exemption",
  },
  {
    icon: Globe2,
    title: "Direct Impact",
    desc: "100% of your donation funds programs",
  },
];

export default function DonationSection() {
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
          } catch (err) {
            toast.error(err?.response?.data?.error || "Payment verification failed.");
          }
        },
        theme: { color: "#283C81" },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      toast.error("We could not start the payment process.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/10";

  return (
    <section id="donate" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Support Our Cause</span>
            </div>

            <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              Your support brings{" "}
              <span className="relative">
                <span className="gradient-text">dignity</span>
              </span>{" "}
              to lives.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted md:text-lg">
              Choose a cause and an amount. We&apos;ve simplified our process so you can make an impact in under a minute.
            </p>

            <div className="mt-10 space-y-4">
              {trustSignals.map((item, i) => {
                const TrustIcon = item.icon;

                return (
                  <Reveal key={item.title} delay={100 + i * 80}>
                    <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10">
                        <TrustIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-bold text-ink">{item.title}</div>
                        <div className="text-xs text-muted">{item.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={150} direction="right">
            <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_30px_80px_rgba(40,60,129,0.15)]">
              <div className="relative overflow-hidden bg-primary px-7 py-6">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5" />
                <div className="absolute -left-4 bottom-0 h-20 w-20 rounded-full bg-white/5" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Donation Form</h3>
                    <p className="mt-0.5 text-xs text-white/60">Every rupee creates real change</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/50">Total</div>
                    <div className="text-2xl font-bold text-gold">Rs. {customAmount || selectedAmount}</div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 p-7">
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
                  className="w-full rounded-xl bg-primary py-4 text-sm font-bold uppercase tracking-widest text-white shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-glow active:scale-95 disabled:opacity-70"
                >
                  {loading ? "Processing..." : "Complete Donation"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
