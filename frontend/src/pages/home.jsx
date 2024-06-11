import { Navbar } from "../components/navbar";
import { Button } from "../components/button";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";
import img1 from "../../../jlal20240406.jpg"
import img2 from "../../../roa20240406.jpg"
import img3 from "../../../denim_20210528.jpg"
import img4 from "../../../20240307.jpg"
import img5 from "../../../2024ss_0221.jpg"
import img6 from "../../../goldwin_0_20240412.jpg"

const slides = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
]

export function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Carousel slides={slides} />
            <Footer />
        </div>
    )
}