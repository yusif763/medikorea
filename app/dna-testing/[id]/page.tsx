import { notFound } from "next/navigation";

const mockData = {
  premium: {
    title: "DNA Test Premium",
    description: "Comprehensive DNA testing for premium health insights.",
    images: ["/dna-test-premium.jpg", "/dna-test-premium-2.jpg"],
    highlights: [
      {
        title: "Advanced Genetic Analysis",
        description: "Get detailed insights into your genetic makeup.",
        image: "/dna-test-premium-highlight-1.jpg",
      },
      {
        title: "Personalized Health Recommendations",
        description: "Tailored advice based on your DNA results.",
        image: "/dna-test-premium-highlight-2.jpg",
      },
    ],
    benefits: ["Comprehensive Reports", "Health Risk Assessment", "Dietary Recommendations"],
    contact: {
      phone: "+420 123 456 789",
      email: "info@dnatestpremium.com",
    },
  },
  health: {
    title: "DNA Test Health",
    description: "Focused DNA testing for health-related insights.",
    images: ["/dna-test-health.jpg", "/dna-test-health-2.jpg"],
    highlights: [
      {
        title: "Health Risk Analysis",
        description: "Identify potential health risks based on your DNA.",
        image: "/dna-test-health-highlight-1.jpg",
      },
      {
        title: "Preventive Health Strategies",
        description: "Plan your health journey with actionable insights.",
        image: "/dna-test-health-highlight-2.jpg",
      },
    ],
    benefits: ["Disease Risk Analysis", "Preventive Care Suggestions", "Genetic Counseling"],
    contact: {
      phone: "+420 987 654 321",
      email: "info@dnatesthealth.com",
    },
  },
  lifestyle: {
    title: "DNA Test Lifestyle",
    description: "DNA testing tailored for lifestyle improvements.",
    images: ["/dna-test-lifestyle.jpg", "/dna-test-lifestyle-2.jpg"],
    highlights: [],
    benefits: [],
    contact: {
      phone: "+420 111 222 333",
      email: "info@dnatestlifestyle.com",
    },
  },
  platinum: {
    title: "DNA Test Platinum",
    description: "Exclusive DNA testing for platinum-level insights.",
    images: ["/dna-test-platinum.jpg", "/dna-test-platinum-2.jpg"],
    highlights: [],
    benefits: [],
    contact: {
      phone: "+420 444 555 666",
      email: "info@dnatestplatinum.com",
    },
  },
};

export async function generateStaticParams() {
  const ids = Object.keys(mockData);
  return ids.map((id) => ({ id }));
}

export default async function DnaTesting({ params }: { params: { id: string } }) {
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
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-600">
          {data.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        {data.highlights.map((highlight, index) => (
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
      </div>
    </div>
  );
}
