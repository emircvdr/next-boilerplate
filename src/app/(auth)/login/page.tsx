"use client";

import { useState } from "react";
import Logo from "../../../../public/solendlogo.png"
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";



export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="w-full max-w-md bg-transparent p-8 rounded-lg shadow-xl">
                <div className="flex flex-col items-center justify-center gap-1 mb-5">
                    {/* Logo değişimi burada projeye göre olabilir */}
                    <Image src={Logo} alt="Solend Logo" width={80} height={80} />
                    {/* Proje ismi burada projeye göre değişebilir */}
                    <h2 className="text-2xl text-gray-800">Solend</h2>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Kullanıcı Adı</label>
                        <input
                            type="text"
                            placeholder="Kullanıcı adınızı girin"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Şifre</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Şifrenizi girin"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Giriş Yap
                    </button>
                </form>
            </div>
        </div>
    );
}
