"use client";
import Herosection from "./components/Herosection";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import CallToAction from "./components/CallToAction";
import  Reveal  from "./components/Reveal";
import RevealFadeUp from "./components/RevealFadeUp";
import RevealSlideLeft from "./components/RevealSlideLeft";
import RevealSlideRight from "./components/RevealSlideRight";
export default function Home() {

  return (
    <div>
     <Reveal>
      <Herosection />
      </Reveal>
      {/* Page 2: Key Features Section */}
      <Reveal>
      <div id="key-feature" className="mt-5 pt-5 h-auto bg-primary text-primary-foreground p-8 ] ">
        <div className="bg-white/0 backdrop-blur-md rounded-lg p-6 shadow-lg">
          <h2 className="
          text-3xl font-bold mb-4 text-center 
          ">Key Features</h2>
        </div>

        <div className="flex flex-col md:grid grid-cols-2 grid-rows-2 gap-10 p-2 mt-4 m-2">
        <RevealSlideLeft>
          <div className="transform transition duration-500 hover:scale-110 hover:z-20">
            <Card
              className={
                "bg-white/0 backdrop-blur-md rounded-lg  shadow-lg text-primary-foreground font-semibold"
              }
            >
              <CardHeader>
               <div className="icon">
                <Image
                  src="/shoes.png"
                  alt="Shoe Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
               </div>
                  
                <CardTitle className={" text-center"}>
                  Ultimate Comfort.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Every step is a new experience. Our shoes are engineered with
                  a cushioned insole and a shock-absorbing sole, providing
                  all-day comfort without compromising on style. Walk, run, or
                  stand—your feet will thank you.
                </p>
              </CardContent>
            </Card>
          </div>
          </RevealSlideLeft>
         <RevealSlideRight>
          <div className="transform transition duration-500 hover:scale-110 hover:z-20">
            <Card
              className={
                "bg-white/0 backdrop-blur-md rounded-lg  shadow-lg text-primary-foreground font-semibold"
              }
            >
              <div className="icon">
                <Image
                  src="/sneakers.png"
                  alt="Shoe Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
               </div>
              <CardHeader>
                <CardTitle className={"text-center"}>Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Crafted with meticulous attention to detail. From the finest
                  leather to durable synthetic blends, every material is
                  handpicked to ensure longevity and a luxurious feel. Our
                  commitment to quality means your shoes will not only look
                  great but last for years.
                </p>
              </CardContent>
            </Card>
          </div>
</RevealSlideRight>
<RevealSlideLeft>
          <div className="transform transition duration-500 hover:scale-110 hover:z-20">
            <Card
              className={
                "bg-white/0 backdrop-blur-md rounded-lg shadow-lg text-primary-foreground font-semibold"
              }
            >
              <div className="icon">
                <Image
                  src="/running-shoe.png"
                  alt="Shoe Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
               </div>
              <CardHeader>
                <CardTitle className={"text-center"}>
                  Featherlight Feel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Say goodbye to heavy footwear. We&apos;ve used advanced,
                  lightweight materials to craft shoes that feel like you&apos;re
                  walking on air. The perfect blend of durability and comfort,
                  so you can move freely and effortlessly.
                </p>
              </CardContent>
            </Card>
          </div>

</RevealSlideLeft>
<RevealSlideRight>
          <div className="transform transition duration-500 hover:scale-110 hover:z-20">
            <Card
              className={
                "bg-white/0 backdrop-blur-md rounded-lg shadow-lg text-primary-foreground font-semibold"
              }
            >
              <div className="icon">
                <Image
                  src="/boot.png"
                  alt="Shoe Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
               </div>
              <CardHeader>
                <CardTitle className={"text-center"}>Weatherproof</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Don&apos;t let the weather dictate your style. Our water-resistant
                  coating protects your shoes from rain and spills, ensuring
                  they stay clean and dry. Step out with confidence, no matter
                  the forecast.
                </p>
              </CardContent>
            </Card>
          </div>
</RevealSlideRight>

        </div>
      </div>
      </Reveal>
      <div className="w-full h-px bg-primary-foreground my-8 opacity-30"></div>
      
     <RevealFadeUp>
      <CallToAction />
      </RevealFadeUp>
    </div>
  );
}
