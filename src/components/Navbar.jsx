import { Link } from "react-router-dom";

export default function Navbar({
  loggedInUser,
  setLoggedInUser,
  setShowLogin,
  setShowRegister,
}) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur border-b border-gray-800 text-white">
      <div className="flex items-center space-x-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Logo"
          className="h-6"
        />
        <span className="text-xl font-bold tracking-wide" style={{ fontFamily: "cursive" }}>
          PhotoHeaven
        </span>
      </div>
      <div className="space-x-4">
        <Link
          to="/"
          className="text-gray-300 hover:text-yellow-400 transition"
        >
          Home
        </Link>
        <Link
          to="/gallery"
          className="text-gray-300 hover:text-yellow-400 transition"
        >
          Gallery
        </Link>
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
  );
}
