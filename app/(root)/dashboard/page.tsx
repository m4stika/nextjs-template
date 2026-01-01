import Image from "next/image";
import dasboardImage from "@/public/images/sigap-bg.png"

export default function DashboardPage() {

  return (
    <main className="flex flex-1 flex-col items-center relative p-4 ">
      <div className="inset-0 absolute">
        <Image
          src={dasboardImage}
          alt="dasboardLogo"
          placeholder="blur"
          quality={100}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
    </main>
  )
}
