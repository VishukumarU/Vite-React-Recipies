import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { db } from "./firebase/firebase";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home/Home";
import Auth, { action as authAction } from "./components/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        children: [{ path: "login" }, { path: "register" }],
        action: authAction,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </main>
  );
}

export default App;
