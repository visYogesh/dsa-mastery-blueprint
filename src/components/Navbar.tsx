import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Code,
  Menu,
  X,
  BookOpen,
  Trophy,
  Users,
  LogOut,
  LogIn,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SignInPopup from "@/auth/SignInPopup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    phone: string;
    photo: string;
  } | null>(null);
  const location = useLocation();

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("dsalgoUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("dsalgoUser");
    setUser(null);
  };

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">DSAlgo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {["Home", "Problems", "Compete", "Community"].map((name, idx) => {
                const icons = [BookOpen, Code, Trophy, Users];
                const href = `/${name.toLowerCase()}`;
                const Icon = icons[idx];
                return (
                  <Link
                    key={name}
                    to={href}
                    className={`flex items-center space-x-1 transition-colors duration-200 ${
                      isActive(href)
                        ? "text-purple-400 font-semibold border-b-2 border-purple-400 pb-1"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-1">
                <img
                  src={user.photo}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-gray-400"
                />
                <Button
                  onClick={handleSignOut}
                  className="bg-transparent hover:bg-transparent text-red-400 hover:text-red-600 p-2 rounded-full shadow-none"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                onClick={() => setIsPopupOpen(true)}
                className="border border-white flex items-center space-x-2"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {["Home", "Problems", "Compete", "Community"].map((name, idx) => {
                const icons = [BookOpen, Code, Trophy, Users];
                const href = `/${name.toLowerCase()}`;
                const Icon = icons[idx];
                return (
                  <Link
                    key={name}
                    to={href}
                    className={`flex items-center space-x-2 px-3 py-2 transition-colors duration-200 ${
                      isActive(href)
                        ? "text-purple-400 font-semibold border-l-4 border-purple-400 pl-2"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{name}</span>
                  </Link>
                );
              })}

              <div className="flex flex-col space-y-2 pt-4">
                {user ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={user.photo}
                      alt="Profile"
                      className="w-8 h-8 rounded-full border border-gray-400"
                    />
                      Logout
                    <Button
                      onClick={handleSignOut}
                      className="bg-transparent hover:bg-transparent text-red-400 hover:text-red-600 p-2 rounded-full shadow-none"
                    >
                      <LogOut className="h-5 w-5" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      setIsPopupOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="justify-start border-2 border-white"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sign-In Popup */}
      {isPopupOpen && (
        <SignInPopup
          onClose={() => setIsPopupOpen(false)}
          onSignIn={(userData) => {
            localStorage.setItem("dsalgoUser", JSON.stringify(userData));
            setUser(userData);
            setIsPopupOpen(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
