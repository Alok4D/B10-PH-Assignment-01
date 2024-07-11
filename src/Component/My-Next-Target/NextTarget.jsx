import reactLogo from "../../../src/assets/react.png"
import nodejsLogo from "../../../src/assets/nodejs.png"
import mongoDB from "../../../src/assets/mongodb.png"

const NextTarget = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-center items-center flex-col">
                <h2 className="font-bold text-gray-600 text-4xl mb-2">My Next Target</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
           <div className="mt-10 mb-10">

           <div className="flex gap-6 border-2 p-10 rounded-xl">
            <img src={reactLogo} alt="" className="w-[115px] h-[108px]" />
            <div>
                <h2 className="text-[24px] text-black mb-1">ReactJS</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                <button className="btn btn-outline mt-2">Learn More</button>
            </div>
           </div>

           <div className="flex gap-6 border-2 p-10 rounded-xl mt-4">
            <img src={nodejsLogo} alt="" className="w-[143px] h-[108px]" />
            <div>
                <h2 className="text-[24px] text-black mb-1">Nodejs</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                <button className="btn btn-outline mt-2">Learn More</button>
            </div>
           </div>

           <div className="flex gap-6 border-2 p-10 rounded-xl mt-4">
            <img src={mongoDB} alt="" className="w-[115px] h-[108px]" />
            <div>
                <h2 className="text-[24px] text-black mb-1">MongoDB</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                <button className="btn btn-outline mt-2">Learn More</button>
            </div>
           </div>


         

           </div>
        </div>
    );
};

export default NextTarget;