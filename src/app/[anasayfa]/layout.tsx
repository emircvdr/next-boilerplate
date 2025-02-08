"use client";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";


interface AnasayfaLayoutProps {
    children: React.ReactNode;
}

const Anasayfa = ({ children }: AnasayfaLayoutProps) => {
    const [selectedMenu, setSelectedMenu] = useState<any | null>(null);

    return (
        <div className="flex h-screen">
            <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            <div className={`flex-1 flex flex-col transition-all`}>
                <Header selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                <main className="flex-1 p-5">{children}</main>
            </div>
        </div>
    );
};

export default Anasayfa;
