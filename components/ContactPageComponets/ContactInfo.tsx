type Props = {
  phones: string[];
  email: string;
};

export default function ContactInfo({ phones, email }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white p-5 rounded-xl shadow-sm border pt-10 pb-10 px-5 pr-5">
        <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-5 h-5 text-red-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>Call Us</h3>
        {phones.map((p, i) => (
          <p key={i} className="text-gray-600 text-[17px] font-bold">
            {p}
          </p>
        ))}
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border">
        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-5 h-5 text-sky-600"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> Email Us</h3>
        <p className="text-blue-600 text-[17px] font-bold">{email}</p>
      </div>
    </div>
  );
}