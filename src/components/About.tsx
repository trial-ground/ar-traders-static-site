import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Award, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We source only the finest quality dry fruits and nuts from trusted growers worldwide."
    },
    {
      icon: Leaf,
      title: "Natural & Fresh",
      description: "All our products are natural, preservative-free, and packed fresh to maintain optimal taste."
    },
    {
      icon: Award,
      title: "Premium Selection",
      description: "Carefully curated selection of premium varieties to ensure exceptional quality in every bite."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to ensure you receive your order fresh and on time."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Choose Our Premium Selection?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience in the dry fruits and nuts industry, 
              we have built lasting relationships with growers who share our commitment 
              to quality and sustainability. Every product is carefully selected, 
              tested, and packed to deliver the finest experience to our customers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-4"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="card-premium text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="card-premium text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </CardContent>
            </Card>
            <Card className="card-premium text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Product Varieties</div>
              </CardContent>
            </Card>
            <Card className="card-premium text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Quality Guarantee</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;