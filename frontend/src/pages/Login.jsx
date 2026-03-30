import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

export default function Login(){

  const { login, isLoggingIn } = useAuthStore();

  const [formData,setFormData] = useState({

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

    await login(formData);

  };

  return(

   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-100 to-gray-200">

  <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 w-[380px]">

    <h2 className="text-3xl font-bold text-center text-indigo-600">
      Welcome Back
    </h2>

    <p className="text-center text-gray-500 mt-2">
      Login to continue chatting
    </p>

    <form onSubmit={handleSubmit} className="mt-6 space-y-4">

      <input
        type="email"
        name="email"
        placeholder="Email"
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
        focus:ring-indigo-400
        transition
        placeholder-gray-600
        "
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
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
        focus:ring-indigo-400
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
        from-indigo-500
        to-purple-600
        hover:opacity-90
        transition
        
        "

      >

        {isLoggingIn ? "Loading..." : "Login"}

      </button>

    </form>

    <p className="text-center text-gray-500 mt-4">

      Don't have account ?

      <Link
        to="/signup"
        className="text-indigo-600 font-semibold ml-1"
      >
        Signup
      </Link>

    </p>

  </div>

</div>

  );

}