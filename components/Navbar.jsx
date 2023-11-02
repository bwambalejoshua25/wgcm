import Link from "next/link";
import { AiFillInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";

function Navbar() {

  return (
    <>
      <nav className="flex bg-black justify-between align-middle  ">
        <Link href="/" className="text-2xl px-4 font-bold text-white ">
          WGCM
        </Link>
        
        <ul className="nav-items">
          <p className="flex text-2xl gap-1 md:gap-4 text-white p-2">
        <Link href="/">
          <AiFillInstagram className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
        <Link href="/">
          <AiOutlineTwitter className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
        <Link href="/">
          <AiOutlineFacebook className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
        <Link href="/">
          <AiOutlineWhatsApp className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
        <Link href="/">
          <AiOutlineYoutube className="curser-pointer hover:border-2 hover:rounded-xl hover:p-1" />
        </Link>
      </p>
        </ul>
        <button className="flex text-white p-2 font-bold align-middle hover:bg-green-600 bg-pink-600">Donate</button>
      </nav>
    </>
  );
}

export default Navbar;
