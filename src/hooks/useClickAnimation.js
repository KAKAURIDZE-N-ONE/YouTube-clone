import { useState, useEffect } from "react";

function useClickAnimation() {
  const [isclickmoment, setIsClickMoment] = useState(false);
  const [forBorder, setForBorder] = useState(false);

  function handleMouseDown() {
    setIsClickMoment(true);
  }

  function handleMouseUp() {
    setIsClickMoment(false);
    setForBorder(true);
  }

  useEffect(
    function () {
      const id = setTimeout(function () {
        setForBorder(false);
      }, 100);

      return () => clearTimeout(id);
    },
    [forBorder]
  );
  return { isclickmoment, handleMouseDown, handleMouseUp, forBorder };
}

export default useClickAnimation;
