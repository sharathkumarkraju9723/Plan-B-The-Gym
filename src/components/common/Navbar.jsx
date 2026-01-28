import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../common/assets/Plan-B.png";
import logoB from "../common/assets/Plan-B-logo.png";

/* Navigation links */
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
  const location = useLocation();              

  /* Navigate + close mobile menu */
  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR  */}
      <nav className="fixed top-0 w-full z-50 bg-base/40 border border-divider backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-24 sm:h-28">

            {/* LOGO */}
            <div onClick={() => goTo("/")} className="cursor-pointer">
              <img
                src={logo}
                alt="Plan B The Gym"
                className="block lg:hidden h-[56px] sm:h-[72px] brightness-40 contrast-200 transition duration-300"
              />
              <img
                src={logoB}
                alt="Plan B Logo"
                className="hidden lg:block h-[112px]  brightness-40 contrast-200 transition duration-300"
              />
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex gap-6 uppercase text-sm font-medium">
              {menuItems.map((item) => {
                const active = location.pathname === item.path;

                return (
                  <li
                    key={item.label}
                    onClick={() => goTo(item.path)}
                    className={`
                      relative cursor-pointer text-textPrimary
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:bg-textPrimary
                      after:transition-all after:duration-300
                      ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}
                    `}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="lg:hidden p-3 bg-surface border border-divider rounded-lg shadow-sm flex flex-col gap-1.5"
            >
              {/* Animated hamburger → X */}
              <span className={`w-6 h-0.5 bg-textPrimary transition ${open && "rotate-45 translate-y-2"}`} />
              <span className={`w-6 h-0.5 bg-textPrimary transition ${open && "opacity-0"}`} />
              <span className={`w-6 h-0.5 bg-textPrimary transition ${open && "-rotate-45 -translate-y-2"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-surface z-40
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          lg:hidden border-l border-divider
        `}
      >
        <ul className="flex flex-col items-center mt-32 gap-6 uppercase text-sm font-medium">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <li
                key={item.label}
                onClick={() => goTo(item.path)}
                className={`
                  cursor-pointer transition
                  ${active ? "text-textPrimary font-semibold" : "text-textMuted hover:text-textPrimary"}
                `}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Closes menu on tap */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        />
      )}
    </>
  );
}
