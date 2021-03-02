<template>
  <div class="home">
    <h1>This is a home page</h1>
    <div class="msn">
      <div>
        <button @click="changeMSN">莫多莫多</button>
      </div>

      <img :src="msn" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msn: "https://api.sunweihu.com/api/sjbz/api.php?lx=dongman",
    };
  },
  methods: {
    changeMSN() {
      window.location.reload();
    },
  },
  components: {},
};
</script>

<style scoped>
.msn img {
  max-width: 80%;
  margin-top: 10px;
}
</style>
