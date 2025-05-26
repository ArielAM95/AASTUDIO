
"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const websiteExamples = [
  {
    title: "ענבל טיפוח ויופי",
    url: "https://preview--inbal-touch-design.lovable.app/",
    category: "דף נחיתה",
    image: "https://picsum.photos/400/600?beauty"
  },
  {
    title: "אתר עסקי מקצועי",
    url: "#",
    category: "אתר עסקי",
    image: "https://picsum.photos/400/600?business"
  },
  {
    title: "דף נחיתה למכירות",
    url: "#",
    category: "דף נחיתה",
    image: "https://picsum.photos/400/600?sales"
  },
  {
    title: "אתר תיק עבודות",
    url: "#",
    category: "תיק עבודות",
    image: "https://picsum.photos/400/600?portfolio"
  },
  {
    title: "אתר מסעדה",
    url: "#",
    category: "אתר עסקי",
    image: "https://picsum.photos/400/600?restaurant"
  },
  {
    title: "דף נחיתה לאירועים",
    url: "#",
    category: "דף נחיתה",
    image: "https://picsum.photos/400/600?events"
  }
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    handleClick,
    controls,
    examples,
    isCarouselActive,
  }: {
    handleClick: (example: any, index: number) => void
    controls: any
    examples: any[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = examples.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {examples.map((example, i) => (
            <motion.div
              key={`key-${example.title}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-white shadow-lg p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(example, i)}
            >
              <div className="relative w-full h-full">
                <motion.img
                  src={example.image}
                  alt={example.title}
                  layoutId={`img-${example.title}`}
                  className="pointer-events-none w-full h-full rounded-lg object-cover"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
                  <span className="inline-block bg-custom-purple text-white text-xs px-2 py-1 rounded-full mb-1">
                    {example.category}
                  </span>
                  <h3 className="text-white text-sm font-bold">{example.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

function ThreeDPhotoCarousel() {
  const [activeExample, setActiveExample] = useState<any>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const examples = useMemo(() => websiteExamples, [])

  useEffect(() => {
    console.log("Website examples loaded:", examples)
  }, [examples])

  const handleClick = (example: any) => {
    setActiveExample(example)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveExample(null)
    setIsCarouselActive(true)
  }

  const handleViewSite = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeExample?.url && activeExample.url !== "#") {
      window.open(activeExample.url, "_blank")
    }
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeExample && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeExample.title}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-5"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <motion.img
                layoutId={`img-${activeExample.title}`}
                src={activeExample.image}
                className="w-full h-48 object-cover rounded-lg mb-4"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  willChange: "transform",
                }}
              />
              <div className="mb-3">
                <span className="inline-block bg-custom-purple text-white text-xs px-2 py-1 rounded-full mb-2">
                  {activeExample.category}
                </span>
                <h3 className="text-lg font-bold text-custom-purple mb-2">{activeExample.title}</h3>
              </div>
              <div className="flex gap-2">
                {activeExample.url !== "#" && (
                  <button
                    onClick={handleViewSite}
                    className="bg-custom-purple text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 transition-colors"
                  >
                    צפה באתר
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors"
                >
                  סגור
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          examples={examples}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
