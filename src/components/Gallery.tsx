import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import galleryPizza from '@/assets/gallery-pizza.avif';
import galleryWrap from '@/assets/gallery-wrap.webp';
import galleryPizzas from '@/assets/gallery-pizzas.webp';
import galleryMomosNew from '@/assets/gallery-momos-new.jpg';

const images = [
  { src: gallery1, alt: 'JH Butter Momos exterior' },
  { src: galleryMomosNew, alt: 'Butter Momos with chutney' },
  { src: gallery3, alt: 'Food preparation' },
  { src: galleryWrap, alt: 'Delicious wrap with Coca-Cola' },
  { src: galleryPizzas, alt: 'Fresh pizzas in preparation' },
  { src: gallery4, alt: 'Restaurant ambience' },
  { src: galleryPizza, alt: 'Our signature pizza' },
  { src: gallery6, alt: 'Café atmosphere' },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div ref={ref} className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium uppercase tracking-wider text-sm"
            >
              Gallery
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4"
            >
              Captured <span className="text-gradient-gold">Moments</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="section-divider mt-6"
            />
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="image-hover rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-56 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
