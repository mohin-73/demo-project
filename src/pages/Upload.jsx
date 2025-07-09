import { useContext, useState } from "react";
import api from "../api";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function Upload() {
  const { token } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("photo", file);

    try {
      await api.post("/photos/upload", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Upload successful!");
    } catch (err) {
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300">
      <Card className="p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Upload a Photo</h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full"
          />
          <Button type="submit">Upload</Button>
          {message && <p className="text-sm">{message}</p>}
        </form>
      </Card>
    </div>
  );
}
