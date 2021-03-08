import { ParsedUrlQuery } from "querystring";

import { GetStaticPaths, GetStaticProps } from "next";
import { MdxRemote } from "next-mdx-remote/types";
import Error from "next/error";

import { readContent } from "../../app/features/content-read/content-read";
import { ContentFrontMatter } from "../../app/features/content-read/front-matter";
import { Content } from "../../app/features/content/content";
import {
  getContentBySlug,
  getContentItems,
} from "../../app/features/content/get";
import { getMdxElement } from "../../app/features/mdx/get-mdx-element";
import { getMdxSource } from "../../app/features/mdx/get-mdx-source";

interface PathParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const contentItems = await getContentItems();

  const slugs = contentItems
    .filter((content) => content.type === "note")
    .map((post: Content) => post.slug);

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps, PathParams> = async ({
  params,
}) => {
  if (!params) {
    return <Error statusCode={404} />;
  }
  const content = await getContentBySlug(params.slug, "note");
  if (!content) {
    return <Error statusCode={404} />;
  }
  const { frontMatter, mdx } = readContent(content);
  const mdxSource = await getMdxSource(mdx);

  return { props: { frontMatter, mdxSource } };
};

type ArticleProps = {
  frontMatter: ContentFrontMatter;
  mdxSource: MdxRemote.Source;
};

function Article({ frontMatter, mdxSource }: ArticleProps) {
  const mdxElement = getMdxElement(mdxSource);
  return (
    <div>
      <div>Here it is</div>
      <ul>
        <li>Hmm: {frontMatter.title}</li>
        <li>Hmm: {frontMatter.dateCreated}</li>
      </ul>
      <main>{mdxElement}</main>
    </div>
  );
}

export default Article;
