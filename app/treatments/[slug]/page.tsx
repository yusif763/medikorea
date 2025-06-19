// app/treatments/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { treatments } from "@/app/data/treatments";
import { Carousel } from "@/app/components/Carousel";

export async function generateStaticParams() {
  return Object.keys(treatments).map((slug) => ({ slug }));
}

export default function TreatmentPage({ params }: { params: { slug: string } }) {
  const treatment = treatments[params.slug];
  if (!treatment) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero + Carousel */}
      <div className="relative w-full overflow-hidden h-64 sm:h-96">
        <Carousel images={treatment.images} altPrefix={treatment.title} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end px-6 pb-8">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold drop-shadow-lg">
            {treatment.title}
          </h1>
        </div>
      </div>

      <main className="max-w-5xl mx-auto p-6 sm:p-12">
        {/* About */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">About {treatment.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{treatment.description}</p>
        </section>

        {/* Steps */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Steps Involved</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatment.steps.map((s: any, idx: number) => (
              <div key={idx} className="bg-white shadow-lg rounded-xl p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-500 text-white text-lg font-bold rounded-full">
                    {idx + 1}
                  </div>
                  <h4 className="ml-4 text-xl font-semibold">{s.title}</h4>
                </div>
                <p className="text-gray-600">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16 rounded-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Why Choose Us?</h3>
            <p className="text-gray-700 text-lg mx-auto mt-4 max-w-3xl">
              Excellent outcomes, compassionate care, and cutting-edge technology define our approach.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Expert Doctors", svg: "/icons/doctor.svg", text: "Qualified specialists in each field." },
              { title: "Advanced Technology", svg: "/icons/technology.svg", text: "State‑of‑the‑art diagnostics & treatment." },
              { title: "Patient‑Centered Care", svg: "/icons/patient.svg", text: "Prioritizing your comfort and journey." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
                <Image src={item.svg} alt={item.title} width={56} height={56} className="mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">What Our Patients Say</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "“Their rehabilitation program transformed my recovery—I feel stronger and more confident every day.”",
                author: "Patient A",
              },
              {
                quote:
                  "“The diagnostic team caught my condition early, enabling prompt and effective treatment.”",
                author: "Patient B",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-600 italic mb-4">{t.quote}</p>
                <p className="text-gray-800 font-semibold text-right">— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-16 px-8 rounded-xl text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-lg mb-8">Contact us to learn more about {treatment.title} and how we can help.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold rounded-full px-8 py-4 shadow hover:bg-gray-100 transition"
          >
            📞 Schedule a Consultation
          </a>
        </section>
      </main>
    </div>
  );
}
