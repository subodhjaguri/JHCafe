import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, ChefHat, Users } from "lucide-react";

// TODO: Replace these with actual owner photos
// import ownerPhoto1 from '@/assets/owner-1.jpg';
// import ownerPhoto2 from '@/assets/owner-2.jpg';
// import ownerPhoto3 from '@/assets/owner-3.jpg';
// import ownerPhoto4 from '@/assets/owner-4.jpg';

// Temporary: using food images as placeholders until owner photos are added
import owner1 from "@/assets/owner-1.png";
import owner2 from "@/assets/owner-2.jpeg";
import owner3 from "@/assets/owner-3.jpeg";
import owner4 from "@/assets/owner-4.jpeg";

const ownerImages = [
  { src: owner1, alt: "Owner preparing momos" },
  { src: owner2, alt: "Owner at the cafe" },
  { src: owner3, alt: "Owner with customers" },
  { src: owner4, alt: "Owner in kitchen" },
];

const stats = [
  {
    icon: Clock,
    value: "27+",
    label: "Years Experience",
  },
  {
    icon: ChefHat,
    value: "100%",
    label: "Authentic Recipes",
  },
  {
    icon: Users,
    value: "1000s",
    label: "Happy Customers",
  },
];

const Owner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ownerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="owner" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium uppercase tracking-wider text-sm"
          >
            The Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4"
          >
            Meet the <span className="text-gradient-gold">Master</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-divider mt-6"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Carousel Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {ownerImages.map((image, index) => (
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
                {ownerImages.map((_, index) => (
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

            {/* Since Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:right-8 bg-card border border-border rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <span className="text-sm text-muted-foreground">Since</span>
                <p className="text-3xl font-serif font-bold text-primary">
                  1997
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At the age of 12, I began my journey preparing authentic butter
              momos, learning the art from generations of traditional Tibetan
              cooking. What started as a childhood passion has become a lifelong
              dedication to bringing the true flavors of the Himalayas to every
              plate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For over 27 years, I have perfected each recipe, ensuring that
              every momo is handcrafted with the same love and care that my
              family taught me. From the perfect dough to the rich, buttery
              filling, every detail matters in creating an unforgettable taste
              experience.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Today, JH Butter Momos & Soup Bar stands as a testament to this
              journey - a place where tradition meets passion, and every
              customer becomes part of our extended family.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="text-center p-4 bg-background rounded-xl border border-border"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-serif font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
