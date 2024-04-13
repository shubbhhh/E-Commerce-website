import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Heading } from "../components/heading";
import { InputBox } from "../components/inputbox";
import { Button } from "../components/button";
import { BottomWarning } from "../components/BottomWarning";


export function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signin = async () => {
        const response = await axios.post("http://localhost:3000/brandname/user/singin", {
            email,
            password
        });
        if (response.status = 200) {
            localStorage.setItem("token", response.data.token);
            navigate("/brandname/explore");
        }
    }

    return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign-In"} />

                <InputBox placeholder={"jon@gmail.com"} title={"Email"} onchange={ (e) => {setEmail(e.target.value)} } />
                <InputBox placeholder={"password"} title={"Password"} onchange={ (e) => {setPassword(e.target.value)} } />

                <div className="pt-4">
                    <Button 
                        label={"Signin"}
                        onClick={signin}
                    />
                    <BottomWarning to={"/signup"} label={"Already have an account?"} buttonText={"singin"} />
                </div>
            </div>
        </div>
    </div>
    );
} 