// components/About.tsx
export default function About() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-gradient-to-r from-[#F3F2F3] to-blue-100 text-center lg:text-left relative">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="">
          <div className="z-[2] relative"> 
          <h2 className="text-4xl font-extrabold text-[#0641c9] mb-6 leading-tight">
            About <span className="text-[#095F8b]">MediHelp Korea</span>
          </h2>
          <p className="text-lg text-[#095F8b] leading-relaxed mb-4">
            At MediHelp Korea, we don’t just book appointments — we curate entire medical experiences.
          </p>
          <p className="text-lg text-[#095F8b] leading-relaxed mb-4">
            We are a premium medical concierge agency based in Seoul, dedicated to guiding international clients through South Korea’s most advanced clinics, doctors, and wellness solutions.
          </p>
          <p className="text-lg text-[#095F8b] leading-relaxed mb-4">
            Whether you’re coming for a comprehensive check-up, transformative aesthetic treatment, or a complex surgical procedure — we handle everything: from clinic selection and doctor coordination to translation, aftercare, and VIP hospitality.
          </p>
          <p className="text-lg text-[#095F8b] leading-relaxed">
            Our service is personal. Discreet. Stylish. We speak your language, understand your priorities, and deliver results with integrity and care.
          </p>
            </div>

         
          <img
            src="/about.png"
            width={400}

            alt="About MediHelp Korea"
            className="absolute bottom-0 right-0 z-[1] opacity-40 hidden lg:block"
          />
        </div>
        <div className="">
         
        </div>
      </div>
    </section>
  );
}
