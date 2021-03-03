<template>
  <div class="goods-item">
    <img :src="showImage" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      //这里使用逻辑或，如果前面为false，则执行后面的
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {},
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 90%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}
</style>