<template>
  <nav-bar>
    <template v-slot:left>
      <div class="datail-nav-left" @click="backClick">
        <img src="~assets/img/detail/back.svg" alt=""/>
      </div>
    </template>
    <template v-slot:center>
      <div class="detail-nav-mid">
        <div
          v-for="(item, index) in list"
          :key="index"
          @click="navItemClick(index)"
          :class="{ active: index == curIndex }"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      list: ["商品", "参数", "评论", "推荐"],
      curIndex: 0,
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    navItemClick(index) {
      this.curIndex = index;
      this.$emit('navClick', index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.detail-nav-mid {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.datail-nav-left {
  position: relative;
  top: 5px;
}
.active {
  color: var(--color-high-text);
}
</style>