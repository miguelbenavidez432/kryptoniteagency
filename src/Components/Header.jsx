import { useState } from "react";
import { menu, close, logo } from '../assets'
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Kryptonite" className="w-[60px] h-[50px]" />
      <Link to='/' className="text-white font-poppins text-[30px] mr-6">Kryptonite Agency</Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {
          navLinks.map((n, index) => (
            <li
              key={n.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${active === n.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-6"}`}
            >
              {/* <h1 className="font-semibold font-poppins">{n.title}</h1> */}
              <Link className="font-semibold font-poppins" to={`${n.url}`}>{n.title}</Link>
            </li>
          ))
        }
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)} />
        <div>
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`${nav.url}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

