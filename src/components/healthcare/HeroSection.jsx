import { Reveal, ImgBox } from "./shared";
import { HeartPulse, ArrowRight, Heart, Shield, Users } from "lucide-react";
import hero from "../../assest/healthcare/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#E8F7F6] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#E8F7F6] rounded-full blur-3xl opacity-60" />
        {/* Healthcare Crosses */}
        <div className="absolute top-1/3 left-[5%] text-[#E8F7F6] opacity-50">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M19 10h-5V5h-4v5H5v4h5v5h4v-5h5v-4z"/></svg>
        </div>
        <div className="absolute bottom-1/4 right-[40%] text-[#E8F7F6] opacity-50">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M19 10h-5V5h-4v5H5v4h5v5h4v-5h5v-4z"/></svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 mb-6 text-[#0F9D94] font-bold text-sm tracking-wider uppercase bg-[#E8F7F6] px-4 py-2 rounded-full border border-[#0F9D94]/20">
                <HeartPulse className="w-4 h-4" />
                Healthcare Initiative
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.1] text-[#0A2342] mb-6 font-display">
                Better Health.<br />
                <span className="text-[#0F9D94]">Stronger Lives.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Providing accessible, affordable, and compassionate healthcare services that build healthier communities and brighter futures.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#hc-programs"
                  className="inline-flex items-center gap-2 bg-[#0A2342] text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-[#0A2342]/30 hover:bg-[#0F9D94] hover:-translate-y-1 transition-all"
                >
                  Our Medical Programs
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#hc-cta"
                  className="inline-flex items-center gap-2 bg-white text-[#0A2342] border-2 border-[#0A2342]/20 px-7 py-3.5 rounded-full font-bold hover:border-[#0F9D94] hover:text-[#0F9D94] hover:bg-gray-50 transition-all"
                >
                  Support Healthcare
                  <Heart className="w-5 h-5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 w-fit">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <ImgBox label={`User ${i}`} className="w-full h-full" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Serving Communities with Care
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Image Layout */}
          <Reveal delay={200} className="relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1.1] z-10 flex justify-end">
              {/* Main large image */}
              
<img
  src={hero}
  alt="Healthcare Hero"
  className="w-full h-full rounded-[40px] rounded-tl-[120px] rounded-br-[120px] shadow-2xl border-4 border-white object-cover"
/>
              
              {/* Floating Healthcare Card */}
              <div className="absolute -bottom-10 -right-4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-[#E8F7F6] text-[#0F9D94] p-2 rounded-lg">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A2342] text-sm">Accessible Care</p>
                    <p className="text-[10px] text-gray-500">Healthcare for everyone</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E8F7F6] text-[#0F9D94] p-2 rounded-lg">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A2342] text-sm">Preventive First</p>
                    <p className="text-[10px] text-gray-500">Prevent today, protect tomorrow</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E8F7F6] text-[#0F9D94] p-2 rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A2342] text-sm">Community Driven</p>
                    <p className="text-[10px] text-gray-500">Stronger together</p>
                  </div>
                </div>
              </div>

              {/* Decorative Cross Icon overlapping main image */}
              <div className="absolute -bottom-6 left-12 bg-[#0F9D94] text-white p-3 rounded-xl shadow-lg transform -rotate-12 border-4 border-white">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 10h-5V5h-4v5H5v4h5v5h4v-5h5v-4z"/></svg>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
