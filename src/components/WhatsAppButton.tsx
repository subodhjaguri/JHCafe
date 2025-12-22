import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl } from '@/config/siteConfig';

const WhatsAppButton = () => {
  return (
    <>
      {/* Call Now Button - Left side (Mobile only) */}
      <motion.a
        href={getPhoneUrl()}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow md:hidden"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
      </motion.a>

      {/* WhatsApp Button - Right side */}
      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </motion.a>
    </>
  );
};

export default WhatsAppButton;
