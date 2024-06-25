import { Button } from "@/components/ui/button";
import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer/page";
import Link from "next/link"
export default function Home() {
  const targetDate = '2024-07-08T00:00:00';
  return (
    <main className="bg-pink h-screen">
      <div className="navbar w-screen p-4 bg-white shadow-md flex items-center justify-between  ">
        <div className="left">
          <p className="text-3xl font-bold text-pink-700">fyi</p>
        </div>
        <div className="right">
          <Button className="bg-white hover:bg-white text-pink-700 border-2 border-pink-700 cursor-default">Unveiling Soon!</Button>
        </div>
      </div>

      <div className="">
        <p className="pt-12 md:text-6xl text-4xl text-center mx-auto font-bold text-pink-500"><span className="text-pink-700">F</span>inding <span className="text-pink-700">Y</span>ou & <span className="text-pink-700">I</span></p>
        {/* <p className="text-2xl my-3 text-center mx-auto font-bold text-">In Finding You and I, we find strength.</p> */}
        <p className="py-4 md:text-8xl text-5xl text-center mx-auto font-bold text-pink-600 ">Coming Soon!</p>
        <div className="mx-auto">
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className="w-screen flex items-center">
          <Button asChild className="bg-white hover:bg-pink-600 hover:text-white text-pink-700 border-2 border-pink-700 cursor-pointer mx-auto">
            <Link href={'https://www.instagram.com/fyiorg/'} target="_blank">Follow us on Instagram for more updates</Link>
          </Button>
        </div>
      </div>
      <div className="footer w-screen absolute bottom-0  z-10 bg-white border-t-2 border-pink-700 shadow-md p-4 flex flex-col gap-6 md:flex-row justify-between">
        <div className="m-0 p-0">In Finding You and I, we find strength.</div>
        <div className="">Copyright © 2024 FYI - Finding You & I - All Rights Reserved.</div>
      </div>
    </main>
  );
}
