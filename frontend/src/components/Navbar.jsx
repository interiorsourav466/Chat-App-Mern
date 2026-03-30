import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold tracking-wide">
          SouravChat 💬
        </Link>

        <div className="flex items-center gap-3">

          <Link
            to="/profile"
            className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition"
          >
            <img
              src={
                authUser?.profilePic ||
                "https://i.pravatar.cc/40"
              }
              className="w-8 h-8 rounded-full"
            />

            <span className="hidden sm:block">
              {authUser?.name}
            </span>
          </Link>

          <button
            onClick={logout}
            className="bg-white/20 px-3 py-1 rounded-full hover:bg-red-500 transition"
          >
            Logout
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;