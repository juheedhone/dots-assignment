import { files, type IFiles } from "../data/files";
import { users, type IUsers } from "../data/users";

interface Props {
  result: IUsers | IFiles;
}

const Data = () => {
  return (
    <div className="">
      {users.slice(0, 6).map((u) => (
        <div className="flex items-center py-4 border-b border-gray-100">
          <img src={u.profilePic} alt="" className="size-8 mr-4 rounded-lg" />
          <div>
            <p className="text-black font-medium">{u.name}</p>
            <p>{u.lastActive}</p>
          </div>
        </div>
      ))}

      {files.slice(0, 6).map((f) => (
        <div className="flex items-center py-4 border-b border-gray-100">
          <div className="size-8 mr-4 bg-gray-200 rounded-lg flex items-center justify-center ">
            <div>{getIconFromType({ type: f.type, classNames: "size-4" })}</div>
          </div>
          <div className=" text-gray-900">
            <span className="text-gray-900 font-medium">{f.name}</span>
            {f.filesInside && (
              <span className="ml-2 opacity-40 text-sm bg-gray-300 px-1 rounded-md">
                {f.filesInside} files
              </span>
            )}
            {f.extension && <span>.{f.extension}</span>}
            {f.parentFolder && <p className="opacity-40">{f.parentFolder}</p>}
            {f.updatedAt
              ? `Edited ${timeAgo(new Date(f.updatedAt))} ago`
              : `Added at ${timeAgo(new Date(f.createdAt))}`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;

import { Folder, Image, Presentation, Video } from "lucide-react";
import { timeAgo } from "../utils";

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
