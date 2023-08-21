export const siteData = JSON.parse("{\"base\":\"/sc_guide/\",\"lang\":\"zh-CN\",\"title\":\"星际公民公民中文指导\",\"description\":\"这是一个用于了解星际公民的手册\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
