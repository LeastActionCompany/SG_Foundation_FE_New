import { useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import StatCounter from "./StatCounter";

const slides = [
  {
    id: 1,
    label: "Differently Abled Support",
    title: "Differently Abled Support",
    description: "Empowering individuals with disabilities through education, skill development, and inclusive opportunities.",
    image: "https://eastsidespeech.com.au/wp-content/uploads/2022/09/differently-abled-children-speech-therapy-906x510.jpg",
    accent: "#E8A838",
    cta: "Learn More",
    href: "#services",
  },
  {
    id: 2,
    label: "Child Welfare",
    title: "Child Welfare",
    description: "Providing safe environments, education, and healthcare for underprivileged children.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80",
    accent: "#4CAF7D",
    cta: "Learn More",
    href: "#services",
  },
  {
    id: 3,
    label: "Women Welfare",
    title: "Women Welfare",
    description: "Supporting women through education, healthcare, and economic empowerment programs.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1400&q=80",
    accent: "#E85D8A",
    cta: "Learn More",
    href: "#services",
  },
  {
    id: 4,
    label: "Community Service",
    title: "Community Service",
    description: "Building stronger communities through healthcare camps, education drives, and disaster relief.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80",
    accent: "#3D9BE9",
    cta: "Learn More",
    href: "#services",
  },
];

const stats = [
  { value: "100+", label: "Children Supported" },
  { value: "2000+", label: "Meals Served" },
  { value: "150+", label: "Women Empowered" },
  { value: "200+", label: "Volunteers" },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative w-full">
      {/* Loading overlay */}
      <div className={`absolute inset-0 z-50 bg-ink transition-opacity duration-700 ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}`} />

      <div className="relative h-screen min-h-[600px] w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => (
                <div className="relative h-full w-full overflow-hidden">
                  {/* Background */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${isActive ? "scale-110" : "scale-100"}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />

                  {/* Cinematic overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />

                  {/* Accent color stripe */}
                  <div
                    className="absolute left-0 top-0 h-1 transition-all duration-1000"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: slide.accent,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-center pt-[140px] md:pt-[180px] pb-[180px] md:pb-[160px]">
                    <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
                      <div className="max-w-3xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
                        {/* Category badge */}
                        <div
                          className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                          style={{
                            background: `${slide.accent}25`,
                            border: `1px solid ${slide.accent}50`,
                            color: slide.accent,
                            transitionDelay: "100ms",
                          }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: slide.accent }} />
                          SG Foundation
                        </div>

                        {/* Main headline */}
                        <h1
                          className={`font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                          style={{ transitionDelay: "200ms" }}
                        >
                          {slide.title.split(" ").map((word, wi) => (
                            <span key={wi} className="block">
                              {wi === slide.title.split(" ").length - 1 ? (
                                <span style={{ color: slide.accent }}>{word}</span>
                              ) : word}
                            </span>
                          ))}
                        </h1>

                        {/* Description */}
                        <p
                          className={`mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                          style={{ transitionDelay: "300ms" }}
                        >
                          {slide.description}
                        </p>

                        {/* CTAs */}
                        <div
                          className={`mt-8 mb-[20px] flex flex-col w-full sm:w-auto sm:flex-row items-center gap-4 transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                          style={{ transitionDelay: "400ms" }}
                        >
                          <a
                            href={slide.href}
                            className="group relative overflow-hidden rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                            style={{ background: slide.accent }}
                          >
                            <span className="relative z-10">{slide.cta}</span>
                            <div className="absolute inset-0 translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
                          </a>
                          <a
                            href="#donate"
                            className="group rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 w-full sm:w-auto"
                          >
                            Donate Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide number */}
                  <div className="absolute bottom-16 right-8 text-right sm:right-12 lg:right-16">
                    <div className="text-6xl font-bold text-white/10 font-display">
                      0{i + 1}
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-t-3xl bg-white/10 backdrop-blur-xl md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="group flex flex-col items-center justify-center gap-1 px-4 py-5 text-center transition-colors duration-300 hover:bg-white/10"
                >
                  <div className="text-2xl font-bold text-white md:text-3xl">
                    <StatCounter value={parseInt(stat.value, 10)} />+
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Scroll</div>
          <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent animate-scroll_bounce" />
        </div>
      </div>
    </section>
  );
}
