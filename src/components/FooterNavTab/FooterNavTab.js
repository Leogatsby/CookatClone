import React from "react";
import "./FooterNavTab.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트

import { Link } from "react-router-dom";
import useSelectedFooterTab from "../../hooks/useSeletedFooterTab";

function FooterNavTab() {
  const navigate = useNavigate(); // URL 변경을 위한 navigate 함수

  const { selectedFooterTab, setSelectedFooterTab, FooterTabItems } =
    useSelectedFooterTab();

  return (
    <>
      <ul className="FooterNavTab flex">
        {FooterTabItems.map((tab) => (
          <li key={tab.name}>
            <a
              className={selectedFooterTab.name === tab.name ? "active" : ""}
              onClick={() => {
                setSelectedFooterTab(tab); // 상태 업데이트
                navigate(tab.url); // URL 변경
              }}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FooterNavTab;
