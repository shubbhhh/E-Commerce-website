import { useState } from "react";
import { useParams } from "react-router-dom"
import { ItemCard } from "../components/itemcard";
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

    return <div className="">
        {product.name}
        <img className="w-1/2" src={`/products/${product.img}`} alt="" />
        {/* <ItemCard product={product} /> */}
    </div>
}