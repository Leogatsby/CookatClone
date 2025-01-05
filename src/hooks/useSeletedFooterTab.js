import { create } from "zustand";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Zustand 스토어 정의
const useFooterTabStore = create((set) => ({
  FooterTabItems: [
    { name: "홈", icon: "", url: "/" },
    { name: "쿠켓신공", icon: "", url: "/new" },
    { name: "카테고리", icon: "", url: "/best" },
    { name: "카트", icon: "", url: "/new-items" },
    { name: "마이쿠캣", icon: "", url: "/discount" }
  ],
  selectedFooterTab: { name: "홈", icon: "", url: "/" },
  setSelectedFooterTab: (tab) => set({ selectedFooterTab: tab })
}));

// URL 동기화 훅
const useSelecteFooterTab = () => {
  const { FooterTabItems, setSelectedFooterTab } = useFooterTabStore();
  const location = useLocation();

  useEffect(() => {
    const currentFooterTab = FooterTabItems.find(
      (tabItem) => tabItem.url === location.pathname
    );
    if (currentFooterTab) {
      setSelectedFooterTab(currentFooterTab);
    }
  }, [location.pathname, FooterTabItems, setSelectedFooterTab]);

  return useFooterTabStore();
};

export default useSelecteFooterTab;
