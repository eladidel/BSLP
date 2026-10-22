import hanoverLogo from "../../images/hanover-logo.svg";
import boatShowLogo from "../../images/Boat_Show_Logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={hanoverLogo}
        alt="Hanover Yahcts logo"
        className="header__logo_hanover"
      />
      <img
        src={boatShowLogo}
        alt="Boat Show Logo"
        className="header__logo_show"
      />
    </header>
  );
}
