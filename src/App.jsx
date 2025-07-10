import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [photos, setPhotos] = useState([
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },

    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1494522334943-9fcd2b72b7ec?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1489365091240-6a18fc761ec2?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },

    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a008e?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1494522334943-9fcd2b72b7ec?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },

    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a008e?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },

    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
    {
      id: uuidv4(),
      src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      liked: 0,
      disliked: 0,
    },
  ]);

  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

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
    if (!regUsername || !regEmail || !regPassword || !regConfirmPassword) {
      setRegisterError("All fields required");
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setRegisterError("Passwords do not match");
      return;
    }
    if (users.find((u) => u.username === regUsername)) {
      setRegisterError("Username already exists");
      return;
    }
    if (users.find((u) => u.email === regEmail)) {
      setRegisterError("Email already used");
      return;
    }

    setUsers([
      ...users,
      { username: regUsername, email: regEmail, password: regPassword },
    ]);
    setShowRegister(false);
    setRegisterError("");
    alert("Registration successful!");
  };

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === loginUsername && u.password === loginPassword
    );
    if (user) {
      setLoggedInUser(user.username);
      setShowLogin(false);
      setLoginError("");
      setLoginUsername("");
      setLoginPassword("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur border-b border-gray-800 w-full max-w-[90%]">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Logo"
            className="h-6"
          />
          <span
            className="text-xl font-bold tracking-wide"
            style={{ fontFamily: "cursive" }}
          >
            PhotoHeaven
          </span>
        </div>
        <div className="space-x-4">
          <button
            className="text-gray-300 hover:text-yellow-400 transition"
            onClick={() => alert("Gallery Clicked")}
          >
            Gallery
          </button>
          <button
            className="text-gray-300 hover:text-yellow-400 transition"
            onClick={() =>
              loggedInUser ? setShowUpload(true) : alert("Please login to upload")
            }
          >
            Upload
          </button>
          <button
            className="text-gray-300 hover:text-yellow-400 transition"
            onClick={() => alert("About Clicked")}
          >
            About
          </button>
          <button
            className="text-gray-300 hover:text-yellow-400 transition"
            onClick={() => alert("Settings Clicked")}
          >
            Settings
          </button>

          {loggedInUser ? (
            <>
              <span className="text-yellow-300">Welcome, {loggedInUser}</span>
              <button
                className="text-red-400 hover:text-red-500 transition"
                onClick={() => setLoggedInUser(null)}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="text-gray-300 hover:text-yellow-400 transition"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
              <button
                className="text-gray-300 hover:text-yellow-400 transition"
                onClick={() => setShowRegister(true)}
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Gallery */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[90%] w-full">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-black p-2 rounded-lg shadow hover:shadow-xl transition"
          >
            <div className="bg-neutral-900 p-3 rounded-md">
              <img
                src={photo.src}
                alt="Photo"
                className="w-full h-56 object-cover rounded-md"
              />
              <div className="flex justify-between items-center mt-3 text-sm">
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
          </div>
        ))}
      </main>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg w-80 relative">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition"
            >
              Submit
            </button>
            {loginError && (
              <p className="text-red-500 mt-2 text-center">{loginError}</p>
            )}
            <p className="text-gray-400 text-sm mt-4 text-center">
              Not registered?{" "}
              <button
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
                className="text-yellow-400 hover:underline"
              >
                Create new account
              </button>
            </p>
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-yellow-400 text-xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg w-80 relative">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Register
            </h2>
            <input
              type="text"
              placeholder="Username"
              value={regUsername}
              onChange={(e) => setRegUsername(e.target.value)}
              className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={regConfirmPassword}
              onChange={(e) => setRegConfirmPassword(e.target.value)}
              className="w-full mb-4 p-2 bg-black text-white border border-gray-700 rounded focus:outline-yellow-400"
            />
            <button
              onClick={handleRegister}
              className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition"
            >
              Submit
            </button>
            {registerError && (
              <p className="text-red-500 mt-2 text-center">{registerError}</p>
            )}
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-yellow-400 text-xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}

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
    </div>
  );
}
