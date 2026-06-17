import { Reveal } from "./shared";
import { Heart, Eye, Target, Handshake } from "lucide-react";

export default function MissionStrip() {
  return (
    <section className="bg-[#FFF8EC] border-y border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-orange-200/50">
          
          <Reveal delay={0} className="px-4 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center text-[#BE185D] mb-4">
              <Heart strokeWidth={1.5} className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-[#4C1D95] text-lg mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To uplift women and children through opportunities and support.
            </p>
          </Reveal>

          <Reveal delay={100} className="px-4 text-center pt-8 md:pt-0">
            <div className="mx-auto w-12 h-12 flex items-center justify-center text-[#BE185D] mb-4">
              <Eye strokeWidth={1.5} className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-[#4C1D95] text-lg mb-2">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              An inclusive society where every woman and child can thrive.
            </p>
          </Reveal>

          <Reveal delay={200} className="px-4 text-center pt-8 md:pt-0">
            <div className="mx-auto w-12 h-12 flex items-center justify-center text-[#BE185D] mb-4">
              <Target strokeWidth={1.5} className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-[#4C1D95] text-lg mb-2">Our Focus</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Empowerment, education, healthcare and protection.
            </p>
          </Reveal>

          <Reveal delay={300} className="px-4 text-center pt-8 md:pt-0">
            <div className="mx-auto w-12 h-12 flex items-center justify-center text-[#BE185D] mb-4">
              <Handshake strokeWidth={1.5} className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-[#4C1D95] text-lg mb-2">Our Promise</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Compassionate support with long-term impact.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
