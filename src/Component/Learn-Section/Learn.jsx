import learnPhoto from "../../../src/assets/Layer_1.png";
import learnPhoto2 from "../../../src/assets/Group 3.png";
import learnPhoto3 from "../../../src/assets/Group 4.png";


const Learn = () => {
  return (
    <div className="bg-slate-100 bg-opacity-95 shadow-sm mt-8 p-12 rounded-xl">
      <div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[#0D1321] text-[32px] font-bold">
            Why Web Development??
          </h2>
          <p className="mt-3 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br /> Ipsum has been the industry's standard dummy
            text.
          </p>
        </div>

        <div className="flex gap-24 mt-8 rounded-xl justify-evenly bg-white">
          <div>
         <h2 className="text-[#0D1321] pb-1 text-[24px] mt-4 italic">I will Do Coding and <br /> Change The World</h2>
            <p>
              Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
              industry.
            </p>
            <button className="btn btn-outline mt-4">Learn More</button>
          </div>
          <div>
            <img src={learnPhoto} alt="" className="h-[240px] w-full" />
          </div>
        </div>

        <div className="flex gap-24 mt-8 rounded-xl justify-evenly bg-white">
        <div>
            <img src={learnPhoto2} alt="" className="h-[240px] w-full" />
          </div>
          <div>
         <h2 className="text-[#0D1321] pb-1 text-[24px] mt-4 italic">I will Do Coding and <br /> Change The World</h2>
            <p>
              Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
              industry.
            </p>
            <button className="btn btn-outline mt-4">Learn More</button>
          </div>
        </div>

        <div className="flex gap-24 mt-8 rounded-xl justify-evenly bg-white">
          <div>
         <h2 className="text-[#0D1321] pb-1 text-[24px] mt-4 italic">I will Do Coding and <br /> Change The World</h2>
            <p>
              Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
              industry.
            </p>
            <button className="btn btn-outline mt-4">Learn More</button>
          </div>
          <div>
            <img src={learnPhoto3} alt="" className="h-[240px] w-full" />
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Learn;
