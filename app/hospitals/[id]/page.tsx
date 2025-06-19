import { notFound } from "next/navigation";

const mockData = {
  horovice: {
    title: "Horovice Hospital",
    description: "State-of-the-art healthcare facilities in Horovice.",
    images: ["https://plus.unsplash.com/premium_photo-1672097247893-4f8660247b1f?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1672097247790-234855b64f1a?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1672097247764-61a6d8aaa477?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    services: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Emergency Care"],
    highlights: [
      {
        title: "Advanced Cardiology Department",
        description: "Equipped with the latest technology for heart care.",
        image: "https://plus.unsplash.com/premium_photo-1672097247893-4f8660247b1f?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Modern Neurology Wing",
        description: "Specialized in treating neurological disorders.",
        image: "https://plus.unsplash.com/premium_photo-1672097247790-234855b64f1a?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    contact: {
      phone: "+420 123 456 789",
      email: "info@horovicehospital.com",
      address: "123 Horovice Street, Horovice, Czech Republic",
    },
  },
  beroun: {
    title: "Beroun Rehabilitation Hospital",
    description: "Specialized rehabilitation services in Beroun.",
    images: ["/beroun-hospital.jpg", "/beroun-hospital-2.jpg"],
    services: ["Physical Therapy", "Occupational Therapy", "Speech Therapy"],
    highlights: [
        {
          title: "Advanced Cardiology Department",
          description: "Equipped with the latest technology for heart care.",
          image: "/horovice-cardiology.jpg",
        },
        {
          title: "Modern Neurology Wing",
          description: "Specialized in treating neurological disorders.",
          image: "/horovice-neurology.jpg",
        },
      ],
    contact: {
      phone: "+420 987 654 321",
      address: "123 Horovice Street, Horovice, Czech Republic",

      email: "contact@berounrehab.com",
    },
  },
  "prague-diagnostic": {
    title: "Diagnostic Centres in Prague",
    description: "Advanced diagnostic services in Prague.",
    images: ["/prague-diagnostic.jpg"],
    services: ["Radiology", "Pathology", "Imaging"],
    highlights: [
        {
          title: "Advanced Cardiology Department",
          description: "Equipped with the latest technology for heart care.",
          image: "/horovice-cardiology.jpg",
        },
        {
          title: "Modern Neurology Wing",
          description: "Specialized in treating neurological disorders.",
          image: "/horovice-neurology.jpg",
        },
      ],
    contact: {
      phone: "+420 111 222 333",
      address: "123 Horovice Street, Horovice, Czech Republic",

      email: "info@praguediagnostic.com",
    },
  },
  "oncological-centre": {
    title: "Oncological Centre Multiscan",
    description: "Comprehensive oncology care at Multiscan.",
    images: ["/oncological-centre.jpg"],
    services: ["Chemotherapy", "Radiotherapy", "Cancer Surgery"],
    highlights: [
        {
          title: "Advanced Cardiology Department",
          description: "Equipped with the latest technology for heart care.",
          image: "/horovice-cardiology.jpg",
        },
        {
          title: "Modern Neurology Wing",
          description: "Specialized in treating neurological disorders.",
          image: "/horovice-neurology.jpg",
        },
      ],
    contact: {
      phone: "+420 444 555 666",
      address: "123 Horovice Street, Horovice, Czech Republic",

      email: "contact@multiscanoncology.com",
    },
  },
  "mental-rehabilitation": {
    title: "Mental Rehabilitation Centre",
    description: "Mental health rehabilitation services.",
    images: ["/mental-rehabilitation.jpg"],
    services: ["Psychotherapy", "Counseling", "Group Therapy"],
    highlights: [
        {
          title: "Advanced Cardiology Department",
          description: "Equipped with the latest technology for heart care.",
          image: "/horovice-cardiology.jpg",
        },
        {
          title: "Modern Neurology Wing",
          description: "Specialized in treating neurological disorders.",
          image: "/horovice-neurology.jpg",
        },
      ],
    contact: {
      address: "123 Horovice Street, Horovice, Czech Republic",
      phone: "+420 777 888 999",
      email: "info@mentalrehab.com",
    },
  },
  "cliniq-dejvice": {
    title: "Cliniq Dejvice",
    description: "Premium healthcare services at Cliniq Dejvice.",
    images: ["/cliniq-dejvice.jpg"],
    services: ["General Practice", "Specialist Consultations", "Diagnostics"],
    highlights: [
        {
          title: "Advanced Cardiology Department",
          description: "Equipped with the latest technology for heart care.",
          image: "/horovice-cardiology.jpg",
        },
        {
          title: "Modern Neurology Wing",
          description: "Specialized in treating neurological disorders.",
          image: "/horovice-neurology.jpg",
        },
      ],
    contact: {
      address: "123 Horovice Street, Horovice, Czech Republic",
      phone: "+420 123 321 123",
      email: "contact@cliniqdejvice.com",
    },
  },
  "europe-ivf": {
    title: "The Europe IVF+",
    description: "Leading IVF services in Europe.",
    images: ["/europe-ivf.jpg"],
    services: ["IVF Treatment", "Fertility Counseling", "Egg Donation"],
    highlights: [
        {
          title: "Advanced Cardiology Department",
          description: "Equipped with the latest technology for heart care.",
          image: "/horovice-cardiology.jpg",
        },
        {
          title: "Modern Neurology Wing",
          description: "Specialized in treating neurological disorders.",
          image: "/horovice-neurology.jpg",
        },
      ],
    contact: {
      address: "123 Horovice Street, Horovice, Czech Republic",
      phone: "+420 999 888 777",
      email: "info@europeivf.com",
    },
  },
};

export default async function Hospitals({ params }: { params: { id: string } }) {
  const { id } = params;

  const data = mockData[id as keyof typeof mockData];

  if (!data) {
    notFound();
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-6">{data.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {data.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${data.title} - Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
      <p className="text-lg text-gray-700 mb-6">{data.description}</p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
        <ul className="list-disc list-inside text-gray-600">
          {data.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Hospital Highlights</h2>
        {data && data.highlights && data?.highlights?.map((highlight: any, index: any) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center mb-6`}
          >
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md mb-4 md:mb-0"
            />
            <div className="md:w-1/2 md:pl-6">
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-gray-700">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          <strong>Phone:</strong> {data.contact.phone}
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong>{" "}
          <a href={`mailto:${data.contact.email}`} className="text-blue-500 underline">
            {data.contact.email}
          </a>
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> {data.contact.address}
        </p>
      </div>
    </div>
  );
}
