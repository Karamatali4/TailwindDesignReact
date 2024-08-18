import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="max-w-[75rem] mx-auto mt-5 bg-[#fca5a5] p-4 rounded-sm flex justify-around items-center flex-wrap">
        <div className="box1">
          <NavLink to={"/"}>
            <img src={logo} className="w-40" alt="logo" />
          </NavLink>
        </div>

        <div className="box2 hidden md:block">
          <input
            type="search"
            className="border border-red-950 shadow-xl shadow-black placeholder-black"
            placeholder="search"
          />
        </div>

        <div className="box3  gap-8 font-normal  hidden md:flex">
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/"}>WORK WITH US</NavLink>
          <NavLink to={"/"}>CONTACT</NavLink>
        </div>

        <IoMenu
          className="min-[770px]:hidden block cursor-pointer text-3xl text-yellow-950"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-[#fca5a5] w-full h-auto max-sm:flex flex-col items-center p-4 ">
          <div className="mobilebox3 flex flex-col gap-3">
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/"}>WORK WITH US</NavLink>
            <NavLink to={"/"}>CONTACT</NavLink>
          </div>

          <div className="mobilebox2 mt-2">
            <input
              type="search"
              className="border border-red-950 shadow-xl shadow-black placeholder-black"
              placeholder="search"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
