import { Paperclip, Search, Settings, User } from "lucide-react";
import { motion } from "motion/react";
import Data from "./components/Data";

const App = () => {
  return (
    <motion.div className="bg-white rounded-2xl shadow-lg p-6 sm:w-4/5 md:w-3/4 w-full">
      <div className="flex">
        <Search className="" />
        <input
          type="text"
          placeholder="Searching is easier"
          className="outline-0 pl-2 flex-1 text-gray-800"
        />
        <div className=" border border-gray-300 px-2 rounded-lg  md:block hidden">
          s
        </div>
        <p className="pl-2 md:block hidden">quick access</p>
      </div>
      <div className="flex items-center mt-6">
        <div className="flex items-center">
          <p className="mr-2">All</p>
          <p>0</p>
        </div>
        <div className="flex items-center">
          <Paperclip className="size-4 ml-4" />
          <p className="ml-1 mr-2">Files</p>
          <p>0</p>
        </div>
        <div className="flex flex-1 items-center">
          <User className="size-4 ml-4" />
          <p className="ml-1 mr-2">People</p>
          <p>0</p>
        </div>
        <button className="cursor-pointer">
          <Settings />
        </button>
      </div>
      <Data />
    </motion.div>
  );
};

export default App;
