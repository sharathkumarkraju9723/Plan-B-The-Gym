import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../common/assets/Plan-B.png";
import logoB from "../common/assets/Plan-B-logo.png";

const menuItems = [
  { label: "Try Us", path: "/try-us" },
  { label: "Join Us", path: "/join-us" },
  { label: "Recovery", path: "/recovery" },
  { label: "Nutrition", path: "/nutrition" },
  { label: "Inbody", path: "/inbody" },
  { label: "Classes", path: "/classes" },
  { label: "Location", path: "/location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F5F1E6]/60 border-[#DADADA] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-24 sm:h-28">

          {/* LOGO */}
          <div
            onClick={() => goTo("/")}
            className="cursor-pointer flex items-center transition"
          >
            {/* Small & medium screens → Full logo */}
            <img
              src={logo}
              alt="Plan B The Gym"
              className=" block lg:hidden h-[56px] sm:h-[72px] max-w-[80%] w-auto object-contain  brightness-50 contrast-200 transition duration-300"
            />

            {/* Large screens → ONLY B logo */}
            <img
              src={logoB}
              alt="Plan B Logo"
              className="  hidden lg:block h-[112px] w-auto object-contain brightness-50 contrast-200  transition duration-300  "
            />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-6 uppercase text-sm font-medium">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => goTo(item.path)}
                className="
                  relative cursor-pointer text-black
                  transition duration-300
                  hover:text-[#1f4f43]
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-[#1F4F43]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-[#2E2E2E]"></span>
            <span className="w-6 h-0.5 bg-[#2E2E2E]"></span>
            <span className="w-6 h-0.5 bg-[#2E2E2E]"></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#F0F0F0] border-t border-[#DADADA]">
          <ul className="flex flex-col items-center py-6 gap-5 uppercase text-sm font-medium">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => goTo(item.path)}
                className="cursor-pointer text-[#2E2E2E] hover:text-[#2f6f5f] transition"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
