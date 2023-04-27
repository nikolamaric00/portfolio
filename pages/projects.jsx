import Project from "../components/projectCard";

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col py-20 px-2 lg:px-36 2xl:px-80">
      <h2 className="text-2xl text-customgold">{"<projects>"}</h2>
      <div className="w-full px-8">
        <Project
          img={"/screenshot.webp"}
          name="Trading app"
          description="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."
          stack="React TailwindCSS Node Express MongoDB"
          code=""
          link=""
        />
      </div>
      <h2 className="text-2xl text-customgold">{"</projects>"}</h2>
    </main>
  );
}
