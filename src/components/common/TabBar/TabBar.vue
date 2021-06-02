<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MymallTabbar',
};
</script>

<style scoped>
.tab-bar{
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 49px;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, .1);
  background-color: #f6f6f6;
}
</style>