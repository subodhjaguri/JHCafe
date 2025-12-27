import { Instagram, Facebook, Twitter, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import { siteConfig, getPhones } from "@/config/siteConfig";

const socialLinks = [
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={logo}
                alt="Jay BMW - Always Fresh"
                className="h-16 w-auto"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-gradient-gold">
                  Jay Butter Momos Wala
                </h3>
                <p className="text-foreground/80 font-medium">& JH Cafe</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Serving authentic Himalayan flavors with love. Your favorite
              destination for butter momos and soul-warming soups.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Gaur Bhawan, Azad Maidan</li>
                <li>Mall Road, Uttarkashi - 249193</li>
                <li>Uttarakhand, India</li>
                {getPhones().map((phone) => (
                  <li key={phone.raw} className="pt-1 first:pt-2">
                    <a
                      href={`tel:${phone.raw}`}
                      className="hover:text-primary transition-colors"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Jay Butter Momos Wala & JH Cafe. All
            rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in
            Uttarkashi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
