import { useEffect, useReducer } from 'react'

const useScrollPosition = (minDiff: number = 80): [number, number] => {
    const reducer = ([olda, oldb]: [number, number], newa: number): [number, number] => {
        return Math.abs(olda - newa) > minDiff ? [newa, olda - newa] : [olda, oldb]
    }
    const [[scrollY, diff], setScroll] = useReducer(reducer, [0, 0])
    useEffect(() => {
        const updatePosition = (): void => {
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', updatePosition)
        setScroll(window.scrollY)
        return () => window.removeEventListener('scroll', updatePosition)
    }, [])
    return [scrollY, diff]
}

export default useScrollPosition
