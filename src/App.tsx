import {
  List,
  LoaderCircle,
  MessageCircle,
  Paperclip,
  Search,
  Settings,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Data from "./components/Data";
import { ToggleButton } from "./components/ToggleButton";
import useSearch from "./hooks/useSearch";
import { cn, shuffleArray } from "./utils";

const App = () => {
  const [input, setInput] = useState("");
  const { result, loading } = useSearch(input);
  const isSearching = input.length > 0;
  const [openSettings, setOpenSettings] = useState(false);
  const [activeCategory, setActiveCategory] = useState(["file", "user"]);

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleToggleCategory = (
    category: "user" | "file" | "chat" | "list"
  ) => {
    if (activeCategory.includes(category)) {
      setActiveCategory(activeCategory.filter((c) => c !== category));
    } else {
      setActiveCategory([...activeCategory, category]);
    }
  };

  const totalResults =
    (result.files?.length || 0) + (result.users?.length || 0);
  const fileCount = result.files?.length || 0;
  const userCount = result.users?.length || 0;

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
            <div className="flex items-center mt-6 ">
              <div className="flex items-center border-b-2 border-b-black">
                <p className="mr-2 font-semibold text-black">All</p>
                <p>{totalResults}</p>
              </div>
              <div className="flex items-center">
                <Paperclip className="ml-4 size-4" />
                <p className="ml-1 mr-2">Files</p>
                <p>{fileCount}</p>
              </div>
              <div className="flex items-center flex-1">
                <User className="ml-4 size-4" />
                <p className="ml-1 mr-2">People</p>
                <p>{userCount}</p>
              </div>
              <button
                className={cn(
                  "relative cursor-pointer transition",
                  openSettings ? "rotate-90" : "rotate-0"
                )}
                onClick={() => setOpenSettings((prev) => !prev)}
              >
                <Settings />
              </button>
              <AnimatePresence>
                {openSettings && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg top-[20.5rem] right-[10rem] w-52"
                  >
                    <ul className="flex flex-col p-2 text-sm text-gray-700">
                      <li className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                          <Paperclip className="mr-2 size-4" />
                          Files
                        </div>

                        <ToggleButton
                          isToggled={activeCategory.includes("file")}
                          onToggle={() => handleToggleCategory("file")}
                        />
                      </li>

                      {/* People */}
                      <li className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                          <User className="mr-2 size-4" />
                          People
                        </div>
                        <ToggleButton
                          isToggled={activeCategory.includes("user")}
                          onToggle={() => handleToggleCategory("user")}
                        />
                      </li>

                      {/* Chats (disabled) */}
                      <li className="flex items-center justify-between p-2 text-gray-400 rounded cursor-not-allowed">
                        <div className="flex items-center">
                          <MessageCircle className="mr-2 size-4" />
                          Chats
                        </div>
                        <ToggleButton
                          isToggled={activeCategory.includes("chat")}
                          onToggle={() => handleToggleCategory("chat")}
                        />
                      </li>

                      {/* Lists (disabled) */}
                      <li className="flex items-center justify-between p-2 text-gray-400 rounded cursor-not-allowed">
                        <div className="flex items-center">
                          <List className="mr-2 size-4" />
                          Lists
                        </div>
                        <ToggleButton
                          isToggled={activeCategory.includes("list")}
                          onToggle={() => handleToggleCategory("list")}
                        />
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Data
              result={shuffleArray([...result.files, ...result.users])}
              loading={loading}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default App;
