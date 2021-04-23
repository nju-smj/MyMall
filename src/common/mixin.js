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
      if(this.$refs.scroll){
        this.$refs.scroll.scrollTo(0, 0, 500);
      }else if(this.$refs.categoryBs2){
        this.$refs.categoryBs2.scrollTo(0, 0, 500);
      }
    }
  },
}