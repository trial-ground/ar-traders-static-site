import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const isMalayalam = i18n.language === 'ml';
  
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>

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
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div className="animate-fade-in-up">
          {/* Business Name with Elegant Design */}
          <div className="mb-8">
            <div className="relative inline-block">
              {/* Decorative line above */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-accent"></div>
              
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-2 tracking-wide ${
                isRTL ? 'font-arabic' : isMalayalam ? 'font-malayalam' : 'font-calligraphy'
              }`}>
                {t('hero.title')}
              </h1>
              
              {/* Decorative ornament */}
              <div className="flex justify-center items-center my-4">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="w-16 h-px bg-accent mx-3"></div>
                <div className="w-2 h-2 bg-accent/70 rounded-full"></div>
                <div className="w-16 h-px bg-accent mx-3"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
              </div>
              
              <h2 className={`text-2xl md:text-3xl lg:text-4xl text-accent font-medium tracking-wider ${
                isRTL ? 'font-arabic' : isMalayalam ? 'font-malayalam' : 'font-calligraphy'
              }`}>
                {t('hero.subtitle')}
              </h2>
              
              {/* Years of experience badge */}
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className={`text-primary-foreground/90 text-sm font-medium ${
                  isRTL ? 'font-arabic' : isMalayalam ? 'font-malayalam' : ''
                }`}>
                  25+ Years of Excellence
                </span>
              </div>
              
              {/* Decorative line below */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-accent"></div>
            </div>
          </div>
          
          <p className={`text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'font-arabic text-right' : isMalayalam ? 'font-malayalam' : ''
          }`}>
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToProducts}
              className={`px-10 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isRTL ? 'font-arabic' : isMalayalam ? 'font-malayalam' : ''
              }`}
            >
              {t('hero.exploreProducts')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className={`px-10 py-4 text-lg rounded-2xl bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm ${
                isRTL ? 'font-arabic' : isMalayalam ? 'font-malayalam' : ''
              }`}
            >
              {t('hero.contactUs')}
            </Button>
          </div>
        </div>

        {/* Elegant Decorative Elements */}
        <div className="absolute top-1/4 left-8 opacity-20">
          <div className="relative">
            <div className="w-16 h-16 border-2 border-accent rounded-full animate-pulse"></div>
            <div className="absolute inset-2 w-12 h-12 bg-accent/30 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-12 opacity-15" style={{animationDelay: '1s'}}>
          <div className="relative">
            <div className="w-12 h-12 border border-accent rounded-full"></div>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-accent rounded-full animate-bounce"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4 opacity-10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/4 opacity-10">
          <div className="w-8 h-8 border border-accent rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
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