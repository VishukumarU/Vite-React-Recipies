import { NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, CakeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

const Header = () => {
  const defaultHeaderLinkClasses = `px-4 py-1 rounded-md text-slate-50 hover:bg-slate-300`;

  return (
    <Popover
      className={
        "w-screen mx-auto flex items-center border-b-2 px-6 py-2 h-24 bg-primary"
      }
    >
      <h1 className="font-bold flex items-center text-slate-50">
        <CakeIcon className="h-6 w-6 mr-2" />
        <span>React Recipes</span>
      </h1>
      <div className="grow">
        <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8 text-slate-50">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? defaultHeaderLinkClasses +
                  " hover:text-slate-600 bg-slate-500"
                : defaultHeaderLinkClasses + " hover:text-slate-600"
            }
            to="home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? defaultHeaderLinkClasses +
                  " hover:text-slate-600 bg-slate-500"
                : defaultHeaderLinkClasses + " hover:text-slate-600"
            }
            to="blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? defaultHeaderLinkClasses +
                  " hover:text-slate-600 bg-slate-500"
                : defaultHeaderLinkClasses + " hover:text-slate-600"
            }
            to="shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? defaultHeaderLinkClasses +
                  " hover:text-slate-600 bg-slate-500"
                : defaultHeaderLinkClasses + " hover:text-slate-600"
            }
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? defaultHeaderLinkClasses +
                  " hover:text-slate-600 bg-slate-500"
                : defaultHeaderLinkClasses + " hover:text-slate-600"
            }
            to="contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="scale-95 opacity-0"
        enterTo=" scale-100 opacity-100"
        leave="duration-100 ease-in"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">Reacting Recipes</h1>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close Menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-7-8">
                  <NavLink
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    to="home"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    to="blog"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    to="shop"
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    to="about"
                  >
                    About
                  </NavLink>
                  <NavLink
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                    to="contact"
                  >
                    Contact
                  </NavLink>
                </nav>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <NavLink
                  to="register"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  Sign up
                </NavLink>
                <NavLink
                  to="login"
                  className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium text-slate-100 md:text-xl w-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      <div className="hidden sm:block">
        <NavLink
          className="px-2 py-1 mr-2 rounded-md bg-amber-200 text-slate-700 hover:bg-amber-300 hover:text-slate-600"
          to="register"
        >
          Sign up
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? defaultHeaderLinkClasses +
                " hover:text-slate-600 bg-slate-500 text-white"
              : defaultHeaderLinkClasses +
                " hover:text-slate-600 hover:bg-slate-50"
          }
          // className="px-2 py-1 hover:text-slate-600 text-slate-50 rounded-md hover:bg-slate-50"
          to="auth/login"
        >
          Login
        </NavLink>
      </div>
    </Popover>
  );
};

export default Header;
