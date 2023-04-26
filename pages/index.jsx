import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Project from "../components/projectCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikola Marić</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col py-16 px-2 lg:px-36 2xl:px-80 ">
        {/* Portrait and headers */}
        <div className="flex items-center justify-between lg:justify-start my-4 ">
          <Image
            alt=""
            src="/portrait.svg"
            width={50}
            height={50}
            className="w-24 h-24 lg:w-32 lg:h-32 lg:mr-4 ease-in-out duration-150 hover:scale-105 hover:rotate-2"
          />
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-medium">Nikola Marić</h1>
            <h2 className="text-2xl text-customgold">Full-Stack Web Dev👨‍💻</h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg lg:text-2xl my-4 px-2">
          I have always been deeply passionate for problem-solving and exploring
          new technology. I am driven to constantly expand my skillset and
          knowledge, as I believe that this is crucial for staying ahead in this
          fast-paced and ever-evolving industry.
        </p>

        {/* Skills section */}
        <div className="my-4">
          <h2 className="text-2xl text-customgold">{"<skills>"}</h2>
          <ul className="px-8">
            <li>HTML</li>
            <li>CSS</li>
            <li>TailwindCSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Git</li>
            <li>Firebase</li>
            <li>Figma</li>
          </ul>
          <h2 className="text-2xl text-customgold">{"</skills>"}</h2>
        </div>

        {/* Projects section */}
        <h2 className="text-2xl text-customgold">{"<projects>"}</h2>
        <div className="w-full px-8">
          <Project
            img={"/screenshot.webp"}
            name="Trading app"
            description="A stock and crypto trading platform I was hired to build. I was responsible for UI/UX, bulding the frontend and part of the backend."
            stack="React TailwindCSS Node Express MongoDB"
            code=""
            link=""
          />
        </div>
        <h2 className="text-2xl text-customgold">{"</projects>"}</h2>
      </main>
    </>
  );
}
