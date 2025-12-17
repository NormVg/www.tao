import { blogPosts } from '~/utils/blog.config.js'

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://www.taohq.org'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9
    }
  ]

  // Dynamic blog post pages
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastmod: post.date || currentDate,
    changefreq: 'monthly',
    priority: 0.8
  }))

  // Combine all pages
  const allPages = [...staticPages, ...blogPages]

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  // Set proper headers
  setResponseHeader(event, 'Content-Type', 'application/xml')
  setResponseHeader(event, 'Cache-Control', 'public, max-age=3600') // Cache for 1 hour

  return sitemap
})
