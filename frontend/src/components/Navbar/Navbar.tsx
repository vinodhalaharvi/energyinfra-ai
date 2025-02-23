import React, { useState, useRef, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Smooth scroll function (same as your original)
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-50 z-[200] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[2000]">
        <div className="flex justify-between h-16 items-center  z-[2000]">
          {/* Brand */}
          <div className="text-xl font-bold text-blue-600 z-[2000]">EnergyInfra.AI</div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 ">
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "features")}
              className="text-gray-700 hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#ai"
              onClick={(e) => handleScroll(e, "ai")}
              className="text-gray-700 hover:text-blue-600"
            >
              AI Capabilities
            </a>
            <a
              href="#use-cases"
              onClick={(e) => handleScroll(e, "use-cases")}
              className="text-gray-700 hover:text-blue-600"
            >
              Use Cases
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden z-[2000]">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {menuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (shown on small screens) */}
      <div
        ref={menuRef}
        className={`md:hidden absolute left-0 right-0 bg-white/80 backdrop-blur-m border-b border-gray-100 transition-all duration-300 shadow-md ${
          menuOpen ? 'top-[64px] opacity-100' : 'top-[-400px] opacity-'
        }`}
      >
        <div className="relative flex flex-col items-center space-y-4 px-4 py-4 w-full bg-slate-50 z-[1000]">
          <a
            href="#features"
            onClick={(e) => {
              handleScroll(e, "features");
              setMenuOpen(false);
            }}
            className="text-gray-700 hover:text-blue-600"
          >
            Features
          </a>
          <a
            href="#ai"
            onClick={(e) => {
              handleScroll(e, "ai");
              setMenuOpen(false);
            }}
            className="text-gray-700 hover:text-blue-600"
          >
            AI Capabilities
          </a>
          <a
            href="#use-cases"
            onClick={(e) => {
              handleScroll(e, "use-cases");
              setMenuOpen(false);
            }}
            className="text-gray-700 hover:text-blue-600"
          >
            Use Cases
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              handleScroll(e, "contact");
              setMenuOpen(false);
            }}
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;