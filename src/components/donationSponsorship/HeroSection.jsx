import { Reveal, ImgBox } from "./shared";
import { Heart, Users, ShieldCheck, Handshake } from "lucide-react";
import { navigateTo } from "../../utils/navigation";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAFAF8] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Decorative Background Shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F4ECDC] opacity-30 rounded-bl-[300px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl relative z-10">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 mb-6 text-[#D8A531] font-bold text-xs tracking-widest uppercase bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
                <Heart className="w-4 h-4 fill-[#D8A531]" />
                Donation & Sponsorship
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-[46px] md:text-[56px] lg:text-[68px] font-extrabold leading-[1.1] text-[#0F6B4B] mb-6 font-display">
                Your Support.<br />
                <span className="text-[#D8A531]">Their Tomorrow.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Every contribution brings hope, creates opportunities, and transforms lives. Together, we can build a better and brighter future for all.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                  className="inline-flex items-center gap-2 bg-[#0F6B4B] text-white px-7 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#145A43] hover:-translate-y-1 transition-all"
                >
                  Donate Now
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                  className="inline-flex items-center gap-2 bg-white text-[#0F6B4B] border-2 border-[#0F6B4B]/20 px-7 py-3.5 rounded-full font-bold hover:border-[#0F6B4B] hover:bg-green-50 transition-all"
                >
                  Sponsor a Cause
                  <Users className="w-5 h-5" />
                </button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 w-fit">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <ImgBox label={`User`} className="w-full h-full !border-none" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-[#0F6B4B]">
                  Join 10,000+ <span className="font-medium text-gray-600">generous supporters</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image Layout */}
          <Reveal delay={200} className="relative h-full flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square z-10">
              
              {/* Floating Cards */}
              <div className="absolute top-0 -right-8 bg-white p-4 rounded-2xl shadow-xl flex gap-4 w-56 animate-bounce-slow z-20">
                <div className="bg-emerald-50 text-emerald-600 p-2 rounded-full h-fit">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F6B4B] text-sm">Make an Impact</h4>
                  <p className="text-[10px] text-gray-500 mt-1">Your support creates real change in lives.</p>
                </div>
              </div>

              <div className="absolute top-1/3 -left-12 bg-white p-4 rounded-2xl shadow-xl flex gap-4 w-56 animate-bounce-slow delay-150 z-20">
                <div className="bg-amber-50 text-amber-500 p-2 rounded-full h-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F6B4B] text-sm">Trust & Transparency</h4>
                  <p className="text-[10px] text-gray-500 mt-1">We ensure responsible use of contributions.</p>
                </div>
              </div>

              <div className="absolute bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl flex gap-4 w-56 animate-bounce-slow delay-300 z-20">
                <div className="bg-blue-50 text-blue-600 p-2 rounded-full h-fit">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F6B4B] text-sm">Together, We Can</h4>
                  <p className="text-[10px] text-gray-500 mt-1">Small acts of kindness make a difference.</p>
                </div>
              </div>

              {/* Main organic circular image container */}
              <div className="w-full h-full bg-white rounded-full rounded-tr-[150px] rounded-bl-[150px] overflow-hidden shadow-2xl relative border-8 border-white">
                <ImgBox 
                  label="Hero Donation Image Placeholder" 
                  className="w-full h-full absolute inset-0" 
                />
              </div>
              
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
