import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";
import { Camera } from "lucide-react";
import { useState } from "react";
const Profile = () => {
  const { updateProfile, isUpdatingProfile, authUser } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      return toast.error("Please select an image");
    }
    await updateProfile({ profilePic: selectedImage });
  };
  return (
   <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-purple-100">

  <div className="bg-white shadow-2xl rounded-2xl p-8 w-[400px]">

    <h2 className="text-2xl font-bold text-center text-indigo-600">
      Profile
    </h2>

    <div className="flex justify-center mt-6">

      <div className="relative">

        <img
          src={
            imagePreview ||
            authUser?.profilePic ||
            "https://i.pravatar.cc/200"
          }

          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-200"
        />

        <label
          htmlFor="profile-upload"

          className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full text-white cursor-pointer"
        >

          <Camera size={18}/>

        </label>

      </div>

    </div>

    <input
      id="profile-upload"
      type="file"
      hidden
      onChange={handleImageChange}
    />

    <div className="mt-6 space-y-3">

      <input
        value={authUser.name}
        readOnly
        className="w-full p-3 border rounded-lg bg-gray-100"
      />

      <input
        value={authUser.email}
        readOnly
        className="w-full p-3 border rounded-lg bg-gray-100"
      />

    </div>

    <button
      onClick={handleSubmit}

      className="w-full mt-6 bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
    >

      {

        isUpdatingProfile
          ? "Updating..."
          : "Update Profile"

      }

    </button>

  </div>

</div>
  );
};
export default Profile;
