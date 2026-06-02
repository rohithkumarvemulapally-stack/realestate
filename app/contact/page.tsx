import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import StaticMap from "@/components/StaticMap";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Meridian Estates. Tell us what you're looking for or ready to sell, and an agent will be in touch.",
};

const details = [
  { icon: Mail, label: "Email", value: "hello@meridianestates.in", href: "mailto:hello@meridianestates.in" },
  { icon: Phone, label: "Phone", value: "+91 40 4567 8900", href: "tel:+914045678900" },
  { icon: MapPin, label: "Office", value: "Road No. 12, Banjara Hills, Hyderabad 500034" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 9:30am to 7:00pm" },
];

export default function ContactPage() {
  return (
    <div className="container-px pb-24 pt-28 lg:pt-32">
      <AnimatedSection className="max-w-3xl">
        <Badge tone="accent">Contact</Badge>
        <h1 className="mt-5 text-display font-bold tracking-editorial text-blue-900">
          Start a conversation.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          Whether you&apos;re buying, renting, or ready to list — send us a note.
          We read every enquiry and reply personally.
        </p>
      </AnimatedSection>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_380px]">
        <AnimatedSection
          direction="right"
          className="rounded-2xl bg-white p-6 ring-1 ring-blue-900/5 sm:p-8"
        >
          <ContactForm />
        </AnimatedSection>

        <AnimatedSection direction="left" className="space-y-8">
          <div className="space-y-5">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brown-300/30 text-brown-700">
                  <d.icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/50">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="link-underline font-medium text-blue-900"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-medium text-blue-900">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <StaticMap location="Banjara Hills, Hyderabad" />
        </AnimatedSection>
      </div>
    </div>
  );
}
