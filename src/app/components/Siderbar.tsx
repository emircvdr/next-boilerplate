"use client";
import { useState } from "react";
import { menuItems } from "../route/route";

interface SidebarProps {
    setSelectedMenu: (menu: any | null) => void;
    selectedMenu: any | null;
}

export default function Sidebar({ selectedMenu, setSelectedMenu }: SidebarProps) {
    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = (item: any) => {
        setSelectedMenu(item);
        setIsActive(true);
    };

    return (
        <div className="flex flex-row">
            <aside className="h-full bg-white border-r text-black transition-all">
                <div className="w-full p-2 border-b flex items-center justify-center">
                    <div className="bg-red-200 rounded-md p-2 w-14 h-14">L</div>
                    {/* bu kısım logo için ayrılmıstır. */}
                </div>
                <nav>
                    <ul className="p-2">
                        {menuItems.map((item, index) => (
                            <li key={index} className={`mb-2 p-4 rounded-md transition-all cursor-pointer hover:bg-blue-100 ${selectedMenu === item && isActive ? 'bg-blue-100' : ''}`}
                                onClick={() => handleMenuClick(item)}>
                                <div className="flex flex-col items-center justify-center">
                                    {item.icon}
                                    <span className="text-[12px] text-center">{item.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <div>
                {selectedMenu && (
                    <div className="w-64 h-full bg-white border-l border-r transition-all">
                        <div className="border-b w-full h-[73px]">
                            <h1 className="text-lg p-2">{selectedMenu.name}</h1>
                        </div>
                        <ul>
                            {selectedMenu.children?.map((child: any, index: number) => (
                                <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                                    <a href={child.url}>{child.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
