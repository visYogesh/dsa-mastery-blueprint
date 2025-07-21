import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const SignInPopup = ({ onClose, onSignIn }) => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      onSignIn(userData);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to sign in with Google");
    }
  };

  return (
    <div className=" bg-black/50 flex justify-center items-center z-50">
      <div className="bg-background p-6 rounded-xl shadow-lg max-w-sm w-full relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <Button onClick={handleGoogleSignIn} className="w-full bg-gradient-hero">
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default SignInPopup;
