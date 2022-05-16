import { Link } from "react-router-dom";
import style from "./style.css";

const Header = () => (
  <header className="header">
    <h1>React App</h1>
    <nav>
      <Link className={style.active} to="/">
        Home
      </Link>
      <Link className={style.active} to="todo">
        ToDo
      </Link>
      <Link className={style.active} to="profile">
        Me
      </Link>
      <Link className={style.active} to="profile/john">
        John
      </Link>
    </nav>
  </header>
);

export default Header;
