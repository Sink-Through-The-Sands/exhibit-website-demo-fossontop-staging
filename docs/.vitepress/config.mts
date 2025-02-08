import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
function genSidebarConfig(doc: string){
  return {
    documentRootPath: 'docs',
    scanStartPath: doc,
    resolvePath: `/${doc}/`,
    collapsed: false,
    hyphenToSpace: true,
    capitalizeEachWords: true,
    underscoreToSpace: true,
    includeEmptyFolder: false,
    includeRootIndexFile: true,
    includeFolderIndexFile: true,
    sortMenusByName: false,
    excludePattern: ['README**']
  }
};

const vitePressSidebarOptions = [genSidebarConfig("aosp"), genSidebarConfig("crave")]

const vitePressOptions = {
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
}

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
