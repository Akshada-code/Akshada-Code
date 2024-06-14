import leftarrow from "../../assets/leftarrow.svg";
import logo from "../../assets/prymerLogo.svg";
import ShoppingCart from "../../assets/ShoppingCart.svg";
import Collections from "../../assets/Collections.svg";

const Header = () => {
  return (
    <div className="flex fixed top-0 py-4 justify-between items-start bg-gradient-to-t from-[#262626] to-black w-full z-10">
      <div className="flex items-center justify-around gap-5">
        <img src={logo} alt="logo" className="px-2" />{" "}
        <div className=" flex">
          <div className="relative -left-5">
            <img src={leftarrow} alt="notification" />
            <div className="absolute  top-2 left-6 w-4 h-4 bg-[#FFF550] rounded-full flex items-center justify-center">
              <span className="text-sm">1</span>
            </div>
          </div>
          <div className="flex place-items-end gap-10"></div>{" "}
        </div>
      </div>
      <div className="flex justify-end  text-white items-end gap-4 px-14">
        <span>
          <img src={Collections} className="px-5" />
          Collection
        </span>

        <span>
          <img src={ShoppingCart} /> Cart
        </span>
      </div>
    </div>
  );
};

export default Header;
