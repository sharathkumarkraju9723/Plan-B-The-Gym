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
      <div className="h-px bg-[#E5E5E5]" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10">

          {/* BRAND */}
          <div className="space-y-4 max-w-sm">
            <h3
              onClick={() => goTo("/")}
              className="text-xl font-extrabold tracking-widest cursor-pointer"
            >
              PLAN<span className="text-[#6B6B6B] font-semibold">:)</span>B GYM
            </h3>

            <p
              onClick={() => goTo("/location")}
              className="text-sm text-[#6B6B6B] leading-relaxed cursor-pointer hover:text-[#2E2E2E]"
            >
              2nd Floor, 557/A, New Kantharaj Urs Rd,<br />
              Near Sri S Nijalingappa Circle,<br />
              Kuvempu Nagara, Mysuru – 570023
            </p>

            <p className="text-sm">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919876543210" className="hover:underline">
                +91 98765 43210
              </a>
            </p>

            <p className="text-sm">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@planbthegym.com"
                className="hover:underline"
              >
                info@planbthegym.com
              </a>
            </p>
          </div>

          {/* SITEMAP */}
          <div className="space-y-4 max-w-xs">
            <h4 className="font-bold uppercase text-sm">Sitemap</h4>
            <ul className="space-y-1.5 text-sm">
              {sitemap.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li
                    key={item.path}
                    onClick={() => goTo(item.path)}
                    className={`cursor-pointer w-fit transition
                      ${
                        isActive
                          ? "text-[#2E2E2E] font-medium"
                          : "text-[#6B6B6B] hover:text-[#2E2E2E]"
                      }`}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="space-y-4 max-w-xs">
            <h4 className="font-bold uppercase text-sm">Follow Us</h4>
            <div className="grid grid-cols-3 gap-3 max-w-[160px]">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaWhatsapp />, link: "#" },
              ].map(({ icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border rounded-lg flex items-center justify-center hover:bg-[#2E2E2E] hover:text-[#F5F1E8] transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-[#E5E5E5] py-4 text-xs flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-[#9A9A9A]">
        <p>© 2026 PLAN B THE GYM. All Rights Reserved.</p>
        <p>
          Developed by <span className="text-[#2E2E2E]">Envision Tech Sol</span>
        </p>
      </div>
    </footer>
  );
}
