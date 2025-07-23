import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Award, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Heart,
      title: t("about.features.quality.title"),
      description: t("about.features.quality.description")
    },
    {
      icon: Leaf,
      title: t("about.features.fresh.title"),
      description: t("about.features.fresh.description")
    },
    {
      icon: Award,
      title: t("about.features.premium.title"),
      description: t("about.features.premium.description")
    },
    {
      icon: Clock,
      title: t("about.features.delivery.title"),
      description: t("about.features.delivery.description")
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            {t("about.description")}
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
              <div className="text-sm text-muted-foreground">{t("about.stats.experience")}</div>
            </CardContent>
          </Card>
          <Card className="card-premium text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">{t("about.stats.customers")}</div>
            </CardContent>
          </Card>
          <Card className="card-premium text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">{t("about.stats.varieties")}</div>
            </CardContent>
          </Card>
          <Card className="card-premium text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">{t("about.stats.guarantee")}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;