import { docs } from '@/.source';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { DOCS } from "@/consts";
import { createElement } from "react";
import { getDocsInfo } from "./utils"; // Added import for getDocsInfo

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
  icon(icon) {
    if (!icon) {
      return;
    }

    // Use getDocsInfo to fetch icon details
    const doc = getDocsInfo(icon);
    if (doc) {
      return createElement(doc.icon);
    }

    // Fallback to DOCS constant if getDocsInfo doesn't return a result
    const fallbackDoc = DOCS[icon as keyof typeof DOCS];
    if (fallbackDoc) {
      return createElement(fallbackDoc.icon);
    }
  },
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}