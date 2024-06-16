import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { InputBox } from "../components/inputbox";
import { BottomWarning } from "../components/BottomWarning";
import { AuthContext } from "../authContext";

export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = async () => {
        console.log({
            email,
            password,
            firstName,
            lastName,
            address,
        })
        try {
            const response = await axios.post("http://localhost:3000/brandname/user/signup", {
                email,
                password,
                firstName,
                lastName,
                address,
            });

            localStorage.setItem("token", response.data.token);
            console.log("token", response.data.token)
            login()
            // console.log(isAuthenticated)
            navigate("/explore");
        } catch (error) {
            alert("Something went wrong on frontend");
            console.log(error)
        }
    };

    return (
        <div className="flex">
            <div className="h-screen w-1/2 flex flex-col justify-center">
                <div className="flex justify-center font-extrabold">
                    hiii!!  
                </div>
            </div>
            <div className="bg-slate-300 h-screen w-1/2 flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                        <Heading label="Sign-Up" />

                        <InputBox placeholder="Jon" 
                                  title="First Name" 
                                  onchange={(e) => setFirstName(e.target.value)} 
                        />
                        <InputBox placeholder="Jones" 
                                  title="Last Name" 
                                  onchange={(e) => setLastName(e.target.value)} 
                        />
                        <InputBox placeholder="ABC Street, XYZ City, Postal Code" 
                                  title="Address" 
                                  onchange={(e) => setAddress(e.target.value)} 
                        />
                        <InputBox placeholder="jon@gmail.com" 
                                  title="Email" 
                                  onchange={(e) => setEmail(e.target.value)} 
                        />
                        <InputBox placeholder="******" 
                                  title="Password" 
                                  type="password" 
                                  onchange={(e) => setPassword(e.target.value)} 
                        />
                        
                        <div className="pt-4">
                            <Button label="Signup" onClick={handleSignup} />
                            <BottomWarning label="Already have an account?" buttonText="Sign-in" to="/signin" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signup;
