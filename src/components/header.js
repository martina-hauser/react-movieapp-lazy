import { NavLink } from "react-router-dom";
import { CounterContainer } from "../container/counter-container";

export function Header() {
  return (
    <div className="header">
      <h1 className="title">
        <span>Movie App</span>
        <CounterContainer />
        <div className="nav-list">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/cart">
            Cart
          </NavLink>
        </div>
      </h1>
    </div>
  );
}
