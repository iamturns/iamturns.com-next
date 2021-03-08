import grayMatter from "gray-matter";

import { Content } from "../content/content";
import { ContentFrontMatter, toContentFrontMatter } from "./front-matter";

export interface ContentReadResult {
  frontMatter: ContentFrontMatter;
  mdx: string;
}

export function readContent(content: Content): ContentReadResult {
  const grayMatterResult = grayMatter.read(content.filePath);
  const frontMatter = toContentFrontMatter(grayMatterResult);
  return { frontMatter, mdx: grayMatterResult.content };
}
