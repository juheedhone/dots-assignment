import { Search } from "lucide-react";
import { motion } from "motion/react";

const App = () => {
  return (
    <motion.div className="bg-white rounded-2xl shadow-lg flex p-6 sm:w-4/5 md:w-3/4 w-full">
      <Search className="text-gray-300" />
      <input
        type="text"
        placeholder="Searching is easier"
        className="outline-0 pl-2 flex-1"
      />
      <div className="text-gray-400 border border-gray-300 px-2 rounded-lg  md:block hidden">
        s
      </div>
      <p className="text-gray-400 pl-4 md:block hidden">quick access</p>
    </motion.div>
  );
};

export default App;
