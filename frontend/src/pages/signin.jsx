import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/heading";
import { InputBox } from "../components/inputbox";
import { Button } from "../components/button";
import { BottomWarning } from "../components/BottomWarning";
import { AuthContext } from "../authContext";


export function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthenticated, login } = useContext(AuthContext);
    const navigate = useNavigate();

    const signin = async () => {
        const response = await axios.post("http://localhost:3000/brandname/user/signin", {
            email,
            password
        });
        if (response.status = 200) {
            localStorage.setItem("token", response.data.token);
            login()
            console.log(isAuthenticated)
            navigate("/explore");
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
                    <BottomWarning to={"/signup"} label={"Don't have an account?"} buttonText={"singup"} />
                </div>
            </div>
        </div>
    </div>
    );
} 