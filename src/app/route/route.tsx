import { BiMoney, BiPhone, BiUser } from "react-icons/bi";
import { CgCalendar, CgCheck } from "react-icons/cg";
import { GrAnalytics } from "react-icons/gr";
import { HiHome } from "react-icons/hi";

export const menuItems = [
  {
    name: "Home",
    url: "/",
    icon: <HiHome size={22} />,
    children: [
      {
        name: "Dashboard",
        url: "/dashboard",
      },
      {
        name: "Analytics",
        url: "/about",
      },
    ]
  },
  {
    name: "Analytics",
    url: "/about",
    icon: <GrAnalytics size={22} />,
  },
  {
    name: "Selling",
    url: "/about",
    icon: <BiMoney size={22} />,
  },
  {
    name: "Analytics",
    url: "/about",
    icon: <BiUser size={22} />,
  },
  {
    name: "Analytics",
    url: "/about",
    icon: <CgCheck size={22} />,
  },
  {
    name: "Analytics",
    url: "/about",
    icon: <BiPhone size={22} />,
  },
  {
    name: "Analytics",
    url: "/about",
    icon: <CgCalendar size={22} />,
  },
];
