"use client"

import { useCallback, useRef, useState } from "react"
import ChatBubble from "./ChatBubble"
import useMeasure from "react-use-measure"

type OriginRect = {
  left: number
  top: number
  width: number
  height: number
  borderRadius: string
}

export default function ChatBubblePage() {
  const [messages, setMessages] = useState<{
    id: number
    text: string
    origin: OriginRect
  }>([])
  const [value, setValue] = useState("")
  const nextIdRef = useRef(0)

  const inputElRef = useRef<HTMLInputElement | null>(null)
  const [measureRef, inputBounds] = useMeasure()

  const setInputRef = useCallback(
    (node: HTMLInputElement | null) => {
      inputElRef.current = node
      measureRef(node)
    },
    [measureRef]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return
      const el = inputElRef.current
      if (!el) return
      const trimmed = value.trim()
      if (!trimmed) return
      const rect = el.getBoundingClientRect()
      const styles = window.getComputedStyle(el)
      const radius = styles.borderRadius || "12px"
      const origin: OriginRect = {
        left: inputBounds.left || rect.left,
        top: inputBounds.top || rect.top,
        width: inputBounds.width || rect.width,
        height: inputBounds.height || rect.height,
        borderRadius: radius,
      }
      const id = ++nextIdRef.current
      setMessages((prev) => [...prev, { id, text: trimmed, origin }])
      setValue("")
      // keep focus for quick subsequent messages
      el.focus()
    },
    [
      inputBounds.height,
      inputBounds.left,
      inputBounds.top,
      inputBounds.width,
      value,
    ]
  )

  return (
    <div className="w-screen h-dvh flex flex-col items-end justify-end p-12">
      <div className="w-full flex flex-col items-end gap-2">
        {messages.map((m) => (
          <ChatBubble key={m.id} origin={m.origin} text={m.text} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <input
          ref={setInputRef}
          onKeyDown={handleKeyDown}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="w-96 mt-24 px-4 py-2 rounded-xl bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200"
          placeholder="Type your message here..."
        />
      </div>
    </div>
  )
}
