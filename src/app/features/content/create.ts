import { config } from "../../bootstrap/config";
import { Content } from "./content";
import { ContentType, isContentType } from "./content-type";

export function createContent(filePath: string): Content {
  const cleanPath = filePath.replace(config.contentPath, "");
  const [_, type, filename] = cleanPath.split("/");
  if (!isContentType(type)) {
    throw new Error(`Invalid content type: ${type}`);
  }
  const slug = filename.replace(/.mdx?$/, "");
  const url = getUrl({ slug, type });
  const id = `${type}-${slug}`;

  return {
    id,
    filePath,
    type,
    url,
    slug,
  };
}

function getUrl({ slug, type }: { slug: string; type: ContentType }): string {
  if (type === "article") {
    return `/${slug}`;
  }
  return `/${type}/${slug}`;
}
