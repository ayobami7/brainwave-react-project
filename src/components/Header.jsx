import React from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const pathname = useLocation();
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8 ">
          <img src={brainwave} alt="logo" width={190} height={40} />
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:bg-transparent lg:mx-auto">
          <div className="flex flex-col relative z-2 items-center justify-center marker:m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl transition-colors uppercase hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } 
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } 
                lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        {/* <Button className="hidden lg:flex" href="#login" onClick={onClick}>
          Sign in
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
