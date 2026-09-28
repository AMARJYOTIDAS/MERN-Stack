import { NavLink, Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <header
      id="navbar"
      className=" text-black font-semibold bg-blue-200 fixed left-0 w-full shadow-md z-50"
    >
      <nav className="flex items-center justify-between mt-2 px-20">
        <div className="flex item-center gap-2">
          <span className="text-white font-bold text-lg w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            T
          </span>
          <h3>Dr.Strange</h3>
        </div>

        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink
              to="/"
              Ś
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/medicine"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Medicine
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className=" px-1 ml-10 text-white">
          <Link
            to="#"
            className="cursor-pointer font-bold bg-blue-600 px-2 py-2 rounded-full "
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopNavbar;
