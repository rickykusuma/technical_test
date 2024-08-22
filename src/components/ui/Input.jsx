import React from 'react'
import { ErrorMessage } from '.'

const Input = ({
  title = '',
  register,
  name = '',
  type = 'text',
  placeholder = '',
  errors,
  suffix,
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={`${
          errors?.[name] ? '!text-red-500' : ''
        }  block text-sm font-medium leading-6 text-gray-900`}>
        {title}
      </label>
      <div className="relative">
        <input
          {...register(
            name,
            type === 'number'
              ? {
                  setValueAs: (v) => (v === '' ? undefined : parseFloat(v))
                }
              : {}
          )}
          type={type}
          name={name}
          id={name}
          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkBlue-400 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          {...rest}
        />
        <div className="absolute pointer-events-none inset-y-0 right-2 flex items-center">
          {suffix}
        </div>
      </div>
      {errors[name] ? <ErrorMessage errorMessage={errors[name]?.message} /> : null}
    </div>
  )
}

export default Input
