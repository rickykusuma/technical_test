const Checkbox = ({ extra, register = () => {}, name, ...rest }) => {
  return (
    <input
      type="checkbox"
      className={`defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
        justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
        checked:border-none checked:text-white hover:cursor-pointer dark:border-gray-400 checked:bg-darkBlue-500 dark:checked:bg-darkBlue-400 ${extra}`}
      name={name}
      {...register(name)}
      {...rest}
    />
  )
}

export default Checkbox
