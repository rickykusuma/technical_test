import { MdHome, MdOutlineShoppingCart, MdBarChart, MdPerson, MdLock } from 'react-icons/md'

import DataTables from 'pages/DataTables'

export const routes = [
  {
    name: 'Main Dashboard',
    path: '/default',
    icon: <MdHome className="h-5 w-5" />,
    component: <></>
  },
  {
    name: 'NFT Marketplace',
    path: '/nft-marketplace',
    icon: <MdOutlineShoppingCart className="h-5 w-5" />,
    component: <></>
  },
  {
    name: 'Data Tables',
    icon: <MdBarChart className="h-5 w-5" />,
    path: '/data-tables',
    component: <DataTables />
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <MdPerson className="h-5 w-5" />,
    component: <></>
  },
  {
    name: 'Sign In',
    path: '/sign-in',
    icon: <MdLock className="h-5 w-5" />,
    component: <></>
  },
  {
    name: 'RTL Admin',
    path: '/rtl',
    icon: <MdHome className="h-5 w-5" />,
    component: <></>
  }
]
