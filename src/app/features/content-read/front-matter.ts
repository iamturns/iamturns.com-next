import { GrayMatterFile } from "gray-matter";

export interface ContentFrontMatter {
  title: string;
  dateCreated: number;
  dateUpdated: number;
}

export function toContentFrontMatter(
  grayMatter: GrayMatterFile<string>
): ContentFrontMatter {
  if (!grayMatter.data.title) {
    throw new Error("Missing title");
  }
  if (!grayMatter.data.dateCreated) {
    throw new Error("Missing dateCreated");
  }
  if (!(grayMatter.data.dateCreated instanceof Date)) {
    throw new TypeError("Invalid dateCreated");
  }
  if (!grayMatter.data.dateUpdated) {
    throw new Error("Missing dateUpdated");
  }
  if (!(grayMatter.data.dateUpdated instanceof Date)) {
    throw new TypeError("Invalid dateUpdated");
  }
  return {
    title: grayMatter.data.title,
    dateCreated: grayMatter.data.dateCreated.valueOf(),
    dateUpdated: grayMatter.data.dateUpdated.valueOf(),
  };
}
