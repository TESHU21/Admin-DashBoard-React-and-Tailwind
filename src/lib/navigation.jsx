import { RxDashboard } from "react-icons/rx";
import { HiOutlineCube } from "react-icons/hi";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { TbTransactionDollar } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdSettings,IoIosHelpCircleOutline,IoIosLogOut  } from "react-icons/io";

export const SIDE_BAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <RxDashboard />,
  },
  {
    key: 'products',
    label: 'Products',
    path: '/products',
    icon: <HiOutlineCube />,
  },
  {
    key: 'orders',
    label: 'Orders',
    path: '/orders',
    icon: <FaShoppingCart />,
  },
  {
    key: 'customers',
    label: 'Customers',
    path: '/customers',
    icon: <FaUsers />,
  },
  {
    key: 'transaction',
    label: 'Transactions',
    path: '/transaction',
    icon: <TbTransactionDollar />,
  },
  {
    key: 'messages',
    label: 'Messages',
    path: '/messages',
    icon: <MdOutlineMessage />,
  },
];
export const SIDE_BAR_BOTTOM_LINKS=[
    {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <IoMdSettings />,
  },
    {
    key: 'help',
    label: 'Help & Support',
    path: '/help',
    icon: <IoIosHelpCircleOutline />,
  },


];