"use client";

import Breadcrumbs from "@/components/ContactPageComponets/Breadcrumbs";
import ContactCard from "@/components/ContactPageComponets/ContactCard";
import ContactForm from "@/components/ContactPageComponets/ContactForm";
import ContactInfo from "@/components/ContactPageComponets/ContactInfo";
import SuccessSection from "@/components/ContactPageComponets/SuccessSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();
  const c = translations[language].contact;

  return (
    <main>
      <Breadcrumbs title={c.breadcrumb.title} subtitle={c.breadcrumb.subtitle} />
      <div className="bg-gray-100 py-8 sm:py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {c.offices.map((office, i) => (
                  <ContactCard key={i} {...office} />
                ))}
              </div>
              <ContactInfo
                phones={c.contacts.phones}
                email={c.contacts.email}
                callUs={c.contacts.callUs}
                emailUs={c.contacts.emailUs}
              />
              <SuccessSection
                title={c.success.title}
                desc={c.success.desc}
                image="/images/contact.png"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="lg:sticky lg:top-24 h-fit">
              <ContactForm form={c.form} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
