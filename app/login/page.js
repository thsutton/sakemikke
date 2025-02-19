// app/login/page.js
"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
export default function LoginPage() {
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { t } = useLanguage();
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        try {
            const API_URL = "https://backmikke.onrender.com/api/users/login";

            const response = await fetch(API_URL, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                login({
                    token: data.token,
                    user: {
                        name: data.user?.name || data.name,
                        image: data.user?.image || data.image,
                    },
                });
            } else {
                setError(data.message || t.auth.login.loginFailed);
            }
        } catch (error) {
            setError(t.auth.login.serverError);
            console.error("Login error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen">
            {/* Main container */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Increased mt-20 to move content down */}
                <div className="flex-grow flex items-center justify-center p-4">
                    <div className="w-full max-w-md mt-20">
                        {" "}
                        {/* Changed -mt-20 to mt-20 to move down */}
                        {/* Glass card wrapper */}
                        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.16)] relative overflow-hidden">
                            {/* Enhanced gradient overlay */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-30"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                                    filter: "blur(10px)",
                                }}
                            />

                            {/* Animated glow effect */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-40"
                                style={{
                                    background:
                                        "linear-gradient(45deg, rgba(0,37,206,0.2), rgba(0,234,255,0.2))",
                                    filter: "blur(30px)",
                                    animation:
                                        "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                                }}
                            />

                            <div className="relative z-10 p-8">
                                <h1 className="text-4xl text-white font-extralight mb-8 tracking-wider">
                                    {t.auth.login.name}
                                </h1>

                                {error && (
                                    <div className="mb-6 p-4 rounded-lg backdrop-blur-md bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
                                        {error}
                                    </div>
                                )}

                                <form
                                    onSubmit={handleLogin}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-white/90 text-sm font-light"
                                        >
                                            {t.auth.login.mail}
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="password"
                                            className="block text-white/90 text-sm font-light"
                                        >
                                            {t.auth.login.password}
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full mt-4 backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white rounded-xl px-6 py-3.5 transition-all duration-300 relative overflow-hidden group disabled:opacity-50"
                                    >
                                        <span className="relative z-10 font-light tracking-wide">
                                            {loading
                                                ? t.auth.login.logging
                                                : t.auth.login.name}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </button>
                                </form>

                                <div className="mt-8 text-center">
                                    <Link
                                        href="/register"
                                        className="text-white/70 hover:text-white transition-colors text-sm font-light"
                                    >
                                        {t.auth.login.firstTime}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer with more space above */}
                {/* Footer */}
                <footer className="py-4 sm:py-6 text-center text-white mt-auto">
                    <p className="text-xs sm:text-sm font-light tracking-wider px-4">
                        {t.home.copyright}
                    </p>
                </footer>
            </div>
        </div>
    );
}
