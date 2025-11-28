import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getDirname, getDocsInfo, isIndexPage } from "@/lib/utils";
import { createElement } from "react";
import Hero from "@/components/hero";
import { DOCS } from "@/consts";


export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const isIndex = isIndexPage(page.path);
  const dirName = getDirname(page.slugs, isIndex);
  return (
    <DocsPage
      toc={isIndex ? undefined : page.data.toc}
      tableOfContent={isIndex ? undefined : { style: "clerk" }}
      full={page.data.full}
      lastUpdate={
        page.data.lastModified ? new Date(page.data.lastModified) : undefined
      }
    >
      {isIndex && dirName ? (
        <IndexHead folder={dirName} />
      ) : (
        <>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      )}
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

function IndexHead({ folder }: { folder: string }) {
  const docsInfo = getDocsInfo(folder);
  if (!docsInfo) return null;

  const { icon, title } = docsInfo;

  const desc = DOCS[folder as keyof typeof DOCS]?.desc ?? "";

  return (
    <>
      <Hero
        title={title}
        desc={desc}
        icon={createElement(icon, { className: "size-12 shrink-0" })}
      />
      <hr />
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
