import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ imagePath, name, link, githubLink, techs }) => {
    return (
      <div className="flex flex-col justify-center items-center gap-5 w-auto text-center mx-5">
  
        <h2 className="text-xl uppercase font-bold border-b-2 bg-black text-white shadow-lg w-full">
          {name}
        </h2>
  
        <div className="relative  w-auto">
          <Image
            src={imagePath}
            srcSet="/images/project-1-small.png 300w, /images/project-1-large.png 450w"
            width={450}
            height={300}
            alt={`Imagen del proyecto ${name}`}
            className="rounded-xl"
            quality={50}
            priority
          />
        </div>

        <div className="h-[80px] text-center w-full text-black bg-gray-100
        rounded p-5">
          <p>{techs}</p>
        </div>
  
        <div className="flex justify-center gap-3 text-white w-full text-center text-sm">
          <Link href={link} target="blanck">
          <button className="rounded-full bg-black p-3 w-[150px] ">Visit</button>
          </Link>
          <Link href={githubLink} target="blanck">
          <button className="rounded-full bg-black p-3 w-[150px]">Github</button>
          </Link>
        </div>
      </div>
    );
  };