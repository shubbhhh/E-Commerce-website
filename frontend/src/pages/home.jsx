import { Navbar } from "../components/navbar"
import img1 from "../../../a9db7fa652f199518471b6417d739dfa.jpg"
import img2 from "../../../roa20240406.jpg"
import img3 from "../../../denim_20210528.jpg"
import img4 from "../../../20240307.jpg"

export function Home() {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 flex items-center p-2">
                <div className="max-w-screen-lg w-full">
                    <img className="w-full h-auto object-contain border shadow-lg rounded-lg" src={img4} alt="" />
                    <img className="w-full h-auto object-contain border shadow-lg rounded-lg" src={img2} alt="" />
                    <img className="w-full h-auto object-contain border shadow-lg rounded-lg" src={img3} alt="" />
                </div>
            </div>
        </div>
    )
 }