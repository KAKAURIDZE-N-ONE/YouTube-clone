import styles from "./MainNavMenuSvg.module.css";
import useClickAnimation from "../../../hooks/useClickAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  mainSideBarIsActive,
  mainSideBarIsNotActive,
  toggleMiniSideBar,
} from "../../SIDENAVBAR/SideNavBarSlice";

function MainNavMenuSvg() {
  const dispatch = useDispatch();
  const MainNavBar = useSelector((store) => store.MainNavBar);
  const SideNavBar = useSelector((store) => store.SideNavBar);

  const { isclickmoment, handleMouseDown, handleMouseUp, forBorder } =
    useClickAnimation();

  function handleClick() {
    if (MainNavBar.windowWidth > 1300) {
      if (SideNavBar.mainSideBarIsActive) dispatch(mainSideBarIsNotActive());
      else dispatch(mainSideBarIsActive());
    } else {
      dispatch(toggleMiniSideBar());
    }
  }

  return (
    <div
      className={styles["main-nav-svg-box"]}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      style={
        isclickmoment
          ? { backgroundColor: "rgba(255, 255, 255, 0.285)" }
          : forBorder
          ? { border: "1px solid rgba(255, 255, 255, 0.085)" }
          : {}
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        focusable="false"
        className={styles["main-nav-svg"]}
      >
        <path
          className={styles["main-nav-svg-path"]}
          d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"
        ></path>
      </svg>
    </div>
  );
}

export default MainNavMenuSvg;
