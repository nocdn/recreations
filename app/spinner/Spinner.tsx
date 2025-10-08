const bars = Array(12).fill(0)

export function Spinner({
  color,
  size = 20,
}: {
  color: string
  size?: number
}) {
  return (
    <div
      className="h-[var(--spinner-size,20px)] w-[var(--spinner-size,20px)]"
      style={
        {
          "--spinner-size": `${size}px`,
          "--spinner-color": color,
        } as React.CSSProperties
      }
    >
      <div className="relative top-1/2 left-1/2 h-[var(--spinner-size,20px)] w-[var(--spinner-size,20px)]">
        {bars.map((_, i) => {
          const angle = i * 30
          const delay = -1.2 + i * 0.1
          return (
            <div
              key={`spinner-bar-${i}`}
              className="absolute h-[8%] w-[24%] left-[-10%] top-[-3.9%] rounded-[6px] bg-[var(--spinner-color)] animate-[spinner-fade_1.2s_linear_infinite]"
              style={
                {
                  transform: `rotate(${angle}deg) translate(146%)`,
                  animationDelay: `${delay}s`,
                } as React.CSSProperties
              }
            />
          )
        })}
      </div>
      <style>{`@keyframes spinner-fade { 0% { opacity: 1; } 100% { opacity: 0.15; } }`}</style>
    </div>
  )
}
