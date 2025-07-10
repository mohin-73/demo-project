import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Gallery({ loggedInUser }) {
  const [photos, setPhotos] = useState([
    {
      id: uuidv4(),
      src: "https://via.placeholder.com/300?text=Photo+1",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://via.placeholder.com/300?text=Photo+2",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://via.placeholder.com/300?text=Photo+3",
      liked: 0,
      disliked: 0,
    },
  ]);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadUrl, setUploadUrl] = useState("");

  const handleLike = (id) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: p.liked + 1 } : p))
    );
  };

  const handleDislike = (id) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, disliked: p.disliked + 1 } : p))
    );
  };

  return (
    <>
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-neutral-900 text-white p-4 rounded-lg shadow hover:shadow-xl transition"
          >
            <img
              src={photo.src}
              alt="Photo"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="flex justify-between items-center mt-4 text-sm">
              <button
                onClick={() => handleLike(photo.id)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                <span>❤️</span>
                <span>{photo.liked}</span>
              </button>
              <button
                onClick={() => handleDislike(photo.id)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                <span>👎</span>
                <span>{photo.disliked}</span>
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg w-80 relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Upload Photo
            </h2>
            <input
              type="text"
              placeholder="Image URL"
              value={uploadUrl}
              onChange={(e) => setUploadUrl(e.target.value)}
              className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400"
            />
            <button
              className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition"
              onClick={() => {
                if (!uploadUrl.trim()) return;
                const newPhoto = {
                  id: uuidv4(),
                  src: uploadUrl.trim(),
                  liked: 0,
                  disliked: 0,
                };
                setPhotos([newPhoto, ...photos]);
                setUploadUrl("");
                setShowUpload(false);
              }}
            >
              Submit
            </button>
            <button
              onClick={() => setShowUpload(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-yellow-400 text-xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Upload Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => {
            if (loggedInUser) setShowUpload(true);
            else alert("Please login to upload");
          }}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded shadow-lg"
        >
          Upload Photo
        </button>
      </div>
    </>
  );
}
