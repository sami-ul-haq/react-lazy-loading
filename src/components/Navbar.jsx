import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-5 p-3 justify-center">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "font-bold text-2xl" : "text-2xl"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "font-bold text-2xl" : "text-2xl"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "font-bold text-2xl" : "text-2xl"
            }
          >
            Contact
          </NavLink>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
