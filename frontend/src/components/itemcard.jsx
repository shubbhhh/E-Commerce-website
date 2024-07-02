import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart } from "react-feather";
import { AuthContext } from "../authContext";


export function ItemCard(props) {
    const { name, img, price, category, _id } = props.product;
    const proImage = `/products/${img}`;
    const page = props.page;
    const navigate = useNavigate();
    const [isLiked, setLiked] = useState(false);
    const { isAuthenticated, userData, setUserData } = useContext(AuthContext)
    
    const Liked = async () => {
        try {
            const response = await AddingItem("http://localhost:3000/brandname/explore/addtowishlist");

            if (response.status = 200) {
                setLiked(!isLiked);
                alert(response.data.message)
                return
            }
        } catch(err) {
            console.log(err)
        }
    };

    const AddingItem = async (url) => {
        if (!isAuthenticated) {
            navigate("/signin")
        }

        try {
            const response = await axios.put(url, props.product, {
                headers: {
                    authorization: localStorage.getItem('token'),
                }
            })
            if (response.status == 403) {
                navigate("/signin")
            }
            if (response.status = 200) {
                console.log(response.data)
                alert(response.data.message)
            }
            return response
            
        } catch(err) { 
            alert("Something went wrong")
        }
    
    };

    return ( <>
        <div className="rounded-md w-full h-full flex flex-col hover:scale-105">
            <img onClick={() => { navigate(`${_id}`)}} title={name} className="rounded-t-md object-fill w-full h-72" src={proImage} alt={name} />
            <div className="flex-1 flex flex-col justify-between p-2 border-x border-b">
                <div title={name} className="border-b pb-1 truncate">
                    {name}
                </div>
                <div className="flex justify-between items-center mt-2">
                    <button
                        className={`py-1 px-2 ${page === 'cart' ? "w-full" : "w-1/2"} items-center rounded-xl font-semibold border bg-gray-100 hover:bg-stone-700 hover:text-white`}
                        onClick={() => AddingItem("http://localhost:3000/brandname/explore/orderproduct")}
                    >
                        {`${page === "cart" ? "Remove" : "Buy"}`}
                    </button>
                    { page === "cart" ? null : <>
                    <div className="w-1/3 flex justify-center items-center gap-4">
                        <button
                            title="Add to cart"
                            className="bg-white rounded-lg"
                            onClick={() => AddingItem("http://localhost:3000/brandname/explore/addtocart")}
                        >
                            <ShoppingCart className="" />
                        </button>
                        <button
                            title="Add to wishlist"
                            className="bg-white rounded-lg"
                            onClick={Liked}
                        > 
                            <Heart className={`hover:fill-red-600 ${isLiked ? "fill-red-600" : "fill-none"}`} color={isLiked ? "#d62d2d" : "#080000"} />
                        </button>
                    </div>
                    </>}
                </div>
            </div>
        </div>
    </>
)};
