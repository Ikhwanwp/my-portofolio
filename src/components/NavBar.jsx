import React, { useState, useEffect, useRef } from "react";
import { MdDarkMode } from "react-icons/md";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    function handleScroll() {
      const header = headerRef.current;
      const fixNav = header.offsetTop;

      if (window.pageYOffset > fixNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header
      ref={headerRef}
      className="bg-transparent fixed left-0 top-0 w-full z-20 "
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-extrabold text-3xl text-color-primary "
            >
              IWP
            </a>
          </div>
          <div className="flex items-center md:order-2">
            <button type="">
              <MdDarkMode className="text-color-primary" size={30} />
            </button>
            <button
              type=""
              onClick={handleNav}
              className={nav ? "hamburger-active z-50 md:hidden " : "md:hidden"}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out "></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
          <nav
            className={
              nav
                ? "absolute top-full items-center justify-between w-full ease-in-out duration-1000 md:flex md:w-auto md:order-1"
                : "hidden md:block"
            }
          >
            <ul className="flex flex-col items-center space-y-8 py-5 border border-color-primary-light rounded-lg bg-[#142330]/90 md:space-y-0 md:flex-row md:mt-0 md:space-x-5 md:border-none md:bg-transparent md:items-center xl:space-x-5 ">
              <li>
                <a
                  href="#home"
                  className="text-color-primary-light text-xl hover:text-color-primary-dark md:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-color-primary-light text-xl hover:text-color-primary-dark md:text-base"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-color-primary-light text-xl hover:text-color-primary-dark md:text-base"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-color-primary-light text-xl hover:text-color-primary-dark md:text-base"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-color-primary-light text-xl hover:text-color-primary-dark md:text-base"
                >
                  Arcticles
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-color-primary-light text-xl hover:text-color-primary-dark md:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
