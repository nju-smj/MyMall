import {debounce} from './tools'
import BackTop from "components/content/BackTop";
export const itemListenerMixin={
  mounted() {
    const refresh=debounce(this.$refs.scroll.refresh,200);
    this.$bus.$on('itemImgLoad',refresh);
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
        this.$refs.scroll.moveTo(0, 0, 500);
      }else if(this.$refs.categoryBs2){
        this.$refs.categoryBs2.moveTo(0, 0, 500);
      }
    }
  },
}