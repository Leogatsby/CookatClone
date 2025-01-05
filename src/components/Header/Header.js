import { Link } from "react-router-dom";
import useSelectedHeaderMenu from "../../hooks/useSeletedHeaderMenu";
import "./Header.css";

function Header() {
  const { selectedMenu, setSelectedMenu, menuItems } = useSelectedHeaderMenu();

  return (
    <div className="Header">
      <div className="flex">
        <Link to="/" className="logo">
          cookat
        </Link>
        <input className="search" type="search" placeholder="지금 뭐먹지?" />
      </div>
      <div className="GNB">
        <ul className="flex">
          {menuItems.map((menu) => (
            <li key={menu.name}>
              <Link
                className={selectedMenu.name === menu.name ? "active" : ""}
                onClick={() => setSelectedMenu(menu)}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>{selectedMenu.name}</div>
      </div>
    </div>
  );
}

export default Header;
