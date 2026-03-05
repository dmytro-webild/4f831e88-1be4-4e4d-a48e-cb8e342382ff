"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import MediaAbout from "@/components/sections/about/MediaAbout";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterCard from "@/components/sections/footer/FooterCard";
import { CheckCircle, Facebook, HelpCircle, Phone, Shield, Smartphone, Star, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeLargeTitles"
      background="aurora"
      cardStyle="subtle-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="AutoService Rhön"
          navItems={[
            { name: "Leistungen", id: "services" },
            { name: "Über uns", id: "about" },
            { name: "Bewertungen", id: "testimonials" },
            { name: "Kontakt", id: "contact" },
          ]}
          button={{ text: "Termin vereinbaren", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="AutoService Rhön"
          description="Ihre zuverlässige Autowerkstatt in Bad Neustadt – Schneller Service, faire Preise und persönliche Beratung"
          buttons={[
            { text: "Termin vereinbaren", href: "#contact" },
            { text: "09771 123456", href: "tel:09771123456" },
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/worker-follows-car-checklist-fixing-tires_482257-75661.jpg",              imageAlt: "Moderne Autowerkstatt mit professionellem Equipment"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-car-service-checking-up-car_1303-32024.jpg?_wi=1",              imageAlt: "Wartung und Inspektion von Fahrzeugen"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/muscular-man-is-fixing-car-s-wheel-with-special-tool-auto-service_613910-17086.jpg?_wi=1",              imageAlt: "Reifenservice und Radwechsel"},
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          features={[
            {
              id: "1",              title: "Inspektion & Wartung",              description: "Regelmäßige Inspektionen und Wartungsarbeiten nach Herstellervorgaben zur Sicherung der Fahrzeugsicherheit und Langlebigkeit",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-car-service-checking-up-car_1303-32024.jpg?_wi=2",                imageAlt: "Fahrzeuginspektion und Wartung"},
              items: [
                { icon: CheckCircle, text: "Ölwechsel und Filterwechsel" },
                { icon: CheckCircle, text: "Flüssigkeitsprüfung" },
                { icon: CheckCircle, text: "Verschleißteile kontrolliert" },
              ],
              reverse: false,
            },
            {
              id: "2",              title: "Reifenservice & Wechsel",              description: "Professioneller Reifenservice mit modernem Equipment für Sicherheit und optimale Fahzeugleistung auf Bad Neustadts Straßen",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/muscular-man-is-fixing-car-s-wheel-with-special-tool-auto-service_613910-17086.jpg?_wi=2",                imageAlt: "Reifenwechsel und Service"},
              items: [
                { icon: CheckCircle, text: "Reifenwechsel nach Saison" },
                { icon: CheckCircle, text: "Radauswuchtung und -ausrichtung" },
                { icon: CheckCircle, text: "Reifenreparatur und Ersatz" },
              ],
              reverse: true,
            },
            {
              id: "3",              title: "Reparaturen aller Marken",              description: "Spezialisierte Reparaturen für alle gängigen Fahrzeugmarken mit Original- und Qualitätsteilen sowie schnellen Durchlaufzeiten",              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/hands-mechanic-using-diagnostic-tool_1170-1188.jpg",                imageAlt: "Fahzeugdiagnostik und Reparatur"},
              items: [
                { icon: CheckCircle, text: "Motor- und Getriebeworkstatt" },
                { icon: CheckCircle, text: "Elektronik- und Softwarediagnose" },
                { icon: CheckCircle, text: "Achsvermessung und Bremsenservice" },
              ],
              reverse: false,
            },
          ]}
          title="Unsere Leistungen"
          description="Wir bieten umfassende Dienstleistungen für alle Fahrzeugmarken – von der Routinewartung bis zur komplexen Reparatur"
          tag="Services"
          tagIcon={Wrench}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Über AutoService Rhön"
          description="Seit vielen Jahren vertrauen Autobesitzer aus Bad Neustadt und der Rhön auf unseren schnellen und ehrlichen Service. Unser erfahrenes Team kümmert sich um Fahrzeuge aller Marken mit Fokus auf Zuverlässigkeit, Transparenz und faire Preise – damit Sie sich sicher unterwegs fühlen."
          tag="Über uns"
          tagIcon={Shield}
          imageSrc="http://img.b2bpic.net/free-photo/happy-mechanic-greeting-with-his-african-american-coworker-auto-repair-shop_637285-11601.jpg"
          imageAlt="Unser erfahrenes Team in der Werkstatt"
          buttons={[{ text: "Kontakt aufnehmen", href: "#contact" }]}
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          metrics={[
            {
              id: "1",              value: "20+",              title: "Jahre Erfahrung",              items: ["Zertifizierte Meister", "Spezialisierte Teams", "Kontinuierliche Weiterbildung"],
            },
            {
              id: "2",              value: "98%",              title: "Kundenzufriedenheit",              items: ["Prompter Service", "Faire Preiskalkulation", "Transparente Kommunikation"],
            },
            {
              id: "3",              value: "Alle Marken",              title: "Fahrzeugmarken",              items: ["Deutsche Hersteller", "Internationale Marken", "Spezialfahrzeuge"],
            },
            {
              id: "4",              value: "24h",              title: "Notfall-Service",              items: ["Pannenhilfe verfügbar", "Schnelle Reaktionszeit", "Pannenkommunikation"],
            },
          ]}
          title="Warum AutoService Rhön"
          description="Zahlen, die für unsere Leistung sprechen"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          testimonials={[
            {
              id: "1",              name: "Markus K.",              role: "Autobesitzer",              company: "Bad Neustadt",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg?_wi=1",              imageAlt: "Markus K. - Zufriedener Kunde"},
            {
              id: "2",              name: "Julia S.",              role: "Kundin",              company: "Rhön Region",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg",              imageAlt: "Julia S. - Zufriedene Kundin"},
            {
              id: "3",              name: "Thomas R.",              role: "Langzeitkunde",              company: "Bad Neustadt",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg?_wi=2",              imageAlt: "Thomas R. - Langzeitkunde"},
            {
              id: "4",              name: "Daniel M.",              role: "Autobesitzer",              company: "Umgebung",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/business-woman-standing_1187-1543.jpg",              imageAlt: "Daniel M. - Zufriedener Kunde"},
          ]}
          kpiItems={[
            { value: "2.500+", label: "Fahrzeuge gewartet pro Jahr" },
            { value: "98%", label: "Kundenzufriedenheitsrate" },
            { value: "Same-Day", label: "Service in den meisten Fällen" },
          ]}
          animationType="slide-up"
          title="Kundenbewertungen"
          description="Das sagen unsere zufriedenen Kunden aus Bad Neustadt und der Rhön über unseren Service"
          tag="Bewertungen"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          faqs={[
            {
              id: "1",              title: "Welche Fahrzeugmarken reparieren Sie?",              content: "Wir reparieren und warten Fahrzeuge aller gängigen Hersteller – Deutsche Marken wie VW, Audi, BMW, Mercedes sowie internationale Fabrikate. Unser erfahrenes Team hat die nötige Expertise für Ihr Fahrzeug."},
            {
              id: "2",              title: "Wie lange dauert eine typische Reparatur?",              content: "Die Dauer hängt von der Art der Reparatur ab. Einfache Wartungen wie Ölwechsel dauern 30-60 Minuten, während komplexere Reparaturen mehrere Stunden benötigen können. Gerne erstellen wir Ihnen nach der Diagnose einen verbindlichen Zeitrahmen."},
            {
              id: "3",              title: "Welche Garantie gewähren Sie?",              content: "Alle Reparaturen werden mit einer Gewährleistung von 12 Monaten ab Reparaturdatum durchgeführt. Verwendete Ersatzteile erhalten je nach Hersteller zusätzliche Garantien."},
            {
              id: "4",              title: "Kann ich einen Termin online vereinbaren?",              content: "Sie können einen Termin gerne telefonisch unter 09771 123456 oder per E-Mail vereinbaren. Nutzen Sie auch unser Kontaktformular auf dieser Website – wir rufen Sie schnellstmöglich zurück."},
            {
              id: "5",              title: "Bieten Sie einen Pannenhilfe-Service an?",              content: "Ja! Wir bieten 24-Stunden-Pannenhilfe an. Bei Notfällen können Sie uns jederzeit kontaktieren. Unser mobiles Team hilft schnell vor Ort oder schleppt Ihr Fahrzeug in unsere Werkstatt."},
            {
              id: "6",              title: "Wie sind Ihre Öffnungszeiten?",              content: "Montag–Freitag: 07:00–18:00 Uhr | Samstag: 08:00–13:00 Uhr | Sonntag: Geschlossen. Notfälle und Pannenhilfe sind 24/7 verfügbar."},
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/car-mechanic-car-service-checking-up-car_1303-32024.jpg?_wi=3"
          imageAlt="Unser Service-Team antwortet auf Ihre Fragen"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          title="Häufig gestellte Fragen"
          description="Schnelle Antworten auf Ihre Fragen zu unseren Services, Öffnungszeiten und Preisen"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground={false}
          mediaPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Jetzt Kontakt aufnehmen"
          tagIcon={Phone}
          title="Bereit für schnellen und zuverlässigen Service?"
          description="Vereinbaren Sie jetzt einen Termin oder rufen Sie uns an. Unser Team freut sich auf Sie!"
          buttons={[
            { text: "Termin vereinbaren", href: "tel:09771123456" },
            { text: "E-Mail senden", href: "mailto:info@autoservice-rhoen.de" },
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="AutoService Rhön"
          copyrightText="© 2025 AutoService Rhön | Industriestraße 8, 97616 Bad Neustadt | 09771 123456"
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Folgen Sie uns auf Facebook" },
            { icon: Smartphone, href: "tel:09771123456", ariaLabel: "Rufen Sie uns an" },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
