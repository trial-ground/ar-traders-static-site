import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">
              AR Traders
            </h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex items-center text-sm text-primary-foreground/60">
              {t("footer.madeWith")} <Heart className="w-4 h-4 mx-1 text-accent" /> {t("footer.forQuality")}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#products" className="hover:text-accent transition-colors">{t("nav.products")}</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">{t("nav.about")}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{t("nav.contact")}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contactInfo")}</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>13/920,921 BIG BAZAR</li>
              <li>Kozhikode, Kerala 673001</li>
              <li>Phone: 099473 55955</li>
              <li>Email: info@artraders.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;