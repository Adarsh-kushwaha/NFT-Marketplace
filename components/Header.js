import Link from "next/link";
import { MENU } from "../helpers/constant";

const Header = () => {
  const renderMenuItem = (menu) => {
    return (
      <Link href={menu.url}>
        <h3>{menu.title}</h3>
      </Link>
    );
  };

  return (
    <header className="bg-red-500 mx-auto p-10">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <h2>BuyMyNFT</h2>
          </Link>
        </div>

        <div>
          <form action="" method="post">
            <input type="text" name="" id="" />
          </form>
        </div>

        <div className="flex items-center justify-between">
            {MENU.length > 0 && MENU.map(renderMenuItem)}
        </div>

        <div>
          <button className="px-6 py-2 rounded-3xl bg-gradient-to-r from-violet-500 
           to-fuchsia-500 text-white">
              Create
          </button>
          <button className="px-6 py-2 rounded-3xl border-zinc-200">Sign In</button>
          <input className="" type="checkbox" placeholder="Light Mode" />
        </div>
      </div>
    </header>
  );
};

export default Header;
