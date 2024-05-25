import { Navbar } from "../components/navbar"
import { Button } from "../components/button"
import img1 from "../../../jlal20240406.jpg"
import img2 from "../../../roa20240406.jpg"
import img3 from "../../../denim_20210528.jpg"
import img4 from "../../../20240307.jpg"

export function Home() {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 p-2 justify-items-center">
                {/* <div className="w-full items-center">
                    <button>Explore</button>
                </div> */}
                <div className="w-full grid grid-cols-2 gap-1">
                    <img className="w-full h-auto object-contain border justify-items-center shadow-lg rounded-lg" src={img4} alt="" />
                    <img className="w-full h-auto object-contain border justify-items-center shadow-lg rounded-lg" src={img1} alt="" />
                    <img className="w-full h-auto object-contain border justify-items-center shadow-lg rounded-lg" src={img2} alt="" />
                    <img className="w-full h-auto object-contain border justify-items-center shadow-lg rounded-lg" src={img3} alt="" />
                </div>
            </div>
        </div>
    )
 }