import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ProjectLinkButton({
  Hover,
  unHover,
  Hovered,
  title,
  link,
  frame,
  more,
}: {
  Hover: () => void;
  unHover: () => void;
  Hovered: boolean;
  title: string;
  link: string;
  frame?: string;
  more?: boolean;
}) {
  return (
    <Link
      href={link}
      onMouseEnter={Hover}
      onMouseLeave={unHover}
      className="w-fit h-fit"
    >
      <div className="flex items-center">
        <span
          className={`${
            Hovered ? "w-5 mr-2" : "w-0 mr-0"
          } overflow-hidden transall`}
        >
          {more ? (
            <PlusIcon className={`text-dark-0 h-5 w-5 stroke-[4px] `} />
          ) : (
            <ArrowUpRightIcon className={`text-dark-0 h-5 w-5 stroke-2 `} />
          )}
        </span>
        <h4
          className={`font-bold text-4xl w-fit ${
            Hovered ? "text-dark-0" : "text-dark-2"
          }`}
        >
          {title}
        </h4>
      </div>
      <span
        className={`${
          Hovered ? "w-full" : "w-0"
        } h-[3px] bg-dark-3 block transall`}
      />
    </Link>
  );
}
