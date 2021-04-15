<template>
  <div class="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
};
</script>

<style scoped>
.TabBar{
  display: flex;
  position: fixed;
  left: 0px;
  bottom: 0px;
  right: 0px;
  height: 49px;
  background-color: #f6f6f6;
  text-shadow: 0px -2px 1px rgba(100, 100, 100, .1);
}
</style>