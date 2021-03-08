import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";

import { getMdxComponents } from "./components";

export async function getMdxSource(mdx: string): Promise<MdxRemote.Source> {
  const components = getMdxComponents();
  return renderToString(mdx, { components });
}
