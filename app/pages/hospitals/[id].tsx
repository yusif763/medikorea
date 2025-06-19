import { useRouter } from "next/router";

const mockData = {
  horovice: {
    title: "Horovice Hospital",
    description: "State-of-the-art healthcare facilities in Horovice.",
    image: "/horovice-hospital.jpg",
  },
  beroun: {
    title: "Beroun Rehabilitation Hospital",
    description: "Specialized rehabilitation services in Beroun.",
    image: "/beroun-hospital.jpg",
  },
  "prague-diagnostic": {
    title: "Diagnostic Centres in Prague",
    description: "Advanced diagnostic services in Prague.",
    image: "/prague-diagnostic.jpg",
  },
  "oncological-centre": {
    title: "Oncological Centre Multiscan",
    description: "Comprehensive oncology care at Multiscan.",
    image: "/oncological-centre.jpg",
  },
  "mental-rehabilitation": {
    title: "Mental Rehabilitation Centre",
    description: "Mental health rehabilitation services.",
    image: "/mental-rehabilitation.jpg",
  },
  "cliniq-dejvice": {
    title: "Cliniq Dejvice",
    description: "Premium healthcare services at Cliniq Dejvice.",
    image: "/cliniq-dejvice.jpg",
  },
  "europe-ivf": {
    title: "The Europe IVF+",
    description: "Leading IVF services in Europe.",
    image: "/europe-ivf.jpg",
  },
};

export default function Hospitals() {
  const router = useRouter();
  const { id } = router.query;

  console.log("Dynamic route ID:", id); // Debug log

  const data = mockData[id as keyof typeof mockData];
    
  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <img src={data.image} alt={data.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg">{data.description}</p>
    </div>
  );
}
