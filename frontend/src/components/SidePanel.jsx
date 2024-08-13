export function SidePanel() {

    return <div className="px-4">
        <div className="flex justify-between m-1 py-1 border-b font-semibold">
            Shop for
        </div>
        <div className="flex-col flex gap-4 justify-between m-1 py-2">
            <div className="mx-2 flex gap-2 justify-between w-full">
            <button className="hover:text-red-600 hover:underline hover:font-semibold">All</button>
                <button className="hover:text-red-600 hover:underline hover:font-semibold">Men</button>
                <button className="hover:text-red-600 hover:underline hover:font-semibold">Women</button>
            </div>
            <div className="font-semibold border-b py-1">
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