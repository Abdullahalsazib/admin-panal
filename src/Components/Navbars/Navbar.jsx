import React, { useState } from "react";
import { FcBiohazard } from "react-icons/fc";
import { FiBell, FiMaximize } from "react-icons/fi";
import { BsMenuButton } from "react-icons/bs";
import AdminProfile from "../SmallComponents/AdminProfile";
import userProfileImg from "./src/Components/Navbars/profile.avif";

import { BiSolidDashboard } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  BsPeople,
  BsFillMortarboardFill,
  BsBuildingFill,
  BsChevronDown,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
const Menus = [
  { titles: "Dashboard", icons: <BiSolidDashboard />, itemUrl: "#" },
  { titles: "Teachers", icons: <FaChalkboardTeacher />, itemUrl: "#" },
  {
    titles: "Departments",
    icons: <BsBuildingFill />,
    itemUrl: "#",
    submenu: true,
    submenuItems: [
      { titles: "submenu 1", itemUrl: "#" },
      { titles: "submenu 1", itemUrl: "#" },
      { titles: "submenu 1", itemUrl: "#" },
    ],
  },
  { titles: "Students", icons: <BsPeople />, itemUrl: "#" },
  { titles: "Courses", icons: <BsFillMortarboardFill />, itemUrl: "#" },
  {
    titles: "Libery",
    icons: <BsReverseLayoutTextSidebarReverse />,
    itemUrl: "#",
  },
];

export default function Navbar() {
  const username = "Reon Leo";
  const companyName = "Smart";
  const userPossition = "Admin";
  const ProfileImg = { userProfileImg };
  const [dOpen, setDopen] = useState(true);
  const [smdOpen, setsmDopen] = useState(true);
  const [subMopen, setSubMenuOpen] = useState(false);
  return (
    <>
      {/* main div */}
      <div>
        <div className="flex bg-[#f0f3fb]">
          <div
            className={` hidden lg:block shadow-slate-400 shadow-lg bg-white  w- h-screen ${
              !dOpen ? "w-20" : "lg:w-[17%]"
            } duration-300 `}
          >
            <div className="">
              <span className="  py-2 px-0 justify-center flex items-center lg:space-x-2">
                <FcBiohazard
                  className={`text-[40px] lg:text-[46px]  duration-300 ${
                    !dOpen && "rotate-180"
                  }`}
                />
                <h1
                  className={`   text-[19px] lg:text-[25px]  capitalize text-gray-600 font-['Roboto'] font-semibold duration-200 ${
                    !dOpen && "hidden"
                  }`}
                >
                  {companyName}
                </h1>
              </span>
            </div>
            <div
              className={`${
                !dOpen ? "overflow-hidden" : "menyoverflow"
              }  bg-white h-[90%] `}
            >
              {/* {overflow-scroll} */}
              <div
                className={`${
                  !dOpen && "hidden"
                } duration-300  flex justify-center  py-4 `}
              >
                <AdminProfile
                  ProfileImgUrl={ProfileImg}
                  userName={username}
                  userPossition={userPossition}
                />
              </div>
              {/* ul li start */}
              <div className="">
                <ul className="  py-2 px-3">
                  {Menus.map((menu, index) => (
                    <>
                      <li
                        className=" hover:text-black text-gray-500  cursor-pointer duration-300 hover:bg-gray-200 py-2 px-4 my-4 rounded-md space-y-2 flex items-center space-x-1 lg:space-x-4 font-medium"
                        key={index}
                      >
                        <div className=" flex items-center space-x-1 lg:space-x-4 font-medium">
                          <span className=" text-[20px]  lg:text-[24px]">
                            {menu.icons}
                          </span>
                          <a
                            className={` ${
                              !dOpen && "hidden"
                            } text-sm lg:text-[20px] font-['Roboto'] font-[400]`}
                            href={menu.itemUrl}
                          >
                            {menu.titles}
                          </a>
                        </div>
                        {menu.submenu && (
                          <BsChevronDown
                            className={`${
                              subMopen && "rotate-180"
                            } duration-300 lg:text-[20px]`}
                            onClick={() => setSubMenuOpen(!subMopen)}
                          />
                        )}
                      </li>
                      {menu.submenu && dOpen && subMopen && (
                        <ul>
                          {menu.submenuItems.map((submenuTitls, index) => (
                            <li
                              className={` capitalize cursor-pointer duration-300 hover:bg-gray-300 py-1 px-4 mx-6 my-3 rounded-md space-y-2 flex items-center space-x-4 font-medium`}
                              key={index}
                            >
                              <a
                                className={` text-sm lg:text-[20px] font-['Roboto'] font-[400]`}
                                href={submenuTitls.itemUrl}
                              >
                                {submenuTitls.titles}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* skdfkfjskfjslfj */}
          <div>
            <div
              className={` block lg:hidden shadow-slate-400 shadow-lg bg-white  w- h-screen
         w-full
          duration-300 absolute top-[7%] ${
            !smdOpen ? "left-0" : "left-[-100%]"
          } `}
            >
              <div className="">
                <span className="  py-2 px-0 justify-center flex items-center lg:space-x-2">
                  <FcBiohazard
                    className={`text-[40px] lg:text-[46px]  duration-300 ${
                      !smdOpen && "rotate-180"
                    }`}
                  />
                  <h1
                    className={`   text-[19px] lg:text-[25px]  capitalize text-gray-600 font-['Roboto'] font-semibold duration-200 `}
                  >
                    {companyName}
                  </h1>
                </span>
              </div>
              <div
                className={`${
                  !smdOpen ? "overflow-hidden" : "menyoverflow"
                }  bg-white h-[90%] `}
              >
                {/* {overflow-scroll} */}
                <div
                  className={`${
                    !smdOpen && "hidden"
                  } duration-300  flex justify-center  py-4 `}
                >
                  <AdminProfile
                    ProfileImgUrl={ProfileImg}
                    userName={username}
                    userPossition={userPossition}
                  />
                </div>
                {/* ul li start */}
                <div className="">
                  <ul className="  py-2 px-3">
                    {Menus.map((menu, index) => (
                      <>
                        <li
                          className=" hover:text-black text-gray-500  cursor-pointer duration-300 hover:bg-gray-200 py-2 px-4 my-4 rounded-md space-y-2 flex items-center space-x-1 lg:space-x-4 font-medium"
                          key={index}
                        >
                          <div className=" flex items-center space-x-1 lg:space-x-4 font-medium">
                            <span className=" text-[22px]  lg:text-[24px]">
                              {menu.icons}
                            </span>
                            <a
                              className={` text-sm lg:text-[20px] font-['Roboto'] font-[400]`}
                              href={menu.itemUrl}
                            >
                              {menu.titles}
                            </a>
                          </div>
                          {menu.submenu && (
                            <BsChevronDown
                              className={`${
                                subMopen && "rotate-180"
                              } duration-300 lg:text-[20px]`}
                              onClick={() => setSubMenuOpen(!subMopen)}
                            />
                          )}
                        </li>
                        {menu.submenu && smdOpen && subMopen && (
                          <ul>
                            {menu.submenuItems.map((submenuTitls, index) => (
                              <li
                                className={` capitalize cursor-pointer duration-300 hover:bg-gray-300 py-1 px-4 mx-6 my-3 rounded-md space-y-2 flex items-center space-x-4 font-medium`}
                                key={index}
                              >
                                <a
                                  className={` text-sm lg:text-[20px] font-['Roboto'] font-[400]`}
                                  href={submenuTitls.itemUrl}
                                >
                                  {submenuTitls.titles}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* skdfkfjskfjslfj */}

          <div className="w-full space-y-3">
            <div className=" shadow-[0_35px_60px_-20px_rgba(0,0,0,0.3)]  bg-white flex items-center h-[62px]  w-[100%] justify-between px-3 lg:px-[30px] py-2">
              <div className="lg:block hidden">
                <BsMenuButton
                  onClick={() => setDopen(!dOpen)}
                  className={` text-[25px] hover:text-green-500 cursor-pointer text-blue-400 ${
                    !dOpen && "rotate-180"
                  } duration-500`}
                />
              </div>
              <div className="lg:hidden block">
                <BsMenuButton
                  onClick={() => setsmDopen(!smdOpen)}
                  className={` text-[25px] hover:purple-green-500 cursor-pointer text-red-400 ${
                    !smdOpen && "rotate-180"
                  }  duration-500`}
                />
              </div>
              <div className="flex items-center space-x-4">
                <span className=" lg:block hidden">
                  <FiMaximize className=" text-[20px]" />
                </span>
                <span>
                  <FiBell className=" text-[20px]" />
                </span>
                {/* <span>
                <img src={USAFlag} alt="" />
              </span> */}

                <div className="flex items-center space-x-2 font-['Roboto']">
                  <div
                    className={`bg-[url('${ProfileImg}')] bg-cover bg-center ring-2 ring-blue-500 rounded-full w-[30px] h-[30px] flex items-center justify-center`}
                  ></div>
                  <div className=" hidden lg:block text-[#484C72]">
                    {username}
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full h-screen  lg:h-[92%] p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              optio fugit dolore doloremque magnam architecto tempore, sint at
              voluptatibus? Veniam, cumque inventore accusamus corrupti suscipit
              eaque. Consequatur ex excepturi maiores suscipit sunt et
              voluptates itaque perferendis vero, laboriosam eos?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
