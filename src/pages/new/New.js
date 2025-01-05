import { Link } from "react-router-dom";
import useSelectedHeaderMenu from "../../hooks/useSeletedHeaderMenu";
import useSelecteFooterTab from "../../hooks/useSeletedFooterTab";
import "./New.css";

import Header from "../../components/Header/Header";
import FooterNavTab from "../../components/FooterNavTab/FooterNavTab";

function New() {
  const { selectedMenu } = useSelectedHeaderMenu();
  const { selectedFooterTab } = useSelecteFooterTab();

  return (
    <div className="New">
      <Header />
      <div className="Contents">
        <div>{selectedMenu.name}</div>
        <div>{selectedFooterTab.name}</div>
      </div>
      <FooterNavTab />
    </div>
  );
}

export default New;
