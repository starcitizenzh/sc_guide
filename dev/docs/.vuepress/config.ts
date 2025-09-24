import { defineUserConfig, defaultTheme, } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '星际公民公民中文指导',
    description: '这是一个用于了解星际公民的手册',
    base: '/sc_guide/',
    
    theme: defaultTheme({
        logo: '/images/starcitizenzh.png',
        navbar: [
            // NavbarItem

            // NavbarGroup
            {
                text:'首页',
                link:'https://www.starcitizenzh.com',
            },
            {
                text:'使用邀请码注册游戏账号',
                link:'https://robertsspaceindustries.com/enlist?referral=STAR-2627-3QD2',
            },
            {
                text: '星际公民官方',
                children:
                    [
                        {
                            text: '星际公民官网',
                            link: 'https://robertsspaceindustries.com/',
                        },
                        {
                            text: '星际公民官方Youtube',
                            link: 'https://www.youtube.com/c/RobertsSpaceInd/',
                        },
                        {
                            text: '星际公民官方Twitch',
                            link: 'https://www.twitch.tv/starcitizen/',
                        },
                    ],            
            },
            {
                text: '星际公民相关社区',
                children:
                    [
                        {
                            text: '星际公民百度贴吧',
                            link: 'https://tieba.baidu.com/f?kw=%E6%98%9F%E9%99%85%E5%85%AC%E6%B0%91&ie=utf-8/',
                        },
                        {
                            text: '星际公民中文资讯',
                            link: 'https://starcitizenzh.com/starcitizen_news/',
                        },
                         {
                            text: '星际公民汉化组',
                            link: 'https://starcitizenzw.com/',
                        },
                        {
                            text: '星际公民中文百科',
                            link: 'https://citizenwiki.cn/',
                        },
                        {
                            text: '星际公民Reddit',
                            link: 'https://www.reddit.com/r/starcitizen/',
                        },

                      
                    ],            
            },
   
        ],
        sidebar: [


            '/',
            '/tutorial/',
            '/videos/',
            '/news/',
            // {
            //     text: 'Category2_nest',
            //     link: '/Category_2/',
            //     children: [
            //         // SidebarItem
            //         '/Category_2/test1.md',
            //         // 字符串 - 页面文件路径
            //         '/Category_2/test2.md',
            //     ],
            // },


        ],
    }),
})