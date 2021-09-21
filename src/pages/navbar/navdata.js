import {FaCreditCard,FaBook,FaBriefcase} from 'react-icons/fa'

export const navdata =[
    {
        main: 'Home',
        links: [
          { label: 'payment', icon: <FaCreditCard />, url: '/Home' },
          { label: 'terminal', icon: <FaCreditCard />, url: '/Home' },
          { label: 'connect', icon: <FaCreditCard />, url: '/Home' },
        ],
      },
      {
        main: 'Products',
        links: [
          { label: 'plugins', icon: <FaBook />, url: '/products' },
          { label: 'libraries', icon: <FaBook />, url: '/products' },
          { label: 'help', icon: <FaBook />, url: '/products' },
          { label: 'billing', icon: <FaBook />, url: '/products' },
        ],
      },
      {
        main: 'Service',
        links: [
          { label: 'about', icon: <FaBriefcase />, url: '/Service' },
          { label: 'customers', icon: <FaBriefcase />, url: '/Service' },
        ],
      }
]
// 
