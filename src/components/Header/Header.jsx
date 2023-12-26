import { NavLink, useNavigate } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CakeIcon,
  XMarkIcon,
  UserCircleIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "@headlessui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { authActions } from "../../store/auth-slice";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultHeaderLinkClasses = `px-4 py-1 rounded-md text-slate-50 hover:bg-slate-300`;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("isLoggedIn");
      dispatch(authActions.logout());
      navigate("/home");
    } catch (error) {
      const { code } = error;
      let errorMsg = "";
      switch (code) {
        //   case `auth/email-already-in-use`:
        //     errorMsg = "This email already exists. Please use a different one";
        //     break;
        default:
          errorMsg = "An error occured when logging off. Please try again!!";
          break;
      }
      toast.error(errorMsg);
    }
  };

  const authenticationActions = (
    <>
      <NavLink
        className="px-2 py-1 mr-2 rounded-md bg-amber-200 text-slate-700 hover:bg-amber-300 hover:text-slate-600"
        to="auth/register"
      >
        Sign up
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${defaultHeaderLinkClasses} ${
            isActive
              ? " hover:text-slate-600 bg-slate-500 text-white"
              : " hover:text-slate-600 hover:bg-slate-50"
          }`
        }
        to="auth/login"
      >
        Login
      </NavLink>
    </>
  );

  const profileContent = (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md pl-4 py-2 text-sm font-medium text-white hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <UserCircleIcon className="h-6 w-6 text-slate-50 mr-5" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary/40 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                  >
                    {active ? (
                      <UserIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <UserIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Vishu
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary/40 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                    onClick={handleLogout}
                  >
                    <ArrowRightOnRectangleIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );

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
              `${defaultHeaderLinkClasses} ${
                isActive
                  ? "hover:text-slate-600 bg-slate-500"
                  : "hover:text-slate-600"
              }`
            }
            to="home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${defaultHeaderLinkClasses} ${
                isActive
                  ? "hover:text-slate-600 bg-slate-500"
                  : "hover:text-slate-600"
              }`
            }
            to="recipes"
          >
            Recipes
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
      <div className="hidden sm:block w-1/12 text-end">
        {!isLoggedIn ? authenticationActions : profileContent}
      </div>
    </Popover>
  );
};

export default Header;
