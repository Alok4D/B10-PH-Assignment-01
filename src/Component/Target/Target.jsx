import html from "../../../src/assets/html.png";
import css from "../../../src/assets/css.png";
import javascript from "../../../src/assets/js.png";

const Target = () => {
  return (
    <div className="mt-8">

      <div className="flex justify-center items-center flex-col">
        <p className="p-2 text-[#0D1321] text-[32px] font-extrabold">
          My Current Target
        </p>
        <h1 className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br /> Ipsum has been the industry's standard dummy
          text.
        </h1>
      </div>

    <div className="flex justify-evenly mt-5">
    <div className="p-10 bg-yellow-300 rounded-xl w-[364px]">
        <img src={html} alt="" className="w-14 h-14" />
        <h2 className="text-black text-[24px] font-semibold mt-2 mb-1">HTML</h2>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        <button className="btn btn-outline mt-2">Learn More</button>
      </div>

      <div className="p-10 bg-slate-300 rounded-xl w-[364px]">
        <img src={css} alt="" className="w-14 h-14" />
        <h2 className="text-black text-[24px] font-semibold mt-2 mb-1">CSS</h2>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        <button className="btn btn-outline mt-2">Learn More</button>
      </div>

      <div className="p-10 bg-red-300 rounded-xl w-[364px]">
        <img src={javascript} alt="" className="w-14 h-14" />
        <h2 className="text-black text-[24px] font-semibold mt-2 mb-1">JavaScript</h2>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        <button className="btn btn-outline mt-2">Learn More</button>
      </div>
    </div>

    </div>
  );
};

export default Target;
