import { useEffect } from 'react'

function useOutsideAlert(ref, setX) {
  useEffect(() => {
    // Detect if User Click outside the content
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setX(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // remove listener
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setX])
}
export default useOutsideAlert
