"use client";
import { useState } from "react";
import { menuItems } from "../route/route";
import { useRouter } from "next/navigation";

import { HiChevronRight, HiChevronDown } from "react-icons/hi2";


interface SidebarProps {
    setSelectedMenu: (menu: any | null) => void;
    selectedMenu: any | null;
}

export default function Sidebar({ selectedMenu, setSelectedMenu }: SidebarProps) {
    return (
        <div className="flex flex-row">
            {/* Sol Sidebar */}
            <aside className="h-full bg-white border-r text-black transition-all">
                <div className="w-full p-2 border-b flex items-center justify-center">
                    <div className="bg-red-200 rounded-md p-2 w-14 h-14">L</div>
                </div>
                <nav>
                    <ul className="p-2">
                        {menuItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                item={item}
                                setSelectedMenu={setSelectedMenu}
                                selectedMenu={selectedMenu}
                            />
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Sağ Panel */}
            {selectedMenu && (
                <RightPanel selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            )}
        </div>
    );
}

function MenuItem({ item, setSelectedMenu, selectedMenu }: any) {
    const handleClick = () => {
        setSelectedMenu(item);
    };

    return (
        <li
            className={`mb-2 p-4 rounded-md transition-all cursor-pointer hover:bg-blue-100 ${selectedMenu?.name === item.name ? "bg-blue-100" : ""
                }`}
            onClick={handleClick}
        >
            <div className="flex flex-col items-center justify-center">
                {item.icon}
                <span className="text-[12px] text-center">{item.name}</span>
            </div>
        </li>
    );
}

function RightPanel({ selectedMenu, setSelectedMenu }: any) {
    return (
        <div className="w-64 h-full bg-white border-l border-r transition-all p-2">
            <h1 className="text-lg border-b pb-2">{selectedMenu.name}</h1>
            <ul>
                {selectedMenu.children?.map((child: any, index: number) => (
                    <SubMenu key={index} item={child} setSelectedMenu={setSelectedMenu} />
                ))}
            </ul>
        </div>
    );
}

function SubMenu({ item, setSelectedMenu }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        if (item.children) {
            setIsOpen(!isOpen);
        } else {
            router.push(item.url);
        }
    };

    return (
        <li className="p-2 cursor-pointer">
            <div
                className="flex justify-between items-center hover:bg-gray-200 p-2 rounded-md"
                onClick={handleClick}
            >
                <span>{item.name}</span>
                {item.children && <span>{isOpen ? <HiChevronDown size={10} /> : <HiChevronRight size={10} />}</span>}
            </div>
            {isOpen && item.children && (
                <ul className="pl-4 border-l ml-2">
                    {item.children.map((child: any, index: number) => (
                        <SubMenu key={index} item={child} setSelectedMenu={setSelectedMenu} />
                    ))}
                </ul>
            )}
        </li>
    );
}
