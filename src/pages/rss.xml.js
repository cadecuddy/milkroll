import rss from '@astrojs/rss';

const postImportResult = import.meta.glob('./*.mdx', { eager: true });
const posts = Object.values(postImportResult).filter((post) => !post.frontmatter.draft);

export const get = () => rss({
  title: 'milk roll | by Cade Cuddy',
  description: 'Software, life, and adventure',
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    pubDate: post.frontmatter.pubDate,
  })),
  customData: `<language>en-us</language>`,
});
