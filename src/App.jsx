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
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
