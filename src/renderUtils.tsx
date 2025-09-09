import { List, MessageCircle, Paperclip, User } from "lucide-react";
import type { ICategory } from "./models/category";

export const getCategoryIcon = (payload: {
  category: ICategory;
  className: string;
}) => {
  const { category, className } = payload;
  switch (category) {
    case "file":
      return <Paperclip className={className} />;
    case "people":
      return <User className={className} />;
    case "chat":
      return <MessageCircle className={className} />;
    case "list":
      return <List className={className} />;
  }
};
