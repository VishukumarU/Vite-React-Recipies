import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { db } from "./firebase/firebase";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register, { action as registerAction } from "./components/Auth/Register";
import Login, { action as loginAction } from "./components/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "home",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <Login />,
            action: loginAction,
          },
          {
            path: "register",
            element: <Register />,
            action: registerAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
      <ToastContainer className="mt-24" position="top-right" />
    </main>
  );
}

export default App;
