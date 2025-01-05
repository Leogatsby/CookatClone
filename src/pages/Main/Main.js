import { Link } from "react-router-dom";

import "./Main.css";

import Header from "../../components/LayoutComponents/Header/Header";
import FooterNavTab from "../../components/LayoutComponents/FooterNavTab/FooterNavTab";

import useSelectedHeaderMenu from "../../hooks/useSeletedHeaderMenu";
import useSelectedFooterTab from "../../hooks/useSeletedFooterTab";

function Main() {
  const { selectedMenu } = useSelectedHeaderMenu();
  const { selectedFooterTab } = useSelectedFooterTab();

  return (
    <div className="Main">
      <Header />
      <div className="MainContents">
        <div>{selectedMenu.name}</div>
        <div>{selectedFooterTab.name}</div>
      </div>
      <FooterNavTab />
    </div>
  );
}

export default Main;
