import { Reveal, ImgBox } from "./shared";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    name: "Ramesh Yadav",
    role: "Beneficiary",
    quote: "The health camp organized in our village helped my family a lot. We got treatment and medicines for free.",
    imgLabel: "testimonial-1.jpg",
  },
  {
    name: "Meena Kumari",
    role: "Beneficiary",
    quote: "The doctors were very kind and the dental checkup improved my oral health. Thank you SG Foundation!",
    imgLabel: "testimonial-2.jpg",
  },
  {
    name: "Sita Devi",
    role: "Beneficiary",
    quote: "The mobile health unit is a blessing for our remote village. We don't have to travel far for medical help now.",
    imgLabel: "testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] font-display">
              Voices of Health & Hope
            </h2>
            <div className="w-16 h-1 bg-[#0F9D94] mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0F9D94] hover:border-[#0F9D94] transition-all hidden md:flex shrink-0">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {stories.map((story, i) => (
              <Reveal key={story.name} delay={i * 100}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative h-full flex flex-col">
                  {/* Big Quote Mark */}
                  <div className="text-[#0F9D94] text-6xl font-serif leading-none absolute top-4 left-6 opacity-20">
                    "
                  </div>
                  
                  <p className="mt-8 text-sm text-gray-600 mb-8 italic relative z-10 flex-1 leading-relaxed">
                    {story.quote}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-gray-100">
                      <ImgBox label={story.imgLabel} className="w-full h-full" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#0A2342] leading-tight">
                        {story.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {story.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0F9D94] hover:border-[#0F9D94] transition-all hidden md:flex shrink-0">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-[#0F9D94]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
