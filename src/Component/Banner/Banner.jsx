import logo from "../../../src/assets/Group.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-photo hero w-full h-[652px] mt-4">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-[998px] mx-auto">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" />
          </div>
          <p className="mb-5 font-bold text-[#0D1321] text-[48px]">In the near future, I hope to become a Developer.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          <button className="btn border-none bg-black text-white mt-4">Contact with me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
