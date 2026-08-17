import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";
import { getPerformanceOpeningDate } from "@lib/utils";

function getItemDate(item) {
  if (item.collection === "performances") {
    return getPerformanceOpeningDate(item.data.dates);
  }

  return item.data.date;
}

export async function GET(context) {
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft);

  const projects = (await getCollection("projects")).filter(
    (project) => !project.data.draft,
  );

  const speaking = (await getCollection("speaking")).filter(
    (speaker) => !speaker.data.draft,
  );

  const performances = (await getCollection("performances")).filter(
    (performance) => !performance.data.draft,
  );

  const items = [...blog, ...projects, ...speaking, ...performances].sort(
    (a, b) => getItemDate(b).valueOf() - getItemDate(a).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: getItemDate(item),
      link: `/${item.collection}/${item.slug}/`,
      content_type: item.collection, // Add the content-type field
      tags: item.data.tags || [], // Add the tags field
    })),
  });
}