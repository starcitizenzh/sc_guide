import { defineUserConfig,defaultTheme,} from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  base:'/sc_guide/',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
        // NavbarItem
        {
          text: 'Foo',
          link: '/foo/',
        },
        // NavbarGroup
        {
          text: 'Group',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
      ],
    sidebar: [
        
       
        '/',
        '/Category_1/',
        {
            text: 'Category2_nest',
            link: '/Category_2/',
            children: [
              // SidebarItem
              '/Category_2/test1.md',
              // 字符串 - 页面文件路径
              '/Category_2/test2.md',
            ],
        },
        
        
      ],
  }),
})