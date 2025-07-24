import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { auth, googleProvider, githubProvider, sendOTP, setupRecaptcha } from "../firebase";
import { signInWithPopup, AuthError } from "firebase/auth";

const SignInPopup = ({ onClose, onSignIn }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        provider: "google",
      };
      localStorage.setItem("user", JSON.stringify(userData));
      onSignIn(userData);
      onClose();
    } catch (err) {
      console.error("Google Sign-in Error:", err);
      const authError = err as AuthError;
      alert(`Failed to sign in with Google: ${authError.message}`);
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      const userData = {
        name: user.displayName || user.email?.split('@')[0] || 'GitHub User',
        email: user.email,
        photo: user.photoURL,
        provider: "github",
      };
      localStorage.setItem("user", JSON.stringify(userData));
      onSignIn(userData);
      onClose();
    } catch (err) {
      console.error("GitHub Sign-in Error:", err);
      const authError = err as AuthError;
      alert(`GitHub sign-in failed: ${authError.message}`);
    }
  };

  const handleSendOtp = async () => {
    if (!phone.startsWith("+")) {
      alert("Phone number must be in E.164 format (e.g., +919876543210)");
      return;
    }
    try {
      setupRecaptcha();
      const result = await sendOTP(phone);
      setConfirmationResult(result);
      setOtpSent(true);
      alert(`OTP sent to ${phone}`);
    } catch (error) {
      console.error("Error sending OTP", error);
      alert("Failed to send OTP. Check the number and try again.");
    }
  };

  const handleVerifyOtp = async () => {
    if (!confirmationResult) return;
    try {
      const cred = await confirmationResult.confirm(otp);
      const user = cred.user;
      const userData = {
        name: user.phoneNumber,
        email: null,
        photo: null,
        provider: "phone",
      };
      localStorage.setItem("user", JSON.stringify(userData));
      onSignIn(userData);
      onClose();
    } catch (error) {
      console.error("Invalid OTP", error);
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="bg-black/30 z-50 flex justify-center items-center">
      <div className="bg-background p-6 rounded-xl shadow-lg w-80 border border-gray-700 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>

        {/* Google Login */}
        <Button
          onClick={handleGoogleSignIn}
          className="cursor-pointer flex gap-2 items-center bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all w-full mb-3"
        >
          Continue with Google
        </Button>

        {/* GitHub Login */}
        <Button
          onClick={handleGitHubSignIn}
          className="cursor-pointer flex gap-2 items-center bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-700 transition-all w-full mb-3"
        >
          Continue with GitHub
        </Button>

        {/* Phone Login */}
        <div className="flex flex-col gap-2 mt-4">
          {!otpSent ? (
            <>
              <input
                type="tel"
                placeholder="Enter phone number (+91...)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-600 rounded-lg p-2 bg-transparent text-white"
              />
              <Button
                onClick={handleSendOtp}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Send OTP
              </Button>
              <div id="recaptcha-container"></div>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-gray-600 rounded-lg p-2 bg-transparent text-white tracking-widest text-center"
                maxLength={6}
              />
              <Button
                onClick={handleVerifyOtp}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Verify OTP
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPopup;
