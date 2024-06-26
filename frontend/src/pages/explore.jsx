import { ItemCard } from "../components/itemcard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function Explore() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/brandname/explore/")
            .then(response => {
                setProducts(response.data.products);
            })
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <div className="p-4 grid grid-cols-2 gap-6 lg:grid-cols-5 sm:grid-cols-3">
                {products.map( (product, index) =>( <ItemCard key={index} product={product} /> ))}
            </div>
            <Footer />
        </>
    )
}