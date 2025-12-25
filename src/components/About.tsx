import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Utensils, Heart, Award } from "lucide-react";

import foodSlide1 from "@/assets/food-slide-1.jpg";
import foodSlide2 from "@/assets/food-slide-2.jpg";
import foodSlide3 from "@/assets/food-slide-3.jpg";
import foodSlide4 from "@/assets/food-slide-4.jpg";
import foodSlide5 from "@/assets/food-slide-5.jpg";
import foodSlide6 from "@/assets/food-slide-6.jpg";

const foodImages = [
  { src: foodSlide1, alt: "Butter Momos" },
  { src: foodSlide2, alt: "Kurkure Momos" },
  { src: foodSlide3, alt: "Cheesy Pizza" },
  { src: foodSlide4, alt: "Hot Soup" },
  { src: foodSlide5, alt: "Hakka Noodles" },
  { src: foodSlide6, alt: "Cold Coffee" },
];

const features = [
  {
    icon: Utensils,
    title: "Authentic Recipes",
    description: "Traditional Tibetan recipes passed down through generations",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every momo is handcrafted with care and premium ingredients",
  },
  {
    icon: Award,
    title: "Top Rated",
    description: "Uttarkashi's favorite destination for momos and soups",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % foodImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image Carousel Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {foodImages.map((image, index) => (
                <motion.img
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    scale: currentSlide === index ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {foodImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-primary w-6"
                        : "bg-foreground/40 hover:bg-foreground/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:right-8 bg-card border border-border rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <span className="text-3xl font-serif font-bold text-primary">
                  4.6
                </span>
                <span className="text-2xl">⭐</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Customer Rating
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">
              A Taste of the{" "}
              <span className="text-gradient-gold">Himalayas</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nestled in the heart of Mall Road, Uttarkashi, Jay Butter Momos
              Wala & JH Cafe brings you the authentic flavors of Tibetan
              cuisine. Our signature butter momos, made with love and premium
              ingredients, have become a beloved delicacy for locals and
              travelers alike.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              From our famous Paneer Butter Momos to the soul-warming Tibetan
              Thupka soup, every dish tells a story of tradition, quality, and
              the warm hospitality of the mountains.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
