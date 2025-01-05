import React from "react";
import "./FooterNavTab.css";
import Header from "../Header/Header";

import { Link } from "react-router-dom";
import useSelectedFooterTab from "../../hooks/useSeletedFooterTab";

function FooterNavTab() {
  const { selectedFooterTab, setselectedFooterTab, FooterTabItems } =
    useSelectedFooterTab();

  return (
    <>
      <ul className="FooterNavTab flex">
        {FooterTabItems.map((tab) => (
          <li key={tab.name}>
            <Link
              to={tab.url}
              className={selectedFooterTab.name === tab.name ? "active" : ""}
              onClick={() => setselectedFooterTab(tab)}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FooterNavTab;
