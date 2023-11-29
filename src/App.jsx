import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { db } from "./firebase/firebase";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home/Home";

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
        element: <p>You have logged in</p>,
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
