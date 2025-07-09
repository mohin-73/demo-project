import { useEffect, useState } from "react";
import api from "../api";
import PhotoCard from "../components/PhotoCard";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    api
      .get("/photos")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-200 to-purple-400">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Photo Gallery
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {photos.map((photo) => (
          <PhotoCard key={photo._id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
