import { Reveal, ImgBox } from "./shared";
import { ArrowRight, MapPin, Activity, Users } from "lucide-react";
import helth from "../../assest/healthcare/helth.png"

export default function MobileHealthSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8F7F6]/50 rounded-[40px] p-8 lg:p-12 border border-[#0F9D94]/10 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image */}
            <Reveal delay={0}>
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-lg border-4 border-white">
                <img
  src={helth}
  alt="Mobile Health Unit"
  className="w-full h-full object-cover"
/>
              </div>
            </Reveal>

            {/* Right Content */}
            <div>
              <Reveal delay={100}>
                <p className="text-[#0F9D94] font-bold text-sm tracking-wider uppercase mb-2">
                  Bringing Healthcare to Doorsteps
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] font-display mb-6">
                  Mobile Health Units
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our mobile clinics travel to remote areas, ensuring essential healthcare reaches those who need it most.
                </p>
              </Reveal>

              <div className="space-y-6 mb-10">
                <Reveal delay={200}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full text-[#0F9D94] shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2342] text-sm">Remote Area Coverage</h4>
                      <p className="text-xs text-gray-500 mt-1">Bringing care closer</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={300}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full text-[#0F9D94] shadow-sm">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2342] text-sm">On-the-Spot Services</h4>
                      <p className="text-xs text-gray-500 mt-1">Checkups, medicines & more</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={400}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full text-[#0F9D94] shadow-sm">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2342] text-sm">Community Commitment</h4>
                      <p className="text-xs text-gray-500 mt-1">Healthier communities, together</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={500}>
                <a
                  href="#hc-cta"
                  className="inline-flex items-center gap-2 border-2 border-[#0F9D94] text-[#0F9D94] px-6 py-2.5 rounded-full font-bold hover:bg-[#0F9D94] hover:text-white transition-all"
                >
                  See Our Reach
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
