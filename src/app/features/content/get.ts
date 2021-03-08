import globby from "globby";

import { config } from "../../bootstrap/config";
import { Content } from "./content";
import { ContentType } from "./content-type";
import { createContent } from "./create";

export async function getContentItems(): Promise<Content[]> {
  const contentFilePaths = await getContentFilePaths();
  const contentItems = contentFilePaths.map(createContent);
  return contentItems;
}

async function getContentFilePaths(): Promise<string[]> {
  return globby(`${config.contentPath}/**/*.mdx`);
}

/*
function sortByNewest(content: Content[]) {
  content.sort((a, b) => b.dateUpdated - a.dateUpdated);
}
*/

export async function getContentBySlug(
  slug: string,
  type: ContentType
): Promise<Content | undefined> {
  const contentItems = await getContentItems();
  return contentItems.find(
    (contentItem) => contentItem.slug === slug && contentItem.type === type
  );
}
