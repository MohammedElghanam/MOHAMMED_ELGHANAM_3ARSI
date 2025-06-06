import { useState } from "react";
import { Plus, FileText, Briefcase, Calendar, MapPin, Phone } from "lucide-react";
import { CreatePostPopup } from './createPostPopup'
import CreateServicePopup from "./createServicePopup";
import CardServices from "../cardServices";
import CardPosts from "../cardPosts";
import DashboardNav from "../dashboardNav";

const serviceTypes = [
  "neggafa",
  "music_band",
  "caterer",
  "makeup",
  "hair_style",
  "party_room",
  "photographer",
  "hotel",
  "honeymoon",
];

const mockPosts = [
  {
    id: "1",
    image: "/placeholder.svg?height=200&width=300",
    description: "Service de traiteur professionnel pour vos mariages.",
    date: "2024-01-15",
  },
  {
    id: "2",
    image: "/placeholder.svg?height=200&width=300",
    description: "Photographe spécialisé dans les mariages.",
    date: "2024-01-10",
  },
  {
    id: "1",
    image: "/placeholder.svg?height=200&width=300",
    description: "Service de traiteur professionnel pour vos mariages.",
    date: "2024-01-15",
  },
  {
    id: "2",
    image: "/placeholder.svg?height=200&width=300",
    description: "Photographe spécialisé dans les mariages.",
    date: "2024-01-10",
  },
];

const mockServices = [
  {
    id: "1",
    nom: "Traiteur Premium Casablanca",
    type: "traiteur",
    telephone: "+212 6 12 34 56 78",
    tarif: 2500,
  },
  {
    id: "2",
    nom: "Photographe Professionnel",
    type: "photographer",
    telephone: "+212 6 87 65 43 21",
    tarif: 1200,
  },
  {
    id: "1",
    nom: "Traiteur Premium Casablanca",
    type: "traiteur",
    telephone: "+212 6 12 34 56 78",
    tarif: 2500,
  },
  {
    id: "2",
    nom: "Photographe Professionnel",
    type: "photographer",
    telephone: "+212 6 87 65 43 21",
    tarif: 1200,
  },
];

const mockWeddingRequests = [
  {
    id: "1",
    serviceType: "traiteur",
    mariageName: "Mariage Fatima & Ahmed",
    lieu: "Villa des Roses",
    ville: "Casablanca",
    telephone: "+212 6 11 22 33 44",
    date: "2024-06-15",
    nombreInvites: 150,
  },
  {
    id: "1",
    serviceType: "traiteur",
    mariageName: "Mariage Fatima & Ahmed",
    lieu: "Villa des Roses",
    ville: "Casablanca",
    telephone: "+212 6 11 22 33 44",
    date: "2024-06-15",
    nombreInvites: 150,
  },
];

export default function ProviderDashboard() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showCreateService, setShowCreateService] = useState(false);
  const [posts, setPosts] = useState(mockPosts);
  const [services, setServices] = useState(mockServices);

  const handleCreatePost = (postData) => {
    const newPost = {
      id: Date.now().toString(),
      ...postData,
      date: new Date().toISOString().split("T")[0],
    };
    setPosts([newPost, ...posts]);
  };

  const handleCreateService = (serviceData) => {
    const newService = {
      id: Date.now().toString(),
      ...serviceData,
    };
    setServices([newService, ...services]);
  };

  return (
    <div className="space-y-8 p-4">

      <DashboardNav />

      {/* Posts Section */}
      <div className="border rounded-lg shadow">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-blue-600">
            <FileText className="w-5 h-5" />
            Mes Posts
          </h2>
          <button
            onClick={() => setShowCreatePost(true)}
            className="flex items-center px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Plus className="w-4 h-4 mr-1" />
            Créer Post
          </button>
        </div>
        <div >
          <CardPosts />
        </div>
      </div>

      {/* Services Section */}
      <div className="border rounded-lg shadow">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-green-600">
            <Briefcase className="w-5 h-5" />
            Mes Services
          </h2>
          <button
            onClick={() => setShowCreateService(true)}
            className="flex items-center px-3 py-1.5 bg-green-500 text-white rounded hover:bg-green-600"
          >
            <Plus className="w-4 h-4 mr-1" />
            Créer Service
          </button>
        </div>
        <div >
          <CardServices />
        </div>
      </div>

      {/* Wedding Requests */}
      <div className="border rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-purple-600">
            <Calendar className="w-5 h-5" />
            Demandes de Mariage
          </h2>
        </div>
        <div className="p-4 space-y-4">
          {mockWeddingRequests.map((req) => (
            <div key={req.id} className="border rounded bg-purple-50 p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-purple-800">{req.mariageName}</h3>
                <span className="text-sm bg-purple-500 text-white px-2 py-1 rounded">{req.serviceType}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    {req.lieu}, {req.ville}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-purple-600" />
                    {req.telephone}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    {req.date}
                  </p>
                  <p>
                    <strong>Invités:</strong> {req.nombreInvites}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Popups Here */}
      {showCreatePost && (
        <div>
            <CreatePostPopup onClose={() => setShowCreatePost(false)} />
        </div>
      )}
      {showCreateService && (
        <div>
            <CreateServicePopup 
                onClose={() => setShowCreateService(false)}
                serviceTypes={serviceTypes}
            />
        </div>
      )}
    </div>
  );
}
