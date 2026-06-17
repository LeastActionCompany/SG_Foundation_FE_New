import { Reveal, ImgBox } from "./shared";

const offers = [
  {
    title: "Expert Trainers",
    desc: "Industry experts with real-world experience and mentorship.",
    imgLabel: "trainer.jpg",
  },
  {
    title: "Practical Learning",
    desc: "Hands-on training with modern tools and technologies.",
    imgLabel: "technical-training.jpg",
  },
  {
    title: "Certification",
    desc: "Recognized certifications to boost your career opportunities.",
    imgLabel: "certification.jpg",
  },
  {
    title: "Placement Support",
    desc: "We connect you with top companies and opportunities.",
    imgLabel: "placement-support.jpg",
  },
  {
    title: "Lifetime Support",
    desc: "Continuous guidance even after training completion.",
    imgLabel: "community-learning.jpg",
  },
];

export default function OfferSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] font-display">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 80}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
                <div className="h-44 w-full relative overflow-hidden">
                  <ImgBox 
                    label={offer.imgLabel} 
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h3 className="font-bold text-[#1F2937] text-sm mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">
                    {offer.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
