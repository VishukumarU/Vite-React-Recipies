import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import styles from "../utils/styles";

const RootLayout = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles["padding-x"]} ${styles["flex-center"]}`}>
        <div className={`${styles["box-width"]}`}>
          <NavBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
