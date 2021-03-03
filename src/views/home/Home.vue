<template>
  <div class="about">
    <nav-bar class="home-nav"><div slot="center">MSNHUB</div></nav-bar>
    <home-swiper :banners="banners" />
    <goods-list :goods="showGoods" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";

import { getMSN, getHomeGoods } from "network/home.js";
import GoodsList from "components/content/goods/GoodsList.vue";

export default {
  data() {
    return {
      goods: {
        pop: { page: 0, list: [] },
      },
      banners: [
        {
          image:
            "https://tva2.sinaimg.cn/large/9bd9b167gy1g4lj31wijhj21hc0xchdu.jpg",
        },
        {
          image:
            "https://tva1.sinaimg.cn/large/9bd9b167gy1g4liesscolj21hc0xchdt.jpg",
        },
        {
          image:
            "https://tva4.sinaimg.cn/large/9bd9b167gy1g4lhmt4zm5j21hc0xcnhs.jpg",
        },
        {
          image:
            "https://tva3.sinaimg.cn/large/9bd9b167gy1g4lhi5trgrj21hc0xc4cu.jpg",
        },
      ],
    };
  },
  created() {
    this.getMSN();

    this.getHomeGoods("pop");
  },

  components: {
    NavBar,
    HomeSwiper,
    GoodsList,
  },
  computed: {
    showGoods() {
      return this.goods["pop"].list;
    },
  },
  methods: {
    getMSN() {
      getMSN().then((res) => {
        console.log(res);
      });
    },
    getHomeGoods(type) {
      let page = 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.data.list);
      });
    },
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>