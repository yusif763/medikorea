// components/About.tsx
export default function About() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-gradient-to-r from-[#F3F2F3] to-blue-100 text-center lg:text-left relative">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-[#0641c9] mb-6 leading-tight">
            About <span className="text-[#095F8b]">MediHelp Korea</span>
          </h2>
          <p className="text-lg text-[#095F8b] leading-relaxed">
            We are the oldest medical tourism agency specializing in VIP clients and accredited by the Korean government. 
            Our mission is to provide premium medical tourism and concierge services for anyone seeking treatment in Korea. 
            From consultations to recovery, we ensure a seamless and luxurious experience tailored to your needs.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/about.png"
            width={400}
            alt="About MediHelp Korea"
            className="absolute bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
