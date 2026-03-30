import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

export default function Signup(){

  const { signup,isSigningUp } = useAuthStore();

  const [formData,setFormData] = useState({

    name:"",
    email:"",
    password:""

  });

  const handleChange = (e)=>{

    setFormData({

      ...formData,
      [e.target.name]:e.target.value

    });

  };

  const handleSubmit = async(e)=>{

    e.preventDefault();

    await signup(formData);

  };

 return(

<div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-200 via-purple-100 to-gray-200">

  <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 w-[380px]">

    <h2 className="text-3xl font-bold text-center text-purple-600">
      Create Account
    </h2>

    <p className="text-center text-gray-500 mt-2">
      Start chatting instantly
    </p>

    <form onSubmit={handleSubmit} className="mt-6 space-y-4">

      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}

        className="
        w-full
        px-4 py-3
        rounded-xl
        bg-gray-100
        border
        border-gray-200
        focus:outline-none
        focus:ring-2
        focus:ring-purple-400
        transition
        placeholder-gray-600
        "
      />

      <input
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}

        className="
        w-full
        px-4 py-3
        rounded-xl
        bg-gray-100
        border
        border-gray-200
        focus:outline-none
        focus:ring-2
        focus:ring-purple-400
        transition
        placeholder-gray-600
        "
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}

        className="
        placeholder-gray-600
        w-full
        px-4 py-3
        rounded-xl
        bg-gray-100
        border
        border-gray-200
        focus:outline-none
        focus:ring-2
        focus:ring-purple-400
        transition
        placeholder-gray-600
        "
      />

      <button
        className="
        w-full
        py-3
        rounded-xl
        text-white
        font-semibold
        bg-gradient-to-r
        from-purple-500
        to-indigo-600
        hover:opacity-90
        transition
        "
      >

        {
          isSigningUp
            ? "Creating..."
            : "Signup"
        }

      </button>

    </form>

    <p className="text-center text-gray-500 mt-4">

      Already have account ?

      <Link
        to="/login"
        className="text-purple-600 font-semibold ml-1"
      >
        Login
      </Link>

    </p>

  </div>

</div>

);

}