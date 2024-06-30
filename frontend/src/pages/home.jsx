import { Navbar } from "../components/navbar";
import { Button } from "../components/button";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";

const slides = [
    "/home/TRENDING_NOW_Web_8f133216-20fa-4f2b-ab53-16700bf7a8fe.webp",
    "/home/CASUAL_SHIRTS_Web_284caa3e-b8f2-441d-8adc-6e22fc8bb5d5.webp",
    "/home/DENIM_Web_0f1f3136-ac71-4b85-8394-a8ad0b2f7412.webp",
    "/home/MAN_Web_0a5b5a59-ae40-4ace-8519-f41ee3732ff1.webp",
    "/home/CASUAL_BOTTOMS_Web_5936fdba-7681-4d32-8a5e-df2d2fa0ca21.webp",
    "/home/FORMALS_Web_c50e0561-1737-4e31-843d-3f15e6a2b934.webp"
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