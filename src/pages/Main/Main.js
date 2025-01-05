import { Link } from "react-router-dom";
import useSelectedHeaderMenu from "../../hooks/useSeletedHeaderMenu";
import useSelecteFooterTab from "../../hooks/useSeletedFooterTab";
import "./Main.css";

import Header from "../../components/Header/Header";
import FooterNavTab from "../../components/FooterNavTab/FooterNavTab";

function Main() {
  const { selectedMenu } = useSelectedHeaderMenu();
  const { selectedFooterTab } = useSelecteFooterTab();

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
