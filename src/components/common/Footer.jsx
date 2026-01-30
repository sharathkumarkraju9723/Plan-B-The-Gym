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
  { label: "AboutUs", path: "/about-us" },
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
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr] gap-8 items-start">

        {/* BRAND + ADDRESS */}
        <div className="space-y-10 max-w-xs">
          <div className="space-y-4">
            <h3
              onClick={() => goTo("/")}
              className="text-xl font-extrabold tracking-widest cursor-pointer"
            >
              PLAN <span className="text-textSubtle">B</span> THE GYM
            </h3>

            <p
              onClick={() => goTo("/location")}
              className="text-sm cursor-pointer hover:text-textSubtle hover:font-semibold"
            >
              2nd Floor, 557/A, New Kantharaj Urs Rd,<br />
              Near Sri S Nijalingappa Circle,<br />
              Kuvempu Nagara, Mysuru – 570023
            </p>

            <p className="text-sm">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919876543210"
                className="hover:underline hover:text-textSubtle"
              >
                +91 98765 43210
              </a>
            </p>

            <p className="text-sm">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@planbthegym.com"
                className="hover:underline hover:text-textSubtle"
              >
                info@planbthegym.com
              </a>
            </p>
          </div>
        </div>

        {/* SITEMAP */}
        <div className="space-y-6 max-w-xs">
          <h4 className="font-bold uppercase text-lg">Sitemap</h4>
          <ul className="space-y-1.5 text-sm">
            {sitemap.map(({ label, path }) => (
              <li
                key={path}
                onClick={() => goTo(path)}
                className={`cursor-pointer w-fit transition ${pathname === path
                  ? "font-semibold"
                  : "hover:text-textSubtle hover:font-semibold"
                  }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="hidden md:block space-y-4 max-w-xs">
          <h4 className="font-bold uppercase text-lg">Follow Us</h4>
          <div className="grid grid-cols-2 gap-3 max-w-[160px]">
            {socials.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 text-xl border border-divider rounded-lg flex items-center justify-center text-textMuted hover:text-textPrimary hover:bg-base transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-divider py-4 text-sm flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center max-w-7xl mx-auto px-6">

        <p>© 2026 PLAN B THE GYM. All Rights Reserved.</p>

        <p className="flex gap-2 items-center">
          <span
            onClick={() => goTo("/terms")}
            className="cursor-pointer hover:text-textSubtle hover:font-semibold transition"
          >
            Terms & Conditions
          </span>

          <span className="font-bold">||</span>

          <span
            onClick={() => goTo("/membership-policy")}
            className="cursor-pointer hover:text-textSubtle hover:font-semibold transition"
          >
            Membership Policy
          </span>
        </p>

        <p>
          Developed by{" "}
          <a
            href="https://envisiontechsol.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline hover:text-textSubtle transition"
          >
            Envision Tech Sol
          </a>
        </p>
      </div>
    </footer>
  );
}
