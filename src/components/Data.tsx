import { Folder, Image, Presentation, Video } from "lucide-react";
import { type IFiles } from "../data/files";
import { type IUsers } from "../data/users";
import { timeAgo } from "../utils";

interface Props {
  result: (IUsers | IFiles)[];
  loading?: boolean;
}

const Data = ({ result, loading }: Props) => {
  if (loading) {
    return <div className="w-full h-5 bg-gray-400 animate-pulse"></div>;
  }

  return (
    <div className="h-auto overflow-auto max-h-80">
      {result.map((i) => {
        return i.kind === "user" ? (
          <div className="flex items-center py-4 border-b border-gray-100">
            <img src={i.profilePic} alt="" className="mr-4 rounded-lg size-8" />
            <div>
              <p className="font-medium text-black">{i.name}</p>
              <p>{i.lastActive}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center py-4 border-b border-gray-100">
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
              {i.parentFolder && <p className="opacity-40">{i.parentFolder}</p>}
              {i.updatedAt
                ? `Edited ${timeAgo(new Date(i.updatedAt))} ago`
                : `Added at ${timeAgo(new Date(i.createdAt))}`}
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
