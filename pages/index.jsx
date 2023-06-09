import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Project from "../components/projectCard";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

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
            <h2 className="text-2xl text-customgold">Full-Stack Web Dev</h2>
          </div>

          <div className="flex flex-col ml-2">
            <a href="https://github.com/nikolamaric00">
              <AiFillGithub className="w-8 h-8 fill-customgold" />
            </a>
            <a href="https://www.linkedin.com/in/nikola-mari%C4%87-b01a05217/">
              <AiFillLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg lg:text-2xl my-4 px-2">
          Problem-solving and creativity is what excites me. Don't hesitate to
          reach out if you want to turn your awesome idea into reality or just
          say hi.
        </p>

        {/* Skills section */}
        <div className="my-4">
          <h2 className="text-2xl text-customgold">{"<skills>"}</h2>
          <ul className="px-8 text-xl">
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
      </main>
    </>
  );
}
