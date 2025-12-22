/**
 * Site Configuration
 *
 * Update these values to change contact info across the entire site.
 */

export const siteConfig = {
  // Phone Number
  phone: {
    display: "+91 87555 87919", // Formatted for display
    raw: "+918755587919", // Used in tel: links
  },

  // WhatsApp Configuration
  whatsapp: {
    number: "918755587919", // Without + sign for wa.me URL
    defaultMessage: "Hi! I would like to know more about your menu.",
  },

  // Social Media Links
  social: {
    instagram: "https://www.instagram.com/jh.cafe/",
    facebook: "https://facebook.com/jhcafe",
    twitter: "https://twitter.com/jhcafe",
  },
};

// Helper functions
export const getWhatsAppUrl = (message?: string) => {
  const msg = message || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    msg
  )}`;
};

export const getPhoneUrl = () => {
  return `tel:${siteConfig.phone.raw}`;
};
