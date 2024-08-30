import { useState } from "react";
import { useParams } from "react-router-dom"
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Heart, ShoppingBag } from "react-feather";
import axios from "axios";
import { useEffect } from "react";

export function Product() {
    const id = useParams('');
    const [product, setProduct] = useState({
        _id: '',
        name: '',
        img: '',
        price: 0,
        category: ''
    });
    
    async function getProduct() {
        const response = await axios.get(`http://localhost:3000/brandname/explore/${id.id}`)
        console.log(response.data.product)
        setProduct(response.data.product)
        // console.log(product)
    };
    // getProduct()
    // console.log(product)
    
    useEffect(() => {
        getProduct()
        console.log(product)
    }, []);

    return <>
    <Navbar />
    <div className="h-[92vh] flex items-center justify-center">
        <div className="w-full flex items-center">
            <div className="w-2/3 flex justify-center">
                <img height={"600"} width={"400"} src={`/products/${product.img}`} alt={product.category} className="rounded-md" />
            </div>
            <div className="p-2 w-2/3"> 
                <div className="flex gap-6 items-center font-medium text-2xl">
                    {product.name}
                    <Heart className="hover:fill-red-600 hover:text-red-600"/>
                </div>
                <div className="font-semibold text-gray-500">
                    MRP inclusive of all taxes
                </div>
                <div className="o-2 font-thin text-3xl">
                    Rs. {product.price}
                </div>
                <div className="my-4 p-2 w-2/3 flex justify-center font-semibold items-center border-2 hover:border-black hover:bg-gray-950 hover:text-white">
                    BUY
                </div>
                <div className="my-4 p-2 w-2/3 flex gap-2 justify-center font-semibold items-center border-2 hover:border-black hover:bg-gray-950 hover:text-white">
                    <ShoppingBag /> 
                    Add
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
}