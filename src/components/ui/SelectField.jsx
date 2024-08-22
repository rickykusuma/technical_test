import React, { useState } from 'react'
import { ErrorMessage } from '.'
import { IoIosArrowDown } from 'react-icons/io'
const SelectField = ({ title, name, errors, register, options, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={`${
          errors?.[name] ? '!text-red-500' : ''
        }  block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>
        {title}
      </label>
      <div className="relative ">
        <select
          {...register(name)}
          name={name}
          id={name}
          defaultValue={''}
          className="h-[36px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value={''} disabled>
            Select an option
          </option>
          {options.length > 0
            ? options.map((option, idx) => (
                <option key={`option-select-${idx}`} value={option?.value}>
                  {option?.label}
                </option>
              ))
            : null}
        </select>
        <div className="absolute pointer-events-none inset-y-0 right-2 flex items-center">
          <IoIosArrowDown />
        </div>
      </div>
      {errors[name] ? <ErrorMessage errorMessage={errors[name]?.message} /> : null}
    </div>
  )
}

export default SelectField
