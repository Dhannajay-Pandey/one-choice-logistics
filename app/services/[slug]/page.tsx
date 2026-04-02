import { services } from "@/data/ServiceApi/services";
import { serviceDetailMap } from "@/data/ServiceApi/serviceDetail";
import ServiceDetailsMainLayout from "@/components/serviceComponentes/ServiceDetailsMainLayout";
import ServiceBannerBradcrums from "@/components/serviceComponentes/ServiceBradcrums";

export default function ServiceDetailsPage({ params }: any) {
  const service = services.find((item) => item.slug === params.slug);
  const detail = serviceDetailMap[params.slug];

  if (!service || !detail) return <div>Service Not Found</div>;

  return (
    <>
      <ServiceBannerBradcrums service={service} />
      <ServiceDetailsMainLayout data={detail} />
    </>
  );
}
