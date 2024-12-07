import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div
        className="container flex  flex-col justify-between py-8 sm:flex-row
        sm:items-center gap-4"
      >
        <Logo />
        <Search />
        <div className="flex gap-2">
          <DarkMode></DarkMode>
          <DropdownListMenu></DropdownListMenu>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
