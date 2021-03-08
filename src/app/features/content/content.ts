import { ContentType } from "./content-type";

export interface Content {
  id: string;
  filePath: string;
  type: ContentType;
  url: string;
  slug: string;
}
