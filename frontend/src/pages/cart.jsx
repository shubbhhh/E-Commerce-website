import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function Cart() {

    function cartItems() {
        return
    }

    return <>
    <Navbar />
    <div className="min-h-screen">
        <div className="p-6 font-bold text-xl border-b">
            Your Cart
        </div>
        <div className="flex justify-between">
            <div className="p-6">
                hiii
            </div>
            <div className="m-6 pl-3 font-mono font-bold text-lg border-l items-start w-1/3">
                Amount
                
            </div>
        </div>
    </div>
    <Footer />
    </>
}
