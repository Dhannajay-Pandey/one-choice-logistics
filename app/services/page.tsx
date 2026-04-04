import PageBanner from '@/components/PageBanner'
import ServiceCard from '@/components/serviceComponentes/ServiceCard'
import TestimonialService from '@/components/serviceComponentes/TestimonialService'
import { services } from '@/data/ServiceApi/services'
import React from 'react'

function ServicePage() {
  return (
    <main>
      <PageBanner />
      <div className="container mx-auto px-4 py-16 space-y-20">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} reverse={index % 2 !== 0} />
        ))}
      </div>
      <TestimonialService />
    </main>
  )
}

export default ServicePage