import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium dry fruits and nuts"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            AR Traders
            <span className="block text-accent font-display">Premium Dry Fruits & Nuts</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            With over 25 years of experience, we import the finest varieties of dates, Turkish figs, 
            premium chocolates, and nuts from around the world. Quality and freshness guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToProducts}
              className="px-8 py-4 text-lg rounded-xl"
            >
              Explore Products
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="px-8 py-4 text-lg rounded-xl bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <div className="w-12 h-12 bg-accent rounded-full"></div>
        </div>
        <div className="absolute bottom-32 right-10 animate-float opacity-20" style={{animationDelay: '1s'}}>
          <div className="w-8 h-8 bg-accent rounded-full"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;