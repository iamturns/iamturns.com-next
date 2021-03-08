import hydrate from "next-mdx-remote/hydrate";
import { MdxRemote } from "next-mdx-remote/types";
import { ReactNode } from "react";

import { getMdxComponents } from "./components";

export function getMdxElement(mdxSource: MdxRemote.Source): ReactNode {
  const components = getMdxComponents();
  return hydrate(mdxSource, { components });
}
