"use client";

import { useState } from "react";
import { LuEyeClosed, LuEye } from "react-icons/lu";


import Lottie from "lottie-react";
import Welcome from "@/assats/Welcome.json";
import olympic from "@/assats/Olympic.json";

import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { createAuthClient } from "better-auth/client";

export default function LoginPage() {
    const authClient = createAuthClient();
    const router = useRouter()
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

        console.log(RegistrationData, data, error);
    }
    const handelLogin = async e => {
        e.preventDefault()
        const dataRes = new FormData(e.currentTarget);
        const LoginData = Object.fromEntries(dataRes.entries())

        const { email, password, rememberMe } = LoginData;
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe,
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
        console.log(LoginData, data, error);

    }

    const googleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);

    }



    return (
        <div className="w-11/12 mx-auto py-12">
            <div className="rounded-2xl w-full flex flex-col lg:flex-row">
                <div className="relative w-full  md:w-[50%] bg-gradient-to-br lg:rounded-2xl md:rounded-2xl rounded-2xl md:rounded-b-none from-primary to-blue-600 text-white flex items-center justify-center p-10">
                    <div className="absolute   z-10 ">
                        <Lottie className="hidden md:block lg:block" animationData={olympic} loop={true} style={{ width: 400, height: 400, opacity: 0.3 }} />
                    </div>
                    <div className="max-w-md text-center lg:text-left">
                        <h1 className="text-4xl font-bold z-20 mb-4 inline-block">
                            <Lottie animationData={Welcome} loop={true} />
                        </h1>

                        <p className="text-white/80 text-lg leading-relaxed  ">
                            Login to access your dashboard, <br /> manage your booking, <br /> and continue
                            your journey with our smart platform.
                        </p>

                        <div className="mt-6 hidden lg:block text-white/60 text-sm">
                            Secure • Fast • Modern Experience
                        </div>
                    </div>

                </div>

                <div className="lg:w-1/2 w-full md:w-[50%] flex items-center justify-center p-6 bg-background">

                    <div className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-lg">

                        {logRegvalue ?

                            <form onSubmit={handelLogin} className="pb-4 ">
                                <h2 className="text-2xl font-bold text-center mb-6">
                                    Sign in to your account
                                </h2>


                                <div className="mb-4">
                                    <label className="text-sm text-muted-foreground">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background focus:ring-2 text-black dark:text-white focus:ring-primary outline-none"
                                    />
                                </div>

                                <div className="mb-4 space-y-2">
                                    <label className="text-sm text-muted-foreground">Password</label>

                                    <div className="relative mt-1">
                                        <input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:ring-2 text-black dark:text-white focus:ring-primary outline-none"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-2.5 text-muted-foreground"
                                        >
                                            {showPassword ? <LuEye /> : <LuEyeClosed size={18} />}
                                        </button>
                                    </div>
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


                                <button type="submit" className="w-full py-2 my-1 rounded-lg bg-blue-600/70 text-black font-medium hover:opacity-90 transition">
                                    Login
                                </button>
                            </form>
                            :
                            <form onSubmit={handelSignup} className=" ">
                                <h2 className="text-2xl font-bold text-center mb-6">
                                    Create your account
                                </h2>

                                <div className="mb-4">
                                    <label className="text-sm text-muted-foreground">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-black dark:text-white focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="text-sm text-muted-foreground">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full mt-1 px-3 py-2 rounded-lg border border-border text-black dark:text-white bg-background  focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="text-sm text-muted-foreground">Photo URL</label>
                                    <input
                                        name="image"
                                        type="text"
                                        placeholder="https://your-image.com/photo.jpg"
                                        className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background focus:ring-2 text-black dark:text-white focus:ring-primary outline-none"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="text-sm text-muted-foreground">Password</label>

                                    <div className="relative mt-1">
                                        <input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full px-3 py-2 rounded-lg border border-border text-black dark:text-white bg-background focus:ring-2 focus:ring-primary outline-none"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-2.5 text-muted-foreground"
                                        >
                                            {showPassword ? <LuEye /> : <LuEyeClosed size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-2 rounded-lg shadow shadow-black/20 bg-blue-600/70 cursor-pointer text-black dark:text-white font-medium hover:opacity-90 transition">
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


                    </div>

                </div>

            </div>
        </div>
    );
}