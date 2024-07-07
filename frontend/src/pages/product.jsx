import { useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect } from "react";

export function Product() {
    const id = useParams();
    const [product, setProduct] = useState();
    
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
    }, [product]);

    return <div>
        {product.name}
    </div>
}