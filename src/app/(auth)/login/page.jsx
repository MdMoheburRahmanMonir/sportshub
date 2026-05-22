"use client";

import { useState } from "react";
import { LuEyeClosed, LuEye } from "react-icons/lu";


import Lottie from "lottie-react";
import Welcome from "@/assets/Welcome.json";
import olympic from "@/assets/Olympic.json";

import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { createAuthClient } from "better-auth/client";
import { Description, FieldError, Input, Label, TextField } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
    const authClient = createAuthClient();
    const [showPassword, setShowPassword] = useState(false);
    const [logRegvalue, setLogRegvalue] = useState(true);

    const handelSignup = async e => {
        e.preventDefault()
        const dataRes = new FormData(e.currentTarget);
        const RegistrationData = Object.fromEntries(dataRes.entries())
        const { name, email, password, image } = RegistrationData;

        const { data, error } = await authClient.signUp.email({
            name, // required
            email, // required
            password, // required
            image,
            callbackURL: "/login",

        },
            {
                onRequest: (ctx) => {
                    toast.info('Registration in progress')
                    //show loading
                },
                onSuccess: (ctx) => {
                    toast.success('Hay Your Registration Success')
                    setLogRegvalue(!logRegvalue)
                },
                onError: (ctx) => {
                    // display the error message
                    toast.error(ctx.error.message)
                },
            },

        );
 
    }
    const handelLogin = async e => {
        e.preventDefault()  
        const dataRes = new FormData(e.currentTarget);
        const LoginData = Object.fromEntries(dataRes.entries())
        
        const { email, password } = LoginData;
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        },
        {
            onRequest: (ctx) => {
                toast.info('Login progress')
            },
            onSuccess: (ctx) => {
                toast.success('Hay Your Login Success')
                },
                onError: (ctx) => {
                    // display the error message
                    toast.error(`OOHH sorry ${ctx.error.massage}`)
                },
            }
        );
        const { data: jwtData, error: jwtError } = await authClient.token()
        console.log(jwtData, jwtError);

    }

    const googleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        }); 

    }



    return (
        <div className="w-11/12 mx-auto py-12 relative">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/30 blur-3xl rounded-full"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-100  w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="rounded-2xl w-full flex flex-col lg:flex-row">
                <div className="relative w-full  md:w-[50%] bg-gradient-to-br lg:rounded-2xl md:rounded-2xl rounded-2xl md:rounded-b-none from-black to-blue-600 text-white flex items-center justify-center p-10">
                    <div className="absolute   z-10 ">
                        <Lottie className="hidden md:block lg:block" animationData={olympic} loop={true} style={{ width: 400, height: 400, opacity: 0.3 }} />
                    </div>
                    <div className="max-w-md text-center lg:text-left">
                        <h1 className="text-4xl font-bold z-20 mb-4 inline-block">
                            <Lottie animationData={Welcome} loop={true} />
                        </h1>

                        <p className="text-white  text-[25px] leading-relaxed  ">
                            Login to access your dashboard, <br /> manage your booking, <br /> and continue
                            your journey with our smart platform.
                        </p>
                    </div>

                </div>

                <div className="lg:w-1/2 w-full md:w-[50%] flex items-center justify-center p-6 bg-background">

                    <motion.div


                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 * 0.1 }}

                        className="w-full backdrop-blur-[8px] bg-transparent max-w-md bg-card border border-border rounded-2xl p-6 shadow-lg">

                        {logRegvalue ?

                            <form
                                onSubmit={handelLogin} className="pb-4 ">
                                <h2 className="text-2xl font-bold text-center mb-6">
                                    Sign in to your account
                                </h2>


                                <div className="mb-4">
                                    <TextField
                                        isRequired
                                        name="email"
                                        type="email"
                                        validate={(value) => {
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                                return "Please enter a valid email address";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label>Email</Label>
                                        <Input name="email" placeholder="john@example.com" className={`w-full shadow shadow-black/20  dark:shadow-white/20 bg-transparent placeholder:text-black dark:placeholder:text-white`} />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div className="mb-4 space-y-2">

                                    <TextField
                                        isRequired
                                        minLength={8}
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        validate={(value) => {
                                            if (value.length < 8) {
                                                return "Password must be at least 8 characters";
                                            }
                                            if (!/[A-Z]/.test(value)) {
                                                return "Password must contain at least one uppercase letter";
                                            }
                                            if (!/[0-9]/.test(value)) {
                                                return "Password must contain at least one number";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label>Password</Label>
                                        <div className="relative">
                                            <p onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5  " >
                                                {showPassword ? <LuEye /> : <LuEyeClosed size={18} />}
                                            </p>
                                            <Input name="password" placeholder="Enter your password" className={`w-full shadow shadow-black/20  dark:shadow-white/20 bg-transparent placeholder:text-black dark:placeholder:text-white`} />
                                        </div>
                                        <Description className="text-black dark:text-white">Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                        <FieldError />
                                    </TextField>
                                    <div className="flex items-center justify-between text-sm mb-4">
                                        <label className="flex items-center gap-2 text-muted-foreground">
                                            <input name="rememberMe" type="checkbox" className="accent-primary" />
                                            Remember me
                                        </label>

                                        <a href="#" className="text-primary hover:underline my-1">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>


                                <button type="submit" className="w-full text-white py-2 my-1 rounded-lg bg-blue-600/70 text-black font-medium hover:opacity-90 transition">
                                    Login
                                </button>
                            </form>
                            :
                            <form
                                onSubmit={handelSignup} className=" ">
                                <h2 className="text-2xl font-bold text-center mb-6">
                                    Create your account
                                </h2>

                                <div className="mb-4">
                                    <TextField
                                        isRequired
                                        name="image"
                                        type="text"
                                    >
                                        <Label>Name</Label>
                                        <Input name="name" placeholder="Enter your Name" className={`w-full shadow shadow-black/20  dark:shadow-white/20 bg-transparent placeholder:text-black dark:placeholder:text-white`} />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div className="mb-4">
                                    <TextField
                                        isRequired
                                        name="email"
                                        type="email"
                                        validate={(value) => {
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                                return "Please enter a valid email address";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label>Email</Label>
                                        <Input name="email" placeholder="john@example.com" className={`w-full shadow shadow-black/20  dark:shadow-white/20 bg-transparent placeholder:text-black dark:placeholder:text-white`} />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div className="mb-4">
                                    <TextField
                                        isRequired
                                        name="image"
                                        type="text"
                                    >
                                        <Label>ImageUrl</Label>
                                        <Input name="image" placeholder="Enter your Image Url" className={`w-full shadow shadow-black/20  dark:shadow-white/20 bg-transparent placeholder:text-black dark:placeholder:text-white`} />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div className="mb-4">
                                    <TextField
                                        isRequired
                                        minLength={8}
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        validate={(value) => {
                                            if (value.length < 8) {
                                                return "Password must be at least 8 characters";
                                            }
                                            if (!/[A-Z]/.test(value)) {
                                                return "Password must contain at least one uppercase letter";
                                            }
                                            if (!/[0-9]/.test(value)) {
                                                return "Password must contain at least one number";
                                            }
                                            return null;
                                        }}
                                        className={`relative`}
                                    >
                                        <Label>Password</Label>
                                        <div className="relative">
                                            <p onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5  " >
                                                {showPassword ? <LuEye /> : <LuEyeClosed size={18} />}
                                            </p>
                                            <Input name="password" placeholder="Enter your password" className={`w-full shadow shadow-black/20  dark:shadow-white/20 bg-transparent placeholder:text-black dark:placeholder:text-white`} />
                                        </div>
                                        <Description className="text-black  dark:text-white">Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                        <FieldError />
                                    </TextField>
                                </div>

                                <button type="submit" className="w-full py-2 rounded-lg text-white shadow shadow-black/20 bg-blue-600/70 cursor-pointer text-black dark:text-white font-medium hover:opacity-90 transition">
                                    Register
                                </button>
                            </form>
                        }

                        {/* Footer */}
                        <p onClick={() => setLogRegvalue(!logRegvalue)} className="text-center text-sm text-muted-foreground mt-2">
                            {
                                logRegvalue ? 'Don’t have an account? ' : 'Have an account?'
                            } {" "}
                            <span className="cursor-pointer font-bold hover:underline text-blue-600">
                                {
                                    logRegvalue ? 'Sign up' : 'Login'
                                }
                            </span>
                        </p>
                        {/* Divider */}
                        <div className="flex items-center gap-3 my-2">
                            <div className="h-px flex-1 bg-border" />
                            <span className="text-xs text-muted-foreground">OR</span>
                            <div className="h-px flex-1 bg-border" />
                        </div>
                        {/* Google Login */}
                        <button onClick={googleLogin} className="w-full flex items-center justify-center gap-2 border border-border rounded-lg py-2 hover:bg-muted transition">
                            <FcGoogle size={18} />
                            Continue with Google
                        </button>


                    </motion.div>

                </div>

            </div>
        </div >
    );
}