import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

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

const socials = [
  { icon: FaFacebookF, url: "#" },
  { icon: FaInstagram, url: "#" },
  { icon: FaTwitter, url: "#" },
  { icon: FaYoutube, url: "#" },
  { icon: FaLinkedinIn, url: "#" },
  { icon: FaWhatsapp, url: "#" },
];

export default function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-section text-textPrimary">
      <div className="h-px bg-divider" />

      {/* MAIN CONTENT */}
      <div
        className="
          max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr] gap-8 md:gap-10  items-start "
      >
        {/*  Brand + Address + Social (MOBILE ONLY) */}
        <div className="space-y-10 max-w-xs sm:max-w-sm">
          {/* BRAND */}
          <div className="space-y-4">
            <h3
              onClick={() => goTo("/")}
              className="text-xl font-extrabold tracking-widest cursor-pointer"
            >
              PLAN <span className="text-textSubtle">B</span> THE GYM
            </h3>

            <p
              onClick={() => goTo("/location")}
              className="text-sm text-textSubtle leading-relaxed cursor-pointer hover:text-textPrimary"
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
              <a href="mailto:info@planbthegym.com" className="hover:underline">
                info@planbthegym.com
              </a>
            </p>
          </div>

          {/* SOCIAL — MOBILE ONLY */}
          <div className="space-y-3 md:hidden">
            <h4 className="font-bold uppercase text-lg mb-1">Follow Us</h4>
            <div className="grid grid-cols-3 gap-3 max-w-[160px]">
              {socials.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-divider rounded-lg flex items-center justify-center hover:bg-button transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="space-y-4 max-w-xs">
          <h4 className="font-bold uppercase text-lg mb-1">Sitemap</h4>
          <ul className="space-y-1.5 text-sm">
            {sitemap.map(({ label, path }) => (
              <li
                key={path}
                onClick={() => goTo(path)}
                className={`cursor-pointer w-fit transition ${pathname === path
                  ? "text-textPrimary font-medium"
                  : "text-textSubtle hover:text-textPrimary"
                  }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/*  Social (DESKTOP ONLY) */}
        <div className="hidden md:block space-y-4 max-w-xs">
          <h4 className="font-bold uppercase text-lg mb-1">Follow Us</h4>
          <div className="grid grid-cols-3 gap-3 max-w-[160px]">
            {socials.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-divider rounded-lg flex items-center justify-center hover:bg-button transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-divider py-4 text-xs flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-textSubtle">
        <p>© 2026 PLAN B THE GYM. All Rights Reserved.</p>
        <p>
          Developed by <span className="text-textPrimary">Envision Tech Sol</span>
        </p>
      </div>
    </footer>
  );
}
