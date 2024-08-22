import { Dropdown } from 'components'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { GoPlus } from 'react-icons/go'
const TableDropdown = ({ onAdd }) => {
  const [open, setOpen] = useState(false)
  return (
    <Dropdown
      button={
        <button
          onClick={() => setOpen(!open)}
          open={open}
          className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-darkBlue-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200`}>
          <BsThreeDots className="h-6 w-6" />
        </button>
      }
      animation={'origin-top-right transition-all duration-300 ease-in-out'}
      classNames={`top-11 right-0 w-max`}>
      <div
        onClick={onAdd}
        className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="hover:text-gray-700 dark:hover:text-white flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
          <span>
            <GoPlus className="h-5 w-5" />
          </span>
          Add
        </p>
      </div>
    </Dropdown>
  )
}

export default TableDropdown
