/**
 * Site Configuration
 *
 * Update these values to change contact info across the entire site.
 */

export const siteConfig = {
  // Phone Numbers for calling
  phones: [
    {
      display: "+91 93895 88452",
      raw: "+919389588452",
    },
    {
      display: "+91 87551 71424",
      raw: "+918755171424",
    },
  ],

  // WhatsApp Configuration
  whatsapp: {
    number: "918755084885", // Without + sign for wa.me URL
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

export const getPhoneUrl = (index: number = 0) => {
  return `tel:${siteConfig.phones[index].raw}`;
};

export const getPhones = () => {
  return siteConfig.phones;
};
