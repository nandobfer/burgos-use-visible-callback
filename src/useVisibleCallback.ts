import { useRef, useEffect } from "react"

export interface VisibleCallbackptions {
    no_observe?: boolean
    root?: Element | Document
    threshold?: number | number[]
}

export const useVisibleCallback = (callback: () => void, options: VisibleCallbackptions) => {
    const ref = useRef(null)

    useEffect(() => {
        console.log(options.no_observe)
        if (!options.no_observe) {
            const observer = new IntersectionObserver(
                async (entries) => {
                    const [entry] = entries
                    if (entry.isIntersecting) {
                        // ? trigger the callback when the component attached to the ref is visible on the viewport.
                        callback()
                        observer.unobserve(entry.target) // Stop observing since image is fetched
                    }
                },
                {
                    root: options.root || null, // Use the viewport as the root
                    threshold: options.threshold || 0.1, // 10% of the product should be visible
                }
            )

            if (ref.current) {
                observer.observe(ref.current)
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current)
                }
            }
        }
    }, [ref])

    return ref
}
