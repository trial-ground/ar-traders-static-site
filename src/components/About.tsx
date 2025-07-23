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
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
            Why Choose Our Premium Selection?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            With over 25 years of experience in the dry fruits and nuts industry, 
            AR Traders has built lasting relationships with growers worldwide who share our commitment 
            to quality and sustainability. Every product is carefully selected, 
            tested, and packed to deliver the finest experience to our customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-primary mb-2 text-lg">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="card-premium text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
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
    </section>
  );
};

export default About;