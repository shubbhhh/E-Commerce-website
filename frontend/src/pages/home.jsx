import { Navbar } from "../components/navbar";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "react-feather";
import { useState, useEffect } from "react";
import "../App.css"

const slides = [
    "/home/TRENDING_NOW_Web_8f133216-20fa-4f2b-ab53-16700bf7a8fe.webp",
    "/home/CASUAL_SHIRTS_Web_284caa3e-b8f2-441d-8adc-6e22fc8bb5d5.webp",
    "/home/DENIM_Web_0f1f3136-ac71-4b85-8394-a8ad0b2f7412.webp",
    "/home/MAN_Web_0a5b5a59-ae40-4ace-8519-f41ee3732ff1.webp",
    "/home/CASUAL_BOTTOMS_Web_5936fdba-7681-4d32-8a5e-df2d2fa0ca21.webp",
    "/home/FORMALS_Web_c50e0561-1737-4e31-843d-3f15e6a2b934.webp"
]

export function Home() {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (<div className="min-h-full bg-[#f3f3f3]">
        <Navbar />
        <div className="min-h-screen flex flex-col">
            <div className="items-center w-full h-full">
                <Carousel slides={slides} autoSlide={true} />
            </div>
        </div>
        <div className="flex items-center h-[600px] my-6">
            <div className={`flex-col justify-center w-1/3 items-center ${ animate? "fadeInLeft" : ""}`}>
                <div className="m-4 items-center">
                    <div className="m-4 text-6xl p-2 font-bold">
                        Top Fashion for a top price!
                    </div>
                    <div className="m-4 text-lg p-2 font-thin">
                        We sell only the most exclusive and high quality products for you. We are the best so come and shop with us.
                    </div>
                    <div className="flex">
                        <button className="mx-4 w-1/3 p-2 border hover:bg-black hover:text-white"
                                onClick={() => {navigate("/explore")}}
                        >
                            Explore
                        </button>
                        <button className="flex gap-2 mx-4 w-1/3 p-2 animate-pulse hover:animate-none border hover:bg-black hover:text-white"
                                onClick={() => {navigate("/signin")}}
                        >
                            <ArrowUpRight /> Signin
                        </button>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center w-2/3 p-4 ${animate ? 'fadeInRight' : ''}`}>
                <img className="m-2 rounded-lg" height="400" width="400" src="/home/f7617386394073.5d97bb1e3194d.jpg" alt="" />
                <img className="m-2 rounded-lg" height="400" width="400" src="/home/My Dream Of Publishing My Own Photography Book Is Almost A Reality!.jpeg" alt="" />
            </div>
        </div>
        <Footer />
        </div>
    )
}