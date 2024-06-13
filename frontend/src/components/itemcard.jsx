import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import proImage from "../assets/products/court_vision_low_next_nature_shoes.png";
import { ShoppingCart, Heart } from "react-feather";


export function ItemCard(props) {
    const { name, image, price, category } = props.product; 
    const page = props.page;
    const navigate = useNavigate();
    const [isLiked, setLiked] = useState(false);
    
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
    };

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
    
    };

    return ( <>
        <div className="rounded-md">
            <img className="rounded-md" src={proImage} alt={name} />
            <div className="" title={name}>
                <div className="mx-2 py-1 border-b truncate">
                    {name}
                </div>
                <div className="px-2 py-2 flex justify-between">
                    <button className="py-1 px-2 w-1/2 items-center rounded-xl font-semibold border bg-gray-100 hover:bg-stone-700 hover:text-white">
                        
                        {`${page==="cart"? "Remove":"Buy"}`}
                    </button>
                    <div className="w-1/3 flex justify-center items-center gap-4">
                        <button title="Add to cart" className=" bg-white rounded-lg" onClick={()=> AddingItem("http://localhost:3000/brandname/explore/addtocart")}>
                            <ShoppingCart className="" />
                        </button>
                        <button title="Add to wishlist" className="bg-white rounded-lg" onClick={Liked}>
                            <Heart className={`hover:fill-red-600 ${isLiked? "fill-red-600": "fill-none" }`} color={isLiked? "#d62d2d": "#080000" } />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
)};
