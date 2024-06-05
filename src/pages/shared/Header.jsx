import React from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import myImg from "../../assets/image1/avatar4.jpg";
import { HiChevronDown } from "react-icons/hi2";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between bg-white h-16 px-4 w-full py-3">
      <div className=" relative ">
        <HiOutlineSearch
          fontSize={20}
          className=" text-gray-400 absolute items-center  top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className=" text-sm   focus:outline-none active:outline-none h-10 w-[24rem] border  border-gray-400 rounded-sm  pl-10 pr-4 py-2   "
        />
      </div>
      <div className=" flex items-center gap-2 ">
        <>
          <Popover>
            {({ open }) => (
              <>
                <PopoverButton
                  className={classNames(
                    open ? "bg-slate-300" : "",
                    "p-1 rounded-md inline-flex items-center text-gray-700 hover: text-opacity-100 focus:outline-none  active:bg-gray-100"
                  )}
                >
                  <HiOutlineChatAlt fontSize={24} />
                </PopoverButton>
                <Transition
                  enter="duration-10 ease-out"
                  enterFrom="scale-95 opacity-0"
                  enterTo="scale-100 opacity-100"
                  leave="duration-200 ease-out"
                  leaveFrom="scale-100 opacity-100"
                  leaveTo="scale-95 opacity-0"
                >
                  <PopoverPanel
                    anchor="bottom"
                    className=" absolute right-0 mt-2 w-60 "
                  >
                    <div className="   bg-white rounded-md shadow-md ring-1 ring-black  ring-opacity-5 px-2  py-3 mr-8 mt-2">
                      <h1 className=" mb-2 text-center text-green-300 font-bold">
                        Messages
                      </h1>
                      <p className=" text-sm text-center">
                        This is your Messages
                      </p>
                    </div>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover>
            {({ open }) => (
              <>
                <PopoverButton
                  className={classNames(
                    open ? "bg-slate-300" : "",
                    "p-1 rounded-md inline-flex items-center text-gray-700 hover: text-opacity-100 focus:outline-none  active:bg-gray-100"
                  )}
                >
                  {" "}
                  <HiOutlineBell fontSize={24} />
                </PopoverButton>
                <Transition
                  enter="duration-10 ease-out"
                  enterFrom="scale-95 opacity-0"
                  enterTo="scale-100 opacity-100"
                  leave="duration-200 ease-out"
                  leaveFrom="scale-100 opacity-100"
                  leaveTo="scale-95 opacity-0"
                >
                  <PopoverPanel
                    anchor="bottom"
                    className=" absolute right-0 mt-2 w-60 "
                  >
                    <div className="   bg-white rounded-md shadow-md ring-1 ring-black  ring-opacity-5 px-2  py-6 mr-8 mt-2 text-center">
                      this is the panel
                    </div>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>

          <Menu>
            <MenuButton className="pb-2">
              <div className="  h-14 w-14 border rounded-full mt-2 outline-none shadow-sm text-center">
                <img src={myImg} alt="" className=" rounded-full " />
              </div>
            </MenuButton>

            <MenuItems
              anchor="bottom"
              className="flex flex-col bg-white py-2 px-2 shadow-lg border border-stone-300 rounded-md text-center w-40"
            >
              <MenuItem>
                <button
                  className=" data-[focus]:bg-neutral-300 py-1 shadow-sm "
                  onClick={() => navigate("/profile")}
                >
                  Your Profile
                </button>
                {/* <Link to="/profile">Your Profile</Link> */}
              </MenuItem>
              <MenuItem>
                <button
                  className=" data-[focus]:bg-neutral-300 py-1 shadow-sm"
                  onClick={() => navigate("/settings")}
                >
                  Setting
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="data-[focus]:bg-neutral-300 py-1 shadow-sm"
                  onClick={() => navigate("/")}
                >
                  SignOut
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </>
      </div>
    </div>
  );
}

export default Header;
