import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.visit"),
      details: ["13/920,921 BIG BAZAR", "Kozhikode, Kerala 673001"]
    },
    {
      icon: Phone,
      title: t("contact.info.call"),
      details: ["099473 55955", ""]
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      details: ["info@artraders.com", "orders@artraders.com"]
    },
    {
      icon: Clock,
      title: t("contact.info.hours"),
      details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className="card-premium p-6"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-0 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="card-premium p-8">
            <CardContent className="p-0">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                {t("contact.form.title")}
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {t("contact.form.firstName")}
                    </label>
                    <Input placeholder="John" className="border-border/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {t("contact.form.lastName")}
                    </label>
                    <Input placeholder="Doe" className="border-border/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t("contact.form.email")}
                  </label>
                  <Input type="email" placeholder="john@example.com" className="border-border/50" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="border-border/50" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t("contact.form.message")}
                  </label>
                  <Textarea 
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows={4}
                    className="border-border/50 resize-none"
                  />
                </div>

                <Button variant="hero" className="w-full py-3">
                  {t("contact.form.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;