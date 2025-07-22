import { Heart } from "lucide-react";

const Footer = () => {
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
              With 25+ years of experience, your trusted source for premium dates, Turkish figs, 
              imported chocolates, and finest nuts. Quality and freshness guaranteed with every order.
            </p>
            <div className="flex items-center text-sm text-primary-foreground/60">
              Made with <Heart className="w-4 h-4 mx-1 text-accent" /> for quality food lovers
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>123 Premium Foods Street</li>
              <li>Gourmet District, City 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@artraders.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 AR Traders. All rights reserved. | Quality guaranteed since 1999.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;