import React, { useEffect, useMemo, useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { BsArrowBarUp } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { IoMdNotificationsOutline, IoMdInformationCircleOutline } from 'react-icons/io'
import { Dropdown } from './ui'
import { navbarImg } from 'assets'
import { filterActions } from 'store/reducers/filter'
import { debounce } from 'lodash'
import { useDispatch } from 'react-redux'

const Navbar = (props) => {
  const dispatch = useDispatch()
  const { onOpenSidenav, title } = props
  const [darkmode, setDarkmode] = useState(false)

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300)
  }, [])

  function handleChange(e) {
    dispatch(filterActions.setKeyword({ keyword: e.target.value }))
  }

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })
  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      {/* Breadcrumb */}
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" ">
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {' '}
              /{' '}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#">
            {title}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link to="#" className="font-bold capitalize hover:text-navy-700 dark:hover:text-white">
            {title}
          </Link>
        </p>
      </div>

      {/* Search Group */}
      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-3">
        <div className="flex w-full h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:max-w-[200px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-5 w-5 text-gray-400 dark:text-white" />
          </p>
          <div>
            <input
              onChange={debouncedResults}
              type="text"
              placeholder="Search..."
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white "
            />
          </div>
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}>
          <FiAlignJustify className="h-5 w-5" />
        </span>
        {/* Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-5 w-5 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          classNames={'py-2 top-12 -left-[230px] md:-left-[440px] w-max'}>
          <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-navy-700 dark:text-white">Notification</p>
              <p className="text-sm font-bold text-navy-700 dark:text-white">Mark all read</p>
            </div>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-darkBlueLinear to-darkBlue-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                  New Update: Horizon UI Dashboard PRO
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-darkBlueLinear to-darkBlue-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                  New Update: Horizon UI Dashboard PRO
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>
          </div>
        </Dropdown>
        {/* Horizon PRO */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-5 w-5 text-gray-600 dark:text-white" />
            </p>
          }
          classNames="py-2 top-12 -left-[250px] md:-left-[330px] w-max"
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out">
          <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
            <div
              style={{
                backgroundImage: `url(${navbarImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
              className="mb-2 aspect-video w-full h-[288px] rounded-lg"
            />
            <a
              target="blank"
              href="https://horizon-ui.com/pro"
              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-darkBlue-500 py-[11px] font-bold text-white transition duration-200 hover:bg-darkBlue-600 hover:text-white active:bg-darkBlue-700 dark:bg-darkBlue-400 dark:hover:bg-darkBlue-300 dark:active:bg-darkBlue-200">
              Buy Horizon UI PRO
            </a>
            <a
              target="blank"
              href="https://horizon-ui.com/documentation/docs/introduction"
              className="text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold  dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10">
              See Documentation
            </a>
            <a
              target="blank"
              href="https://github.com/horizon-ui/horizon-ui-chakra-ts"
              className="hover:bg-black hover:text-navy-700 px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200  dark:text-white dark:hover:text-white">
              Try Horizon Free
            </a>
          </div>
        </Dropdown>
        {/* Dark Mode */}
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove('dark')
              setDarkmode(false)
            } else {
              document.body.classList.add('dark')
              setDarkmode(true)
            }
          }}>
          {darkmode ? (
            <RiSunFill className="h-5 w-5 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-5 w-5 text-gray-600 dark:text-white" />
          )}
        </div>
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <div className="w-10 h-10 rounded-full cursor-pointer bg-darkBlue-900 dark:bg-darkBlue-700 text-white flex justify-center items-center">
              <span>AP</span>
            </div>
          }
          classNames={'py-2 top-14 -left-[185px] w-max'}>
          <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
            <div className="p-4">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-navy-700 dark:text-white">👋 Hey, Adela</p>{' '}
              </div>
            </div>
            <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

            <div className="flex flex-col p-6 gap-2">
              <a href=" " className="text-sm text-gray-800 dark:text-white hover:dark:text-white">
                Profile Settings
              </a>
              <a
                href=" "
                className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white">
                Newsletter Settings
              </a>
              <a
                href=" "
                className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 transition duration-150 ease-out hover:ease-in">
                Log Out
              </a>
            </div>
          </div>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Navbar
