import { useState } from "react";
import Upload from "./pages/Upload";
<Route path="/upload" element={<Upload />} />

export default function PhotoApp() {
  const [photos, setPhotos] = useState([
    { id: 1, src: "https://via.placeholder.com/300", liked: 0, disliked: 0 },
    { id: 2, src: "https://via.placeholder.com/300", liked: 0, disliked: 0 },
    { id: 3, src: "https://via.placeholder.com/300", liked: 0, disliked: 0 },
  ]);
  const [users, setUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

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

  const handleRegister = () => {
    const username = document.getElementById("reg-username").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const confirmPassword = document.getElementById("reg-confirm-password").value.trim();

    if (!username || !email || !password || !confirmPassword) {
      setRegisterError("All fields required");
      return;
    }
    if (password !== confirmPassword) {
      setRegisterError("Passwords do not match");
      return;
    }
    if (users.find((u) => u.username === username)) {
      setRegisterError("Username already exists");
      return;
    }

    setUsers([...users, { username, email, password }]);
    setShowRegister(false);
    setRegisterError("");
    alert("Registration successful!");
  };

  const handleLogin = () => {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert(`Welcome ${username}!`);
      setShowLogin(false);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      <nav className="flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Logo" className="h-6" />
          <span className="text-xl font-bold tracking-wide" style={{ fontFamily: "cursive" }}>PhotoShare</span>
        </div>
        <div className="space-x-4">
          <button className="text-gray-300 hover:text-yellow-400 transition" onClick={() => alert('Gallery Clicked')}>Gallery</button>
          <button className="text-gray-300 hover:text-yellow-400 transition" onClick={() => alert('Upload Clicked')}>Upload</button>
          <button className="text-gray-300 hover:text-yellow-400 transition" onClick={() => alert('About Clicked')}>About</button>
          <button className="text-gray-300 hover:text-yellow-400 transition" onClick={() => alert('Settings Clicked')}>Settings</button>
          <button className="text-gray-300 hover:text-yellow-400 transition" onClick={() => setShowLogin(true)}>Login</button>
          <button className="text-gray-300 hover:text-yellow-400 transition" onClick={() => setShowRegister(true)}>Register</button>
        </div>
      </nav>

      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-neutral-900 text-white p-4 rounded-lg shadow hover:shadow-xl transition">
            <img src={photo.src} alt="Photo" className="w-full h-64 object-cover rounded-md" />
            <div className="flex justify-between items-center mt-4 text-sm">
              <button onClick={() => handleLike(photo.id)} className="flex items-center space-x-2 text-gray-300 hover:text-white transition">
                <span>❤️</span>
                <span>{photo.liked}</span>
              </button>
              <button onClick={() => handleDislike(photo.id)} className="flex items-center space-x-2 text-gray-300 hover:text-white transition">
                <span>👎</span>
                <span>{photo.disliked}</span>
              </button>
            </div>
          </div>
        ))}
      </main>

      {showLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg w-80 relative">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <input id="login-username" type="text" placeholder="Username" className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400" />
            <input id="login-password" type="password" placeholder="Password" className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400" />
            <button onClick={handleLogin} className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition">Submit</button>
            {loginError && <p className="text-red-500 mt-2 text-center">{loginError}</p>}
            <p className="text-gray-400 text-sm mt-4 text-center">
              Not registered? <button onClick={() => {setShowLogin(false); setShowRegister(true);}} className="text-yellow-400 hover:underline">Create new account</button>
            </p>
            <button onClick={() => setShowLogin(false)} className="absolute top-2 right-2 text-gray-400 hover:text-yellow-400 text-xl">✖</button>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg w-80 relative">
            <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
            <input id="reg-username" type="text" placeholder="Username" className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400" />
            <input id="reg-email" type="email" placeholder="Email" className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400" />
            <input id="reg-password" type="password" placeholder="Password" className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400" />
            <input id="reg-confirm-password" type="password" placeholder="Confirm Password" className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400" />
            <button onClick={handleRegister} className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition">Submit</button>
            {registerError && <p className="text-red-500 mt-2 text-center">{registerError}</p>}
            <button onClick={() => setShowRegister(false)} className="absolute top-2 right-2 text-gray-400 hover:text-yellow-400 text-xl">✖</button>
          </div>
        </div>
      )}
    </div>
  );
}
