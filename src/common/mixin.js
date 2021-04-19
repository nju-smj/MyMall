import {debounce} from './tools'
import BackTop from "components/content/backTop/BackTop";
export const itemListenerMixin={
  mounted() {
    const refresh=debounce(this.$refs.scroll.refresh,200);
    this.$bus.$on('imageLoad',refresh);
  },
}

export const backtoTopMixin={
  components:{
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  },
}