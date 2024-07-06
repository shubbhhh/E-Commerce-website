
export function SidePanel() {
    return <div className="">
        <div className="flex justify-between m-1 py-1 border-b font-semibold">
            Shop for
        </div>
        <div className="flex-col flex gap-4 justify-between m-1 py-2">
            <div className="flex gap-2 w-full py-2">
                <button type="radio" className="w-1/2 hover:text-red-600 hover:underline">Men</button>
                <button type="radio" className="w-1/2 hover:text-red-600 hover:underline">Women</button>
            </div>
            <div className="font-semibold border-y py-1">
                Shop by product
            </div>
            <div className="flex flex-col items-start w-full">
                <button className="hover:text-red-600 hover:underline">Bottoms</button>
                <button className="hover:text-red-600 hover:underline">Shoes</button>
                <button className="hover:text-red-600 hover:underline">Accessories</button>
                <button className="hover:text-red-600 hover:underline">T-shirts</button>
                <button className="hover:text-red-600 hover:underline">Jeans</button>
                <button className="hover:text-red-600 hover:underline">Trouser</button>
                <button className="hover:text-red-600 hover:underline">Shorts</button>
            </div>
            <div className="font-semibold border-y py-1">
                Offers
            </div>
            <div className="flex-col items-start w-full">
                <button className=" hover:text-red-600 hover:underline">Shorts: Starting ₹399</button>
                <button className=" hover:text-red-600 hover:underline">Save BIG: Min 50% off</button>
            </div>

        </div>
    </div>
    
}