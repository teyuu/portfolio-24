import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  imagePath,
  projectName,
  link,
  githubLink,
  techs,
  mobileApp,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-auto text-center mx-5">
      <h2 className="text-xl uppercase font-bold border-b-2 bg-black text-white shadow-lg w-full dark:bg-gray-800 dark:rounded-lg py-2">
        {projectName}
      </h2>

      <div className="relative  w-auto">
        <Image
          src={imagePath}
          srcSet="/images/project-1-small.png 300w, /images/project-1-large.png 450w"
          width={450}
          height={300}
          alt={`Imagen del proyecto ${name}`}
          className="rounded-xl lg:h-[300px]"
          quality={50}
          priority
        />
      </div>

      <div
        className="h-[90px] text-center w-full text-black bg-gray-100
        rounded p-5 dark:bg-gray-800 dark:text-white"
      >
        <p>{techs}</p>
      </div>

      <div className="flex justify-center gap-3 text-white w-full text-center text-sm">
        {!mobileApp && (
        <Link href={link} target="blanck">
          <Button className="w-[150px] dark:bg-gray-600 dark:text-white ">
            Visit
          </Button>
        </Link>
        )}
          <Link href={githubLink} target="blanck">
            <Button className="w-[150px] dark:bg-gray-600 dark:text-white">
              Github
            </Button>
          </Link>
      </div>
    </div>
  );
};
