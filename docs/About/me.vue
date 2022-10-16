<template>
  <h1>关于我</h1>
  <p>hi, 我是陈灿，一名前端开发工程师，目前在福州工作。</p>
  <p>
    五年前端开发经验，擅长小程序、公众号、后台系统开发
  </p>
  <p>
    你可以在这里找到我：
    <a v-for="(link, index) of links" :key="link.text" :href="link.href">
      {{ `${link.text} ${index + 1 < links.length ? "、" : ""}` }}
    </a>
  </p>

  <p>邮箱：13950357520@qq.com</p>
  <p>微信：13950357520</p>
</template>

<script lang="ts" setup>
const links = [
  {
    text: "github",
    href: "https://github.com/chen-can",
  },
  {
    text: "码云Gitee",
    href: "https://gitee.com/chencan123",
  },
];
</script>

<style></style>
