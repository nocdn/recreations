"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import useMeasure from "react-use-measure"

type OriginRect = {
  left: number
  top: number
  width: number
  height: number
  borderRadius: string
}

type ChatBubbleProps = {
  origin?: OriginRect
  spawnId?: number
  text?: string
}

export default function ChatBubble({
  origin,
  spawnId = 0,
  text,
}: ChatBubbleProps) {
  const [isMeasured, setIsMeasured] = useState(false)
  const bubbleNodeRef = useRef<HTMLDivElement | null>(null)
  const [measureRef, bubbleBounds] = useMeasure()
  const [finalRadius, setFinalRadius] = useState<string | undefined>(undefined)

  // Reset measurement when a new bubble should spawn
  useEffect(() => {
    setIsMeasured(false)
  }, [spawnId])

  const setBubbleRef = useCallback(
    (node: HTMLDivElement | null) => {
      bubbleNodeRef.current = node
      measureRef(node)
    },
    [measureRef]
  )

  useEffect(() => {
    if (
      !isMeasured &&
      bubbleNodeRef.current &&
      bubbleBounds.width > 0 &&
      bubbleBounds.height > 0
    ) {
      const styles = window.getComputedStyle(bubbleNodeRef.current)
      setFinalRadius(styles.borderRadius || undefined)
      setIsMeasured(true)
    }
  }, [isMeasured, bubbleBounds.width, bubbleBounds.height])

  // Do not render anything until there's an origin to animate from
  if (!origin) return null

  // First pass: render an invisible measurement element in-place
  if (!isMeasured) {
    return (
      <div
        ref={setBubbleRef}
        className="px-5 py-3 bg-gray-100 rounded-xl"
        style={{ visibility: "hidden" }}
      >
        {text ?? ""}
      </div>
    )
  }

  const translateX = origin.left - bubbleBounds.left
  const translateY = origin.top - bubbleBounds.top
  const scaleX = bubbleBounds.width > 0 ? origin.width / bubbleBounds.width : 1
  const scaleY =
    bubbleBounds.height > 0 ? origin.height / bubbleBounds.height : 1

  return (
    <motion.div
      key={spawnId}
      ref={setBubbleRef}
      initial={{
        x: translateX,
        y: translateY,
        scaleX: scaleX,
        scaleY: scaleY,
        opacity: 0,
        borderRadius: origin.borderRadius,
      }}
      animate={{
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        borderRadius: finalRadius,
        opacity: 1,
      }}
      layout
      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
      style={{ transformOrigin: "left top" }}
      className="px-5 py-3 bg-gray-100 rounded-xl"
    >
      {text ?? ""}
    </motion.div>
  )
}
