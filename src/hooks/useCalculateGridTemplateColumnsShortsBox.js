import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const useCalculateGridTemplateColumnsShortsBox = () => {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const SideNavBar = useSelector(store => store.SideNavBar);
  const [gridTemplateColumns, setGridTemplateColumns] = useState('1fr');

  useEffect(() => {
    if (MainNavBar.windowWidth > 2228 && SideNavBar.mainSideBarIsActive) {
      setGridTemplateColumns('repeat(9, 1fr)');
    } else if (
      MainNavBar.windowWidth <= 2228 &&
      MainNavBar.windowWidth > 1900 &&
      SideNavBar.mainSideBarIsActive
    ) {
      setGridTemplateColumns('repeat(7, 1fr)');
    } else if (
      MainNavBar.windowWidth > 2060 &&
      !SideNavBar.mainSideBarIsActive
    ) {
      setGridTemplateColumns('repeat(9, 1fr)');
    } else if (
      MainNavBar.windowWidth > 1574 &&
      MainNavBar.windowWidth <= 1900 &&
      SideNavBar.mainSideBarIsActive
    ) {
      setGridTemplateColumns('repeat(6, 1fr)');
    } else if (
      MainNavBar.windowWidth > 1734 &&
      MainNavBar.windowWidth <= 2060 &&
      !SideNavBar.mainSideBarIsActive
    ) {
      setGridTemplateColumns('repeat(7, 1fr)');
    } else if (
      MainNavBar.windowWidth > 1400 &&
      MainNavBar.windowWidth <= 1574 &&
      SideNavBar.mainSideBarIsActive
    ) {
      setGridTemplateColumns('repeat(5, 1fr)');
    } else if (
      MainNavBar.windowWidth > 1400 &&
      MainNavBar.windowWidth <= 1734 &&
      !SideNavBar.mainSideBarIsActive
    ) {
      setGridTemplateColumns('repeat(6, 1fr)');
    } else if (
      MainNavBar.windowWidth <= 1400 &&
      MainNavBar.windowWidth > 1150
    ) {
      setGridTemplateColumns('repeat(5, 1fr)');
    } else if (
      MainNavBar.windowWidth <= 1150 &&
      MainNavBar.windowWidth > 1080
    ) {
      setGridTemplateColumns('repeat(4, 1fr)');
    } else if (MainNavBar.windowWidth <= 1080 && MainNavBar.windowWidth > 700) {
      setGridTemplateColumns('repeat(3, 1fr)');
    } else if (MainNavBar.windowWidth <= 700) {
      setGridTemplateColumns('repeat(2, 1fr)');
    }
  }, [MainNavBar.windowWidth, SideNavBar.mainSideBarIsActive]);

  return gridTemplateColumns;
};
