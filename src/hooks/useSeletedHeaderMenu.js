import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSelecteHeaderdMenu = () => {
  const menuItems = [
    { name: "쿠켓추천", url: "/" },
    { name: "쿠켓신공", url: "/new" },
    { name: "베스트", url: "/best" },
    { name: "신상품", url: "/new-items" },
    { name: "할인중", url: "/discount" },
    { name: "이벤트", url: "/events" }
  ];

  const [selectedMenu, setSelectedMenu] = useState(menuItems[0]); // 기본 메뉴
  const location = useLocation();

  // URL 변경 시 선택된 메뉴 동기화
  useEffect(() => {
    const currentMenu = menuItems.find(
      (menu) => menu.url === location.pathname
    );
    if (currentMenu) {
      setSelectedMenu(currentMenu);
    }
  }, [location.pathname]);

  return { selectedMenu, setSelectedMenu, menuItems };
};

export default useSelecteHeaderdMenu;
