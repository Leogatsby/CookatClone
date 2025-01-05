import { create } from "zustand";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useFooterTabStore = create((set) => ({
  FooterTabItems: [
    { name: "홈", icon: "", url: "/" },
    { name: "쿠켓신공", icon: "", url: "/new" },
    { name: "카테고리", icon: "", url: "/category" },
    { name: "카트", icon: "", url: "/cart" },
    { name: "마이쿠캣", icon: "", url: "/my" }
  ],
  selectedFooterTab: { name: "홈", icon: "", url: "/" },
  setSelectedFooterTab: (tab) => set({ selectedFooterTab: tab })
}));

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
