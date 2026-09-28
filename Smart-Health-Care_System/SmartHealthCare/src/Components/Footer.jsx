import React from "react";

const Footer = () => {
  const columns = [
    {
      title: "Company",
      links: ["About", "Testimonials", "Find a doctor", "Apps"],
    },
    {
      title: "Region",
      links: ["Indonesia", "Singapore", "Hongkong", "Canada"],
    },
    {
      title: "Help",
      links: ["Help center", "Contact support", "Instructions", "How it works"],
    },
  ];
  return (
    <div>
      <footer className="relative max-w-7xl overflow-hidden mx-auto from-sky-400 bg-blue-700 px-10 py-14 sm:px-16 mb-6 rounded-3xl">
        {/* Decorative dot grid, bottom-left */}
        <div className="absolute bottom-8 left-8 grid grid-cols-4 gap-1.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-white/40" />
          ))}
        </div>

        <div className="mx-auto flex max-w-6xl flex-row flex-wrap gap-12">
          {/* Brand column */}
          <div className="flex-1 basis-64">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-sky-500">
                T
              </span>
              <span className="text-lg font-semibold text-white">
                Trafalgar
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p className="mt-6 text-xs text-white/60">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex-1 basis-32">
              <h4 className="mb-4 text-sm font-semibold text-white">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
