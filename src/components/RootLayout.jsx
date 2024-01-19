import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import styles from "../utils/styles";

const RootLayout = () => {
  return (
    <div className={styles.boxWidth}>
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
};

export default RootLayout;