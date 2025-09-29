import Link from "next/link"

export default function Home() {
  return (
    <div className="font-mono p-12 flex flex-col gap-2">
      <p className="font-semibold font-sf">recreations</p>
      <p className="text-gray-500/80 font-medium w-96">
        these are components from all across the web which I tried to recreate
        for practice
      </p>
      <ul className="mt-6">
        <Link href="/traffic-lights" className="underline">
          iPadOS Traffic Lights
        </Link>
      </ul>
    </div>
  )
}
