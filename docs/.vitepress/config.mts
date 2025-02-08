import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FOSSonTop",
  description: "OSS is always on top. Always.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AOSP Docs', link: '/aosp/' },
      { text: 'Crave.io Docs', link: '/crave/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FOSSonTop' }
    ],

    cleanUrls: true,
    lastUpdated: true
  }
})
