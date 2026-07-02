import { Reveal, ImgBox } from "./shared";
import { Heart, Users } from "lucide-react";
import { navigateTo } from "../../utils/navigation";
import beTheReasonImage from "../../assest/donate/bethereson.png";

export default function DonationCTA() {
  return (
    <section className="bg-white py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] overflow-hidden relative shadow-2xl bg-gradient-to-r from-[#0F6B4B] to-[#145A43]">
          
          <div className="grid lg:grid-cols-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 p-12 lg:p-16 flex items-start gap-8 flex-col md:flex-row">
              <Reveal delay={0} className="flex-shrink-0 hidden md:block">
                <div className="w-20 h-20 rounded-[20px] bg-white/10 flex items-center justify-center border border-white/20">
                  <Heart className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </Reveal>
              
              <div>
                <Reveal delay={100}>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight font-display">
                    Be the Reason Someone<br /> Smiles Today.
                  </h2>
                </Reveal>

                <Reveal delay={150}>
                  <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
                    Your generosity can bring hope, happiness, and transformation in countless lives.
                  </p>
                </Reveal>

                <Reveal delay={200}>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                      className="inline-flex items-center gap-2 bg-[#D8A531] text-[#0F6B4B] px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#F4C542] hover:-translate-y-1 transition-all"
                    >
                      Donate Now
                      <Heart className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => { navigateTo("/"); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 150); }}
                      className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all"
                    >
                      Sponsor a Child
                      <Users className="w-4 h-4" />
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Image Section */}
            <Reveal delay={250} className="lg:col-span-4 relative hidden lg:block h-full">
              <div className="absolute inset-y-0 right-0 w-[120%] p-4">
                <div className="w-full h-full rounded-[32px] rounded-bl-[100px] overflow-hidden bg-white relative shadow-[-20px_0_40px_rgba(0,0,0,0.3)] border-4 border-[#0F6B4B]">
                   <ImgBox 
                     src={beTheReasonImage}
                     alt="Community garden meal supported by donations"
                     label="Community Image" 
                     className="w-full h-full object-cover" 
                   />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
