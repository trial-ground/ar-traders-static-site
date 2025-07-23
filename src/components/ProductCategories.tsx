import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import nutsImage from "@/assets/nuts-category.jpg";
import dryFruitsImage from "@/assets/dry-fruits-category.jpg";
import chocolateImage from "@/assets/chocolate-category.jpg";
import datesImage from "@/assets/dates-category.jpg";

const ProductCategories = () => {
  const { t } = useTranslation();
  const categories = [
    {
      title: t("products.nuts.title"),
      description: t("products.nuts.description"),
      image: nutsImage,
      features: t("products.nuts.features", { returnObjects: true }) as string[]
    },
    {
      title: t("products.dryFruits.title"),
      description: t("products.dryFruits.description"),
      image: dryFruitsImage,
      features: t("products.dryFruits.features", { returnObjects: true }) as string[]
    },
    {
      title: t("products.chocolates.title"),
      description: t("products.chocolates.description"),
      image: chocolateImage,
      features: t("products.chocolates.features", { returnObjects: true }) as string[]
    },
    {
      title: t("products.dates.title"),
      description: t("products.dates.description"),
      image: datesImage,
      features: t("products.dates.features", { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("products.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("products.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-premium hover-lift group overflow-hidden flex flex-col h-full"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="accent" className="w-full mt-auto">
                  {t("products.viewProducts")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;