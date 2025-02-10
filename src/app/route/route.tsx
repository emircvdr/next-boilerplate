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
        children: [
          {
            name: "test1",
            url: "/about",
          },
          {
            name: "test2",
            url: "/about",
          },
          {
            name: "test3",
            url: "/about",
          },
        ]
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
    name: "Test1",
    url: "/about",
    icon: <BiUser size={22} />,
  },
  {
    name: "Test2",
    url: "/about",
    icon: <CgCheck size={22} />,
  },
  {
    name: "Test3",
    url: "/about",
    icon: <BiPhone size={22} />,
  },
  {
    name: "Test4",
    url: "/about",
    icon: <CgCalendar size={22} />,
    children: [
      {
        name: "deneme1",
        children: [
          {
            name: "deneme1Test1",
            url: "/about",
          }
        ]
      }
    ]
  },
];
