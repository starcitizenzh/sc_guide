export const themeData = JSON.parse("{\"logo\":\"/images/starcitizenzh.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"https://www.starcitizenzh.com\"},{\"text\":\"使用邀请码注册游戏账号\",\"link\":\"https://robertsspaceindustries.com/enlist?referral=STAR-2627-3QD2\"},{\"text\":\"星际公民官方\",\"children\":[{\"text\":\"星际公民官网\",\"link\":\"https://robertsspaceindustries.com/\"},{\"text\":\"星际公民Youtube\",\"link\":\"https://www.youtube.com/c/RobertsSpaceInd/\"},{\"text\":\"星际公民Twitch\",\"link\":\"https://www.twitch.tv/starcitizen/\"}]},{\"text\":\"星际公民相关社区\",\"children\":[{\"text\":\"星际公民百度贴吧\",\"link\":\"https://tieba.baidu.com/f?kw=%E6%98%9F%E9%99%85%E5%85%AC%E6%B0%91&ie=utf-8/\"},{\"text\":\"星际公民Reddit\",\"link\":\"https://www.reddit.com/r/starcitizen/\"},{\"text\":\"星际公民汉化组\",\"link\":\"https://starcitizenzw.com/\"}]}],\"sidebar\":[\"/\",\"/tutorial/\",\"/videos/\",\"/news/\"],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
