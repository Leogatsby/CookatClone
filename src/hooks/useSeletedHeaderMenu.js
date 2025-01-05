import { create } from "zustand";

const useSelectedHeaderMenuStore = create((set) => ({
  menuItems: [
    { name: "쿠켓추천", url: "/" },
    { name: "쿠켓신공", url: "/new" },
    { name: "베스트", url: "/best" },
    { name: "신상품", url: "/new-items" },
    { name: "할인중", url: "/discount" },
    { name: "이벤트", url: "/events" }
  ],
  selectedMenu: { name: "쿠켓추천", url: "/" },
  setSelectedMenu: (menu) => set({ selectedMenu: menu })
}));

export default useSelectedHeaderMenuStore;
