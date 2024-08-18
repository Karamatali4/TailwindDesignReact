import { FaSquareYoutube } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <>
    <footer className=" sm:max-h-[6rem] max-w-[75rem] mx-auto bg-rose-200">
      <div className="pinkcolor w-[100%] bg-rose-200 h-[20%]">
          <p className="text-rose-200">s</p>
      </div>
      <div className="footer flex flex-wrap h-[80%] bg-slate-700 max-w-[100%] sm:flex text-yellow-50 sm:text-3xl justify-between px-5 py-4">
        <div className="box1 flex gap-3">
          <a href="#"><FaSquareYoutube /></a>
          <a href="#"><CiTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
        </div>
        <div className="box2 ">
                <h2 className="text-yellow-50">London/UK</h2>
        </div>
        <div className="box3">
            <h2 className="text-yellow-50">info@work.com.ar</h2>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer