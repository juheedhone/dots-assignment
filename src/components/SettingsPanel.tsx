import { List, MessageCircle, Paperclip, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { ICategory } from "../models/category";
import { cn } from "../utils";
import { ToggleButton } from "./ToggleButton";

interface Props {
  openSettings: boolean;
  activeCategory: ICategory[];
  handleToggleCategory: (category: ICategory) => void;
}
const SettingsPanel = ({
  openSettings,
  activeCategory,
  handleToggleCategory,
}: Props) => {
  return (
    <AnimatePresence>
      {openSettings && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-52 top-6"
        >
          <ul className="flex flex-col p-2 text-sm text-gray-700">
            <li
              className={cn(
                "flex items-center justify-between p-2 rounded cursor-not-allowed transition-all",
                !activeCategory.includes("file") ? "text-gray-400" : ""
              )}
            >
              <div className="flex items-center">
                <Paperclip className="mr-2 size-4" />
                Files
              </div>

              <ToggleButton
                isToggled={activeCategory.includes("file")}
                onToggle={() => handleToggleCategory("file")}
              />
            </li>

            <li
              className={cn(
                "flex items-center justify-between p-2 rounded cursor-not-allowed transition-all",
                !activeCategory.includes("user") ? "text-gray-400" : ""
              )}
            >
              <div className="flex items-center">
                <User className="mr-2 size-4" />
                People
              </div>
              <ToggleButton
                isToggled={activeCategory.includes("user")}
                onToggle={() => handleToggleCategory("user")}
              />
            </li>

            <li
              className={cn(
                "flex items-center justify-between p-2 rounded cursor-not-allowed transition-all",
                !activeCategory.includes("chat") ? "text-gray-400" : ""
              )}
            >
              <div className="flex items-center">
                <MessageCircle className="mr-2 size-4" />
                Chats
              </div>
              <ToggleButton
                isToggled={activeCategory.includes("chat")}
                onToggle={() => handleToggleCategory("chat")}
              />
            </li>

            <li
              className={cn(
                "flex items-center justify-between p-2 rounded cursor-not-allowed transition-all",
                !activeCategory.includes("list") ? "text-gray-400" : ""
              )}
            >
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
  );
};

export default SettingsPanel;
