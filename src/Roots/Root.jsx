

import { Helmet } from "react-helmet";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../Component/Banner/Banner";
import Learn from "../Component/Learn-Section/Learn";
import Inspiration from "../Component/Inspiration/Inspiration";
import Target from "../Component/Target/Target";
import NextTarget from "../Component/My-Next-Target/NextTarget";
import Support from "../Component/Support/Support";
import Footer from "../Component/Footer/Footer";


const Root = () => {
    return (
        <div>
             <Helmet>
             <title>Batch-10-PH-Assignment-01</title>
          </Helmet>
            <div className="w-[80%] mx-auto">
            <Navbar></Navbar>
            </div>
            <Banner></Banner>
            <div className="w-[80%] mx-auto">
            <Learn></Learn>
            </div>
            <div className="w-[80%] mx-auto">
           <Inspiration></Inspiration>
            </div>
            <div className="w-[80%] mx-auto">
           <Target></Target>
            </div>
            <div className="w-[80%] mx-auto">
           <NextTarget></NextTarget>
            </div>
            <div className="w-[80%] mx-auto">
           <Support></Support>
            </div>
            <Footer></Footer>
            <Outlet></Outlet>
       
        {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;