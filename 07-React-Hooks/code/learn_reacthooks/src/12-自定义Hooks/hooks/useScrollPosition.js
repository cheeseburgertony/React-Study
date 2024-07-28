import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollX, window.scrollY);
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return [scrollX, scrollY]
}

export default useScrollPosition