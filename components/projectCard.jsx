import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";

export default function Card({ img, name, description, stack, code, link }) {
  return (
    <div className="p-4 my-8 shadow-md rounded-3xl md:flex md:w-3/4">
      <Image
        src={img}
        width={200}
        height={100}
        className="w-full md:w-3/5  md:mx-2 rounded-3xl"
        alt="App screenshot/concept"
      />
      <div className="flex flex-col justify-between 2xl:py-16">
        <h3 className="font-medium text-2xl">{name}</h3>
        <p>{description}</p>
        <p className="font-normal text-lg my-2">{stack}</p>
        <div className="flex w-full justify-evenly">
          <a href={code} className="flex items-center linkButton">
            View Code <AiFillGithub className="ml-1" />
          </a>
          <a href={link} className="flex items-center linkButton">
            Live Demo <RxExternalLink className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
