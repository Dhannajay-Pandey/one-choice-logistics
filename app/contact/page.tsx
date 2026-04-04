import React from 'react'
import Breadcrumbs from '@/components/ContactPageComponets/Breadcrumbs';
import ContactCard from '@/components/ContactPageComponets/ContactCard';
import ContactForm from '@/components/ContactPageComponets/ContactForm';
import ContactInfo from '@/components/ContactPageComponets/ContactInfo';
import SuccessSection from '@/components/ContactPageComponets/SuccessSection';
import { contactData } from '@/data/contactData';

const ContactPage = () => {
    return (
        <>
            <main className="flex-grow">
                <Breadcrumbs />
                <div className="bg-gray-100 py-10 px-4 md:px-10">
                    <div className="max-w-7xl mx-auto">

                        <div className="grid lg:grid-cols-3 gap-6">

                            {/* LEFT */}
                            <div className="lg:col-span-2 space-y-6">

                                {/* Office Cards */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {contactData.offices.map((office, i) => (
                                        <ContactCard key={i} {...office} />
                                    ))}
                                </div>

                                {/* Contact Info */}
                                <ContactInfo {...contactData.contacts} />

                                {/* Success Section */}
                                <SuccessSection {...contactData.success} />

                            </div>

                            {/* RIGHT FORM */}
                            <div className="lg:sticky lg:top-24 h-fit">
                                <ContactForm />
                            </div>

                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage
