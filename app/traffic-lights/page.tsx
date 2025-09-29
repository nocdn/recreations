"use client"
import { useState } from "react"
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import { Triangle } from "lucide-react"

export default function TrafficLightsPage() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      id="container"
      onMouseEnter={() => {
        setExpanded(true)
      }}
      onMouseLeave={() => {
        setExpanded(false)
      }}
      className={`w-fit flex gap-1 bg-white shadow-sm p-2 rounded-full`}
    >
      <MotionConfig transition={{ duration: 0.4, type: "spring" }}>
        <motion.div
          layout
          className="rounded-full flex items-start"
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: expanded ? "#FF0C19" : "#E07365",
            height: expanded ? "25px" : "10px",
            width: expanded ? "25px" : "10px",
            margin: expanded ? "2px 4px 2px 2px" : "0",
          }}
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="w-full h-full grid place-content-center relative"
              >
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  animate={{ width: expanded ? "8px" : "2px" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#66040A] h-[1.35px] rounded-full rotate-45"
                />
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  animate={{ width: expanded ? "8px" : "2px" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#66040A] h-[1.35px] rounded-full rotate-135"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout
          className="rounded-full"
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: expanded ? "#FEC901" : "#EEC161",
            height: expanded ? "25px" : "10px",
            width: expanded ? "25px" : "10px",
            margin: expanded ? "2px 0 2px 0" : "0",
          }}
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="w-full h-full grid place-content-center"
              >
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  animate={{ width: expanded ? "8px" : "2px" }}
                  className="bg-[#655000] h-[1.35px] rounded-full"
                ></motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout
          className="rounded-full flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
          animate={{
            backgroundColor: expanded ? "#00CA47" : "#79C360",
            height: expanded ? "25px" : "10px",
            width: expanded ? "25px" : "10px",
            margin: expanded ? "2px 2px 2px 4px" : "0",
          }}
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0, scale: 0.7 }}
                className="flex flex-col items-center justify-center -rotate-45 -space-y-[1.2px]"
              >
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  initial={{ scale: 0.7, translateY: "2px" }}
                  animate={{
                    width: expanded ? "8px" : "4px",
                    scale: 1,
                    translateY: 0,
                  }}
                  className="flex items-center justify-center"
                >
                  <Triangle
                    stroke="#02812E"
                    size={7}
                    fill="#02812E"
                    className="block scale-y-70"
                  />
                </motion.div>
                <motion.div
                  transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
                  initial={{ scale: 0.7, translateY: "2px" }}
                  animate={{
                    width: expanded ? "8px" : "2px",
                    scale: 1,
                    translateY: 0,
                  }}
                  className="flex items-center justify-center rotate-180"
                >
                  <Triangle
                    stroke="#02812E"
                    size={7}
                    fill="#02812E"
                    className="block scale-y-70"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </MotionConfig>
    </div>
  )
}
