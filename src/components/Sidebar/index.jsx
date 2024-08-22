import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from 'routes'
import { HiX } from 'react-icons/hi'
import UpgradeCard from './components/UpgradeCard'

const Sidebar = ({ open, onClose }) => {
  let location = useLocation()
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName)
  }

  useEffect(() => {
    if (open && window.innerWidth < 1200) {
      document.body.style.overflow = 'hidden'
    } else if (open && window.innerWidth > 1200) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <>
      <div
        className={`${
          open ? 'fixed xl:hidden' : 'hidden'
        } z-50 inset-0 bg-gray-500 bg-opacity-20 transition-opacity`}
        aria-hidden="true"></div>
      <div
        className={`sm:none duration-175 linear fixed pt-[25px] px-1 !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
          open ? 'translate-x-0' : '-translate-x-96'
        }`}>
        <span className="absolute top-4 right-4 block cursor-pointer xl:hidden" onClick={onClose}>
          <HiX />
        </span>

        <div className={`mx-[56px] my-6 flex items-center h-full`}>
          <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
            Horizon <span className="font-medium">FREE</span>
          </div>
        </div>
        <div className="my-7 h-px mx-3  bg-gray-300 dark:bg-white/30" />

        <ul className="mb-auto pl-3 pr-2">
          {routes.map((route, index) => (
            <Link key={index} to={route.path}>
              <div className="relative pl-0.5 py-2 flex hover:cursor-pointer">
                <li className="my-[3px] flex cursor-pointer items-center px-8" key={index}>
                  <span
                    className={`${
                      activeRoute(route.path) === true
                        ? 'font-bold text-darkBlue-500 dark:text-white'
                        : 'font-medium text-gray-600'
                    }`}>
                    {route.icon}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex ${
                      activeRoute(route.path) === true
                        ? 'font-bold text-navy-700 dark:text-white'
                        : 'font-regular text-gray-600'
                    }`}>
                    {route.name}
                  </p>
                </li>
                {activeRoute(route.path) ? (
                  <div className="absolute right-0 top-1 h-9 w-1 rounded-lg bg-darkBlue-500 dark:bg-darkBlue-400" />
                ) : null}
              </div>
            </Link>
          ))}
        </ul>

        <div className="flex justify-center">
          <UpgradeCard />
        </div>
      </div>
    </>
  )
}

export default Sidebar
