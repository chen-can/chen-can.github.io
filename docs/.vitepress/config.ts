/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: "陈灿的博客", //标题
  titleTemplate: "陈灿的博客",
  description: "CC-Blog",
  lastUpdated: true,
  base: "/",
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "logo.svg" }],
    ["meta", { property: "og:title", content: "陈灿的博客" }],
    ["meta", { property: "og:site_name", content: "陈灿的博客" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://chen-can.github.io/" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "『 陈灿的博客 』",
    socialLinks: [
      { icon: "github", link: "https://github.com/chen-can" },
      {
        icon: {
          svg: '<svg t="1664417823821" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1958" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1959"></path></svg>',
        },
        link: "https://gitee.com/chencan123",
      },
    ],
    algolia: {
      appId: "A5GJTL0VDB",
      apiKey: "d5bb850eb799e6344f3d01eda4a5c394",
      indexName: "vitepress",
      placeholder: "输入关键词搜索",
      buttonText: "搜索文档",
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询内容",
            resetButtonAriaLabel: "清除查询内容",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "暂无内容",
            saveRecentSearchButtonTitle: "保存搜索记录",
            removeRecentSearchButtonTitle: "从历史记录中删除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "移除收藏",
          },
          errorScreen: {
            titleText: "获取搜索结果失败",
            helpText: "请检查你的网络连接是否正常.",
          },
          footer: {
            selectText: "搜索",
            selectKeyAriaLabel: "输入关键词",
            navigateText: "移动",
            navigateUpKeyAriaLabel: "向上",
            navigateDownKeyAriaLabel: "向下",
            closeText: "关闭",
            closeKeyAriaLabel: "Escape 键",
            searchByText: "View & Docker",
          },
          noResultsScreen: {
            noResultsText: "没有匹配的内容",
            suggestedQueryText: "尝试搜索",
            reportMissingResultsText: "确认该搜索有结果?",
            reportMissingResultsLinkText: "点击反馈",
          },
        },
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdatedText: "最后更新",
    outlineTitle: "这一页",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          {
            text: "技术栈",
            items: [
              { text: "HTML", link: "/FrontEnd/HTML/HTML_Note" },
              { text: "CSS", link: "/FrontEnd/CSS/CSS_Note" },
              { text: "JavaScript", link: "/FrontEnd/JavaScript/JS_Note" },
              // { text: "TypeScript", link: "/FrontEnd/TypeScript/TypeScript_Note" },
              // { text: "Vue", link: "/FrontEnd/Vue/Vue_Note" },
            ],
          },
          // {
          //   text: "依赖包",
          //   items: [
          //     { text: "dayjs", link: "/extensions/dayjs" },
          //     { text: "bcryptjs", link: "/extensions/bcryptjs" },
          //   ],
          // }
        ],
      },
      {
        text: "工具软件",
        items: [
          {
            text: "编程软件",
            items: [
              { text: "VSCode", link: "/Soft/VSCode/plug" },
              { text: "Chrome", link: "/Soft/Chrome/plug" },
              // { text: "SwitchHosts", link: "/Soft/SwitchHosts" },
              // { text: "iTerm2", link: "/Soft/iTerm2" },
              // { text: "Postman", link: "/Soft/Postman" },
              // { text: "Charles", link: "/Soft/Charles" },
              // { text: "FileZilla", link: "/Soft/FileZilla" },
              // { text: "SnailSvn", link: "/Soft/SnailSvn" },
              // { text: "Docker", link: "/Soft/Docker" },
              // { text: "dev-sidcar", link: "/Soft/dev-sidcar" },
              // { text: "ResponsivelyApp", link: "/Soft/ResponsivelyApp" },
              // { text: "PicGo", link: "/Soft/PicGo" },
            ],
          },
          {
            text: "效率提升",
            items: [
              { text: "brew", link: "/Efficiency/brew" },
              { text: "nvm", link: "/Efficiency/nvm" },
              { text: "yrm", link: "/Efficiency/yrm" },
              { text: "npm", link: "/Efficiency/npm" },
              { text: "yarn", link: "/Efficiency/yarn" },
              { text: "pnpm", link: "/Efficiency/pnpm" },
              { text: "git", link: "/Efficiency/git" },
              // { text: "zsh", link: "/Efficiency/zsh" },
            ],
          },
        ],
      },
      // {
      //   text: "部署",
      //   items: [{ text: "jenkins", link: "/Deploy/jenkins" }],
      // },
      {
        text: "文章",
        link: "/Blog/bug",
      },
      {
        text: "关于我",
        link: "/About/index",
      },
    ],
    sidebar: {
      "/FrontEnd/JavaScript": [
        {
          collapsible: true,
          text: "JavaScript",
          items: [
            {
              text: "JavaScript 笔记",
              link: "/FrontEnd/JavaScript/JS_Note",
            },
            {
              text: "Es5系列19种",
              link: "/FrontEnd/JavaScript/JS_ES5",
            },
            {
              text: "Es6系列7种",
              link: "/FrontEnd/JavaScript/JS_ES6",
            },
            {
              text: "工具库",
              link: "/FrontEnd/JavaScript/JS_Tools",
            },
            {
              text: "代码简写技巧",
              link: "/FrontEnd/JavaScript/JS_Abbreviation",
            },
             
          ],
        },
      ],
      "/FrontEnd/HTML": [
        {
          collapsible: true,
          text: "HTML",
          items: [{ text: "HTML 笔记", link: "/FrontEnd/HTML/HTML_Note" }],
        },
      ],
      "/FrontEnd/CSS": [
        {
          text: "CSS",
          collapsible: true,
          items: [
            { text: "CSS 笔记", link: "/FrontEnd/CSS/CSS_Note" },
            { text: "CSS 选择器", link: "/FrontEnd/CSS/CSS_Selector" },
          ],
        },
        {
          text: "CSS 公共样式",
          collapsible: true,
          items: [{ text: "CSS 公共样式", link: "/FrontEnd/CSS/CSS_Style" }],
        },
      ],
      "/Blog/": [
        {
          isGroup: true,
          text: "博客",
          items: [
            {
              text: "Bug",
              link: "/Blog/bug",
            },
            {
              text: "包管理",
              link: "/Blog/package-manager",
            },
            {
              text: "前端八股文",
              link: "/Blog/八股文",
            },
            {
              text: "前端常见单词",
              link: "/Blog/常见单词",
            },
            {
              text: "Linux 常用命令",
              link: "/Blog/Linux",
            },
            {
              text: "Github 使用技巧",
              link: "/Blog/github",
            },
            {
              text: "SSH - 公钥 私钥",
              link: "/Blog/SSH",
            },
          ],
        },
      ],
      "/Soft/Chrome": [
        {
          collapsible: true,
          text: "Chrome",
          items: [
            {
              text: "插件",
              link: "/Soft/Chrome/plug",
            },
            {
              text: "配置",
              link: "/Soft/Chrome/deploy",
            },
          ],
        },
      ],
      "/Soft/VSCode": [
        {
          collapsible: true,
          text: "VSCode",
          items: [
            {
              text: "插件",
              link: "/Soft/VSCode/plug",
            },
            {
              text: "配置",
              link: "/Soft/VSCode/deploy",
            },
            {
              text: "VSCode 同步设置",
              link: "/Soft/VSCode/VSCode 同步设置",
            },
          ],
        },
      ],
    },
  },

  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2022-present Evan Sun",
  },
};

export default config;
