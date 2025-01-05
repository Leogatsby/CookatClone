import { Link } from "react-router-dom";
import useSelectedMenu from "../../hooks/useSeletedHeaderMenu";
import "./Main.css";

import Header from "../../components/Header/Header";
import FooterNavTab from "../../components/Footer/FooterNavTab";

function Main() {
  const { selectedMenu } = useSelectedMenu();

  return (
    <div className="Main">
      <Header />
      <div className="MainContents">
        <h1>현재 선택된 메뉴: {selectedMenu.name}</h1>
      </div>
      <FooterNavTab />
    </div>
  );
}

export default Main;
