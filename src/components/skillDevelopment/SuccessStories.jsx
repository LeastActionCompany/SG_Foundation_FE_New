import { Reveal, ImgBox } from "./shared";
import { ArrowRight } from "lucide-react";
import priyaProfile from "../../assest/profile/PriyaSharma.png";
import rahulProfile from "../../assest/profile/RahulVerma.png";
import sunitaProfile from "../../assest/profile/SunitaDevi.png";

const stories = [
  {
    name: "Priya Sharma",
    role: "Tailoring Graduate",
    quote: "The training I received gave me the confidence and skills to start my own tailoring business. Today, I earn with pride and support my family.",
    img: priyaProfile,
  },
  {
    name: "Rahul Verma",
    role: "IT Support Executive",
    quote: "The computer course opened doors to a job opportunity I never imagined. Thank you SG Foundation!",
    img: rahulProfile,
  },
  {
    name: "Sunita Devi",
    role: "Smart Farmer",
    quote: "I learned modern farming techniques and increased my yield. Now I train other farmers in my village.",
    img: sunitaProfile,
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          
          {/* Left Intro Text */}
          <div className="lg:col-span-1 lg:sticky lg:top-32">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] font-display leading-tight mb-2">
                Success<br className="hidden lg:block" /> Stories
              </h2>
              <div className="w-12 h-1 bg-[#F59E0B] rounded-full mb-6 hidden lg:block"></div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Real stories of real people who turned their skills into successful careers and better lives.
              </p>
              
              <button className="inline-flex items-center gap-2 border-2 border-gray-200 text-[#1E3A8A] rounded-full px-6 py-2.5 text-sm font-semibold hover:border-[#1E3A8A] hover:bg-gray-50 transition-all">
                View More Stories
                <ArrowRight className="w-4 h-4" />
              </button>
            </Reveal>
          </div>

          {/* Right Testimonial Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, i) => (
              <Reveal key={story.name} delay={i * 100}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative h-full flex flex-col">
                  {/* Big Quote Mark */}
                  <div className="text-[#F59E0B] text-5xl font-serif leading-none absolute top-6 left-6 opacity-40">
                    "
                  </div>
                  
                  <p className="mt-8 text-sm text-gray-600 mb-8 italic relative z-10 flex-1 leading-relaxed">
                    {story.quote}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                      <ImgBox src={story.img} alt={`${story.name} profile`} className="w-full h-full" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#1F2937] leading-tight">
                        {story.name}
                      </p>
                      <p className="text-xs text-[#F59E0B] mt-0.5">
                        {story.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
        
        {/* Carousel Indicators (Decorative for now to match reference) */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
