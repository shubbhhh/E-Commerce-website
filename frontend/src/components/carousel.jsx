import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export function Carousel ({ slides, autoSlide = false, autoSlideInterval = 3000 }) {
    const [curr, setCurr] = useState(0);

    const prev = () => { 
        setCurr((curr) => (curr === 0 ? slides.length - 1: curr -1)) 
    }
    const next = () => { 
        setCurr((curr) => (curr === slides.length - 1 ? 0: curr + 1))
    }

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
     }, [])

    return (
        <div className="overflow-hidden relative w-full h-full">

            {/* Slides container */}
            <div className="flex transition-transform ease-out duration-500 items-center" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((src, i) => (
                        <img key={i} src={src} alt={`Slide ${i}`} className="" />
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="text-gray-800 hover:bg-white/30">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className="text-gray-800 hover:bg-white/30">
                    <ChevronRight size={40} />
                </button>
            </div>

            {/* Slide Indicator */}
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`transition-all w-8 h-1 bg-white rounded ${curr === i ? "": "bg-opacity-50"}`} />
                    ))}
                </div>

            </div>

        </div>
    )
};
