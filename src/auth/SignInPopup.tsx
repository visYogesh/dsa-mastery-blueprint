// import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";
// import { auth, googleProvider, githubProvider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";

// const SignInPopup = ({ onClose, onSignIn }) => {
//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       const userData = {
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//         provider: "google",
//       };
//       localStorage.setItem("user", JSON.stringify(userData));
//       onSignIn(userData);
//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to sign in with Google");
//     }
//   };

//   const handleGitHubSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, githubProvider);
//       const user = result.user;
//       const userData = {
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//         provider: "github",
//       };
//       localStorage.setItem("user", JSON.stringify(userData));
//       onSignIn(userData);
//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to sign in with GitHub");
//     }
//   };

//   return (
//     <div className=" bg-black/30 z-50 flex justify-center items-center">
//       <div className="bg-background p-6 rounded-xl shadow-lg w-80 border border-gray-700 relative">
//         <button
//           className="absolute top-3 right-3 text-gray-400 hover:text-white"
//           onClick={onClose}
//         >
//           <X className="w-5 h-5" />
//         </button>
//         <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>

//         <Button
//           onClick={handleGoogleSignIn}
//           className="cursor-pointer flex gap-2 items-center bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all w-full mb-3"
//         >
//           <svg
//             viewBox="0 0 48 48"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6"
//           >
//             <path
//               d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//               fill="#FFC107"
//             ></path>
//             <path
//               d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//               fill="#FF3D00"
//             ></path>
//             <path
//               d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//               fill="#4CAF50"
//             ></path>
//             <path
//               d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//               fill="#1976D2"
//             ></path>
//           </svg>
//           Continue with Google
//         </Button>

//         <Button
//           onClick={handleGitHubSignIn}
//           className="cursor-pointer flex gap-2 items-center bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-700 transition-all w-full"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="white"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M12 .5C5.648.5.5 5.649.5 12c0 5.087 3.292 9.386 7.868 10.905.575.104.786-.25.786-.556 0-.274-.01-1-.015-1.965-3.201.696-3.878-1.543-3.878-1.543-.523-1.326-1.277-1.68-1.277-1.68-1.044-.714.08-.699.08-.699 1.154.081 1.76 1.184 1.76 1.184 1.027 1.76 2.696 1.252 3.354.958.104-.744.402-1.252.732-1.54-2.555-.291-5.242-1.277-5.242-5.684 0-1.256.448-2.282 1.182-3.087-.119-.292-.512-1.466.111-3.06 0 0 .965-.31 3.164 1.178a11.01 11.01 0 0 1 2.881-.388c.977.004 1.963.132 2.881.388 2.198-1.488 3.162-1.178 3.162-1.178.625 1.594.232 2.768.113 3.06.737.805 1.181 1.831 1.181 3.087 0 4.418-2.69 5.391-5.254 5.675.413.356.782 1.059.782 2.136 0 1.541-.014 2.78-.014 3.156 0 .309.208.666.792.553C20.707 21.38 24 17.085 24 12c0-6.351-5.149-11.5-12-11.5Z"
//               clipRule="evenodd"
//             />
//           </svg>
//           Continue with GitHub
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SignInPopup;




import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { auth, googleProvider, githubProvider } from "../firebase";
import { signInWithPopup, AuthError } from "firebase/auth";

const SignInPopup = ({ onClose, onSignIn }) => {
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
      
      // GitHub might not always provide displayName, so handle fallback
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
      
      // Handle specific GitHub auth errors
      let errorMessage = "Failed to sign in with GitHub";
      
      switch (authError.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = "Sign-in popup was closed. Please try again.";
          break;
        case 'auth/popup-blocked':
          errorMessage = "Popup was blocked. Please allow popups and try again.";
          break;
        case 'auth/cancelled-popup-request':
          errorMessage = "Another popup is already open. Please close it and try again.";
          break;
        case 'auth/account-exists-with-different-credential':
          errorMessage = "An account already exists with the same email address but different sign-in credentials.";
          break;
        case 'auth/operation-not-allowed':
          errorMessage = "GitHub sign-in is not enabled. Please check Firebase configuration.";
          break;
        default:
          errorMessage = `GitHub sign-in failed: ${authError.message}`;
      }
      
      alert(errorMessage);
    }
  };

  return (
    <div className=" bg-black/30 z-50 flex justify-center items-center">
      <div className="bg-background p-6 rounded-xl shadow-lg w-80 border border-gray-700 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>

        <Button
          onClick={handleGoogleSignIn}
          className="cursor-pointer flex gap-2 items-center bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all w-full mb-3"
        >
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              fill="#FFC107"
            ></path>
            <path
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              fill="#FF3D00"
            ></path>
            <path
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              fill="#4CAF50"
            ></path>
            <path
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              fill="#1976D2"
            ></path>
          </svg>
          Continue with Google
        </Button>

        <Button
          onClick={handleGitHubSignIn}
          className="cursor-pointer flex gap-2 items-center bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-700 transition-all w-full"
        >
          <svg
            className="w-6 h-6"
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 .5C5.648.5.5 5.649.5 12c0 5.087 3.292 9.386 7.868 10.905.575.104.786-.25.786-.556 0-.274-.01-1-.015-1.965-3.201.696-3.878-1.543-3.878-1.543-.523-1.326-1.277-1.68-1.277-1.68-1.044-.714.08-.699.08-.699 1.154.081 1.76 1.184 1.76 1.184 1.027 1.76 2.696 1.252 3.354.958.104-.744.402-1.252.732-1.54-2.555-.291-5.242-1.277-5.242-5.684 0-1.256.448-2.282 1.182-3.087-.119-.292-.512-1.466.111-3.06 0 0 .965-.31 3.164 1.178a11.01 11.01 0 0 1 2.881-.388c.977.004 1.963.132 2.881.388 2.198-1.488 3.162-1.178 3.162-1.178.625 1.594.232 2.768.113 3.06.737.805 1.181 1.831 1.181 3.087 0 4.418-2.69 5.391-5.254 5.675.413.356.782 1.059.782 2.136 0 1.541-.014 2.78-.014 3.156 0 .309.208.666.792.553C20.707 21.38 24 17.085 24 12c0-6.351-5.149-11.5-12-11.5Z"
              clipRule="evenodd"
            />
          </svg>
          Continue with GitHub
        </Button>
      </div>
    </div>
  );
};

export default SignInPopup;