import { LoaderCircle, Search, Settings } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Data from "./components/Data";
import SettingsPanel from "./components/SettingsPanel";
import useSearch from "./hooks/useSearch";
import type { ICategory } from "./models/category";
import { getCategoryIcon } from "./renderUtils";
import { cn, shuffleArray } from "./utils";

const App = () => {
  const [input, setInput] = useState("");
  const { result, loading } = useSearch(input);
  console.log("🚀 ~ App ~ result:", result);
  const isSearching = input.length > 0;
  const [openSettings, setOpenSettings] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ICategory[]>([
    "file",
    "people",
  ]);

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleToggleCategory = (category: ICategory) => {
    if (activeCategory.includes(category)) {
      setActiveCategory(activeCategory.filter((c) => c !== category));
    } else {
      setActiveCategory([...activeCategory, category]);
    }
  };

  const totalResults =
    (result.file?.length || 0) + (result.people?.length || 0);

  return (
    <motion.div
      className="w-full p-6 bg-white shadow-lg rounded-2xl sm:w-4/5 md:w-3/4 max-h-[30rem]"
      initial={false}
      animate={{
        minHeight: isSearching ? "30rem" : "5rem",
      }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="flex">
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <Search className="" />
        )}
        <input
          type="text"
          value={input}
          placeholder="Searching is easier"
          className="flex-1 pl-2 text-xl font-medium text-gray-800 text- outline-0"
          onChange={(e) => handleChange(e.target.value)}
        />
        {isSearching ? (
          <button
            className="text-black underline cursor-pointer"
            onClick={handleClear}
          >
            Clear
          </button>
        ) : (
          <>
            <div className="hidden px-2 border border-gray-300 rounded-lg md:block">
              s
            </div>
            <p className="hidden pl-2 md:block">quick access</p>
          </>
        )}
      </div>

      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.2, delay: 0.2 },
              height: { duration: 0.5, ease: "easeInOut" },
            }}
            style={{ overflow: "hidden" }}
          >
            <div className="relative flex items-center mt-6">
              <div className="flex items-center px-1 pb-2 mx-2 border-b-2 border-b-black">
                <p className="mr-2 font-semibold text-black">All</p>
                <p>{totalResults}</p>
              </div>
              {activeCategory.map((cat) => (
                <div key={cat} className="flex items-center px-1 pb-2 mx-2">
                  {getCategoryIcon({
                    category: cat,
                    className: "mr-2 size-4",
                  })}
                  <p className="mr-2 font-semibold text-black">
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </p>
                  <p>{result[cat as "people" | "file"]?.length}</p>
                </div>
              ))}

              <button
                className={cn(
                  "cursor-pointer transition ml-auto",
                  openSettings ? "rotate-90" : "rotate-0"
                )}
                onClick={() => setOpenSettings((prev) => !prev)}
              >
                <Settings />
              </button>

              <SettingsPanel
                activeCategory={activeCategory}
                openSettings={openSettings}
                handleToggleCategory={handleToggleCategory}
              />
            </div>
            <Data
              result={shuffleArray([...result.file, ...result.people])}
              loading={loading}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default App;
