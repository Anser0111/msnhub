<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">美少女HUB</div></nav-bar>
    <home-swiper :banners="banners" />
    <goods-list :goods="goods" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";

import GoodsList from "components/content/goods/GoodsList.vue";

export default {
  data() {
    return {
      goods: [
        {
          url:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fb%2F598c1416035cd.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617410120&t=15f43f5661cbadd2846bd4fc5d28adaf",
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3687440269,1979919758&fm=26&gp=0.jpg",
        },
        {
          url:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8b243a7c5d4ed5f43730b5e65edc1cbdf1087db4.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617410275&t=eff97a6ed47c7a443cb7ccf0acc71706",
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2229438069,3978265872&fm=26&gp=0.jpg",
        },
        {
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2216328733,2171768231&fm=26&gp=0.jpg",
        },
        {
          url:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F23%2F20151123042221_vRLFt.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617410470&t=c751a019c2caa976961b2c0e9abef5a5",
        },
        {
          url:
            "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6159252dd42a28349b7f9f9953b5c9ea14cebf43.jpg",
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2263369691,3838789389&fm=26&gp=0.jpg",
        },
        {
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1872025220,804319039&fm=26&gp=0.jpg",
        },
        {
          url:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-07-19%2F5b502dc549fcd.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617410560&t=f821d47a6597194a6e9aad09b337683d",
        },
      ],
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

  components: {
    NavBar,
    HomeSwiper,
    GoodsList,
  },
  computed: {
    showGoods() {
      return this.goods["list"].list;
    },
  },
  methods: {},
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>