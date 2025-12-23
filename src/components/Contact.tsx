import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Clock, Navigation, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, getPhones } from '@/config/siteConfig';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const phones = getPhones();

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=JH+Butter+Momos+Soup+Bar+Mall+Road+Uttarkashi';

  return (
    <section id="contact" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium uppercase tracking-wider text-sm"
          >
            Visit Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4"
          >
            Get In <span className="text-gradient-gold">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-divider mt-6"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            {/* Phone Numbers Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-5 bg-card border border-border rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground text-lg">Tap to call</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 ml-[4.5rem]">
                {phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">{phone.display}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover-lift cursor-pointer"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-semibold text-foreground text-lg">Chat with us</p>
              </div>
              <span className="text-xs text-primary font-medium">Open WhatsApp</span>
            </motion.a>

            {/* Opening Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Opening Hours</p>
                <p className="font-semibold text-foreground text-lg">10:00 AM - 10:00 PM</p>
              </div>
              <span className="text-xs text-primary font-medium">Daily</span>
            </motion.div>

            {/* Address Card */}
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="block p-5 bg-card border border-border rounded-xl hover-lift cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Our Location</p>
                  <p className="font-semibold text-foreground">Gaur Bhawan, Azad Maidan</p>
                  <p className="text-muted-foreground">Mall Road, Uttarkashi - 249193</p>
                  <p className="text-muted-foreground">Uttarakhand, India</p>
                </div>
                <Navigation className="w-5 h-5 text-primary mt-2" />
              </div>
            </motion.a>
          </motion.div>

          {/* Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Static Map Image Placeholder */}
              <div className="aspect-[4/3] bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.8761!2d78.4361!3d30.7280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzQwLjgiTiA3OMKwMjYnMTAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="JH Butter Momos Location"
                />
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
