import { FaAlignLeft, FaAngleLeft } from "react-icons/fa";

interface HeaderProps {
    selectedMenu: any | null;
    setSelectedMenu: (menu: any | null) => void;
}

export default function Header({ selectedMenu, setSelectedMenu }: HeaderProps) {
    return (
        <header className="bg-white border-b text-black h-[73px] p-[17.8px] flex items-center transition-all">
            {selectedMenu ? (
                <FaAngleLeft size={20} className="cursor-pointer" onClick={() => setSelectedMenu(null)} />
            ) : (
                <FaAlignLeft size={20} className="cursor-pointer" onClick={() => setSelectedMenu(null)} />
            )}
        </header>
    );
}
