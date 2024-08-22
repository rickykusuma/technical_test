import useOutsideAlert from 'Hooks/useOutsideAlert'
import React, { useRef, useState } from 'react'

const Dropdown = ({ button, children, classNames, animation }) => {
  const ref = useRef(null)
  const [openDropdown, setOpenDropdown] = useState(false)
  useOutsideAlert(ref, setOpenDropdown)
  return (
    <div ref={ref} className="relative flex">
      <div className="flex" onMouseDown={() => setOpenDropdown(!openDropdown)}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation ? animation : 'origin-top-right transition-all duration-300 ease-in-out'
        } ${openDropdown ? 'scale-100' : 'scale-0'}`}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown
