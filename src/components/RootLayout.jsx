import { Outlet } from "react-router-dom";
import Header from "./Header/Header";


const RootLayout = () => {
    return (
      <>
        <Header></Header>
        <Outlet />
      </>
    );
}

export default RootLayout;