import { Search } from "lucide-react";
import { motion } from "motion/react";

const App = () => {
  return (
    <motion.div className="bg-white rounded-2xl shadow-lg flex p-6">
      <Search className="text-gray-300" />
      <input
        type="text"
        placeholder="Searching is easier"
        className="outline-0 pl-2 w-xl"
      />
      <div className="text-gray-400 ">s</div>
      <p className="text-gray-400 pl-4">quick access</p>
    </motion.div>
  );
};

export default App;
