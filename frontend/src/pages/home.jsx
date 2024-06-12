import { Navbar } from "../components/navbar";
import { Button } from "../components/button";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";
import img1 from "../../../TRENDING_NOW_Web_8f133216-20fa-4f2b-ab53-16700bf7a8fe.webp"
import img2 from "../../../CASUAL_SHIRTS_Web_284caa3e-b8f2-441d-8adc-6e22fc8bb5d5.webp"
import img3 from "../../../DENIM_Web_0f1f3136-ac71-4b85-8394-a8ad0b2f7412.webp"
import img4 from "../../../MAN_Web_0a5b5a59-ae40-4ace-8519-f41ee3732ff1.webp"
import img5 from "../../../CASUAL_BOTTOMS_Web_5936fdba-7681-4d32-8a5e-df2d2fa0ca21.webp"
import img6 from "../../../FORMALS_Web_c50e0561-1737-4e31-843d-3f15e6a2b934.webp"

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
            <div className="p-2 items-center">
                <Carousel slides={slides} />
            </div>
            <Footer />
        </div>
    )
}