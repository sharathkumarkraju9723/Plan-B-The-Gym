import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const sitemap = [
    { label: "Try Us", path: "/try-us" },
    { label: "Join Us", path: "/join-us" },
    { label: "Classes", path: "/classes" },
    { label: "Recovery", path: "/recovery" },
    { label: "Nutrition", path: "/nutrition" },
    { label: "InBody", path: "/inbody" },
    { label: "Location", path: "/location" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Membership Policy", path: "/membership-policy" },
  ];

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F5F1E8] text-[#2E2E2E]">
      {/* TOP DIVIDER */}
      <div className="h-px bg-[#E5E5E5]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div className="space-y-3">
          <h3
            onClick={() => goTo("/")}
            className="text-xl font-extrabold tracking-widest text-[#2E2E2E] cursor-pointer hover:opacity-80 transition"
          >
            PLAN<span className="text-[#6B6B6B] font-semibold">:)</span>B GYM
          </h3>

          <p
            onClick={() => goTo("/location")}
            className="text-sm text-[#6B6B6B] max-w-sm leading-relaxed cursor-pointer hover:text-[#2E2E2E] transition"
          >
            2nd floor, 557/A, New Kantharaj Urs Rd, near Sri S Nijalingappa Circle,
            TK Layout 4th Stage, Kuvempu Nagara, Mysuru, Karnataka 570023
          </p>

          <p className="text-sm text-[#6B6B6B]">
            <span className="text-[#2E2E2E] font-medium">Phone:</span>{" "}
            <a href="tel:+919876543210" className="hover:text-[#2E2E2E] transition">
              +91 98765 43210
            </a>
          </p>

          <p className="text-sm text-[#6B6B6B]">
            <span className="text-[#2E2E2E] font-medium">Email:</span>{" "}
            <a
              href="mailto:info@planbgym.com"
              className="hover:text-[#2E2E2E] transition"
            >
              info@planbthegym.com
            </a>
          </p>
        </div>

        {/* SITEMAP */}
        <div>
          <h4 className="text-[#2E2E2E] text-base font-bold uppercase mb-3">
            Sitemap
          </h4>

          <ul className="space-y-1.5 text-sm">
            {sitemap.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li
                  key={item.path}
                  onClick={() => goTo(item.path)}
                  className={`relative w-fit cursor-pointer transition
                    ${
                      isActive
                        ? "text-[#2E2E2E] font-medium"
                        : "text-[#6B6B6B] hover:text-[#2E2E2E]"
                    }
                    after:absolute after:left-0 after:-bottom-0.5 after:h-[2px]
                    after:bg-[#2E2E2E] after:transition-all after:duration-300
                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-[#2E2E2E] text-base font-bold uppercase mb-4">
            Follow Us
          </h4>

          <div className="grid grid-cols-3 gap-3 max-w-[160px]">
            {[
              { icon: <FaFacebookF />, link: "https://facebook.com" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
              { icon: <FaYoutube />, link: "https://youtube.com" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
              { icon: <FaWhatsapp />, link: "https://whatsapp.com" },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#2E2E2E] text-[#2E2E2E] rounded-lg flex items-center justify-center text-sm hover:bg-[#2E2E2E] hover:text-[#F5F1E8] transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#E5E5E5] py-4 px-4 text-xs flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto text-[#9A9A9A]">
        <p>© 2026 Plan-B Gym. All Rights Reserved.</p>
        <p className="mt-1 border-[#E5E5E5] sm:mt-0">
          Developed by <span className="text-[#2E2E2E]">Envision Tech Sol</span>
        </p>
      </div>
    </footer>
  );
}
