import {
  ExternalLink,
  Folder,
  Image,
  LinkIcon,
  Presentation,
  Video,
} from "lucide-react";
import { type IFiles } from "../data/files";
import { type IUsers } from "../data/users";
import { timeAgo } from "../utils";

interface Props {
  result: (IUsers | IFiles)[];
  loading?: boolean;
}

const Data = ({ result, loading }: Props) => {
  if (loading) {
    return (
      <>
        <div className="w-full py-4 pt-6 mx-auto rounded-md">
          <div className="flex space-x-4 animate-pulse">
            <div className="bg-gray-200 rounded-md size-10"></div>
            <div className="flex-1 py-1 space-y-3">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-4 mx-auto rounded-md">
          <div className="flex space-x-4 animate-pulse">
            <div className="bg-gray-200 rounded-md size-10"></div>
            <div className="flex-1 py-1 space-y-3">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-4 mx-auto rounded-md">
          <div className="flex space-x-4 animate-pulse">
            <div className="bg-gray-200 rounded-md size-10"></div>
            <div className="flex-1 py-1 space-y-3">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-4 mx-auto rounded-md">
          <div className="flex space-x-4 animate-pulse">
            <div className="bg-gray-200 rounded-md size-10"></div>
            <div className="flex-1 py-1 space-y-3">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="h-auto mt-2 overflow-auto max-h-80">
      {result.map((i) => {
        return i.kind === "user" ? (
          <div className="flex items-center px-2 py-4 border-b border-gray-100 rounded-lg group hover:bg-gray-100">
            <img src={i.profilePic} alt="" className="mr-4 rounded-lg size-8" />
            <div>
              <p className="font-medium text-black">{i.name}</p>
              <p className="text-sm text-gray-400">
                {i.lastActive &&
                  `Active ${timeAgo(new Date(i.lastActive))} ago`}
              </p>
            </div>
            <div className="items-center hidden ml-auto group-hover:flex *:cursor-pointer ">
              <div className="p-1 rounded-sm hover:bg-gray-100">
                <LinkIcon className="size-4" />
              </div>
              <a
                className="flex items-center *:opacity-80 *:hover:opacity-100"
                target="_blank"
                href="https://getdots.in/"
              >
                <ExternalLink className="ml-4 size-4" />
                <p className="ml-1">New Tab</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="flex items-center px-2 py-4 border-b border-gray-100 rounded-lg group hover:bg-gray-100">
            <div className="flex items-center justify-center mr-4 bg-gray-200 rounded-lg size-8 ">
              <div>
                {getIconFromType({ type: i.type, classNames: "size-4" })}
              </div>
            </div>
            <div className="text-gray-900 ">
              <span className="font-medium text-gray-900">{i.name}</span>
              {i.filesInside && (
                <span className="px-1 ml-2 text-sm bg-gray-300 rounded-md opacity-40">
                  {i.filesInside} files
                </span>
              )}
              {i.extension && <span>.{i.extension}</span>}
              <div className="flex items-center gap-1">
                {i.parentFolder && (
                  <>
                    <p className="text-sm text-gray-400 ">{i.parentFolder}</p>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </>
                )}

                <p className="text-sm text-gray-400">
                  {i.updatedAt
                    ? `Edited ${timeAgo(new Date(i.updatedAt))} ago`
                    : `Added at ${timeAgo(new Date(i.createdAt))}`}
                </p>
              </div>
            </div>
            <div className="items-center hidden ml-auto group-hover:flex *:cursor-pointer ">
              <div className="p-1 rounded-sm hover:bg-gray-100">
                <LinkIcon className="size-4" />
              </div>
              <a
                className="flex items-center *:opacity-80 *:hover:opacity-100"
                target="_blank"
                href="https://getdots.in/"
              >
                <ExternalLink className="ml-4 size-4" />
                <p className="ml-1">New Tab</p>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Data;

export function getIconFromType(payload: { type: string; classNames: string }) {
  const { type, classNames } = payload;

  switch (type) {
    case "folder":
      return <Folder className={classNames} />;
    case "presentation":
      return <Presentation className={classNames} />;
    case "video":
      return <Video className={classNames} />;
    case "image":
      return <Image className={classNames} />;
    default:
      return null;
  }
}
