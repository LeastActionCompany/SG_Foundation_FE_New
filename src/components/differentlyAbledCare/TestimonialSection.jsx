import { Reveal, ImgBox } from "./shared";
import { ChevronLeft, ChevronRight } from "lucide-react";
import parentImage from "../../assest/care/image.png";
import heartImage from "../../assest/care/heart.jpeg";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#FAFAF9] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="lg:col-span-1">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B] font-display mb-8">
                Voices of Change
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-sm border border-gray-100 relative">
                <div className="text-[#064E3B] text-6xl font-serif leading-none absolute top-8 left-8 opacity-10">"</div>
                
                <p className="text-lg md:text-xl text-gray-700 mb-10 relative z-10 leading-relaxed font-serif">
                  The dedication and compassion of SG Foundation is transforming lives. They truly believe in abilities, not disabilities.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-gray-100">
                      <ImgBox
                        src={parentImage}
                        alt="Parent sharing feedback about SG Foundation care"
                        label="User"
                        className="w-full h-full !border-none"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#064E3B]">Neha Verma</p>
                      <p className="text-xs text-gray-500">Parent</p>
                    </div>
                  </div>

                  {/* Slider controls inline */}
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#064E3B] hover:border-[#064E3B] transition-all">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#064E3B] hover:border-[#064E3B] transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-start gap-1.5 mt-8">
                  <div className="w-2 h-2 rounded-full bg-[#064E3B]"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-1 hidden lg:block">
            <Reveal delay={250} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] bg-white p-3 shadow-xl border border-gray-100">
                <ImgBox
                  src={heartImage}
                  alt="Mentor encouraging a differently abled student during a care session"
                  label="Care Session Image"
                  className="w-full h-full rounded-[32px]"
                />
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
