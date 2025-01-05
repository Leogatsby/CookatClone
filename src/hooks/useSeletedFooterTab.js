import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSelecteFooterTab = () => {
  const FooterTabItems = [
    { name: "홈", icon: "", url: "/" },
    { name: "쿠켓신공", icon: "", url: "/new" },
    { name: "카테고리", icon: "", url: "/best" },
    { name: "카트", icon: "", url: "/new-items" },
    { name: "마이쿠캣", icon: "", url: "/discount" }
  ];

  const [selectedFooterTab, setselectedFooterTab] = useState(FooterTabItems[0]); // 기본 메뉴
  const location = useLocation();

  // URL 변경 시 선택된 메뉴 동기화
  useEffect(() => {
    const currentFooterTab = FooterTabItems.find(
      (tabItem) => tabItem.url === location.pathname
    );
    if (currentFooterTab) {
      setselectedFooterTab(currentFooterTab);
    }
  }, [location.pathname]);

  return { selectedFooterTab, setselectedFooterTab, FooterTabItems };
};

export default useSelecteFooterTab;
