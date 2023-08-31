import post from "./schemas/post";
import author from "./schemas/author";
import category from "./schemas/category";
import content from "./schemas/content";
import youtube from "./schemas/youtube";

export const schema = {
  types: [post, author, category, content, youtube],
};
