
export function SidePanel() {
    return <>
        <div className="flex justify-between m-1 py-1 border-b">
            Filter by
            <button>Clear</button>
        </div>
        <div className="flex-col flex gap-4 justify-between m-1 py-2">
            <div className="flex gap-4 w-2/3">
                <button className="bg-white rounded-md p-1 w-1/2">Men</button>
                <button className="bg-white rounded-md p-1 w-1/2">Women</button>
            </div>
            Category
            <div className="flex flex-auto gap-4 w-2/3">
                <button className="bg-white rounded-md p-1 w-1/2">Bottoms</button>
                <button className="bg-white rounded-md p-1 w-1/2">Shoes</button>
                <button className="bg-white rounded-md p-1 w-1/2">Accessories</button>
            </div>
            <div className="flex gap-4 w-2/3">
                <button className="bg-white rounded-md p-1 w-1/2">Men</button>
                <button className="bg-white rounded-md p-1 w-1/2">Women</button>
            </div>

        </div>
    </>
    
}