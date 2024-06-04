import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import proImage from "../assets/products/court_vision_low_next_nature_shoes.png";
import cart from "../assets/icons/cart-plus-svgrepo-com.svg";
import liked from "../assets/icons/liked.svg";
import unliked from "../assets/icons/unliked.svg";


export function ItemCard(product) {
    const { name, image, price, category } = product.product; 
    const navigate = useNavigate();
    const [isLiked, setLiked] = useState(false);

    // const ProductImage = React.lazy(() => import(`../assets/products/${image}`))
    
    const Liked = async () => {
        try {
            const like = await AddingItem("http://localhost:3000/brandname/explore/addtowishlist");
            if (like.status = 403) {
                navigate("http://localhost:3000/brandname/user/signin")
                return
            }
            if (like.status = 200) {
                setLiked(true);
                alert(like.data.message)
                return
            }
        } catch{
            alert("something went wrong")
        }
    }

    const AddingItem = async (url) => {
        try {
            response = await axios.put(url, product)
            if (response.status == 403) {
                navigate("http://localhost:3000/brandname/user/signin")
            }
            if (response.status = 200) {
                alert(response.data.message)
            }
            return response
            
        } catch {
            alert("Something went wrong")
        }
    
    }

    return (
    <div className="m-5 w-sm max-w-64 max-h-82 bg-white border border-gray-200 rounded-lg shadow ">
            <img className="pr-5 pl-5 pt-5  rounded-t-lg" src={proImage} alt={category} />
        <div className="px-5 pb-3">
            <div className="gird grid-flow-row">
                <div>
                    <h5 className="text-l text-ellipsis truncate  tracking-tight mt-2 text-gray-900" title={name}>{name}</h5>
                </div>
            </div>
            <div className="lg: flex justify-between ">
                    <div className="flex items-center justify-between" >
                        <button title="Add to cart" className="p-2 h-9 w-9 bg-white rounded-lg" onClick={()=> AddingItem("http://localhost:3000/brandname/explore/addtocart")}>
                            <img src={cart} />
                        </button>
                        <button title="Add to wishlist" className="p-2 h-9 w-9 bg-white rounded-lg" onClick={Liked}>
                            {isLiked ? <img src={liked} /> : <img src={unliked} />}
                        </button>
                        <button className="text-l h-9 font-bold text-white p-3 bg-black rounded-full flex items-center" onClick={() => AddingItem("http://localhost:3000/brandname/explore/orderproduct")}>
                            {"Buy"}
                        </button>
                        {/* <Button onClick={() => AddingItem("http://localhost:3000/brandname/explore/addtocart")}
                                label={<img src={cart} />}
                                />
                                <Button onClick={Liked} 
                                label={isLiked? <img src={liked} /> : <img src={unliked} />}
                                />
                                <Button onClick={() => AddingItem("http://localhost:3000/brandname/explore/orderproduct")}
                                label={"Buy"}
                            /> */}
                        <div className="text-xl font-bold text-gray-900 text-right">{`₹ ${price}`}</div>
                </div>
            </div>
        </div>
    </div>
    )
    
}
