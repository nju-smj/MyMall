<template>
  <div class="detail-common-info">
    <div class="comment-common">
      <span>用户评论</span>
      <span v-if="commentInfo.num>1" class="iconfont icon-gengduo"></span>
    </div>
    <div class="comment-val" v-if="commentInfo.num>=1">
      <img v-lazy="commentInfo.list.user.avatar" alt="">
      <span class="comment-id">{{commentInfo.list.user.uname}}</span>
      <div class="comment">{{commentInfo.list.content}}</div>
      <span class="comment-time">{{fomatTime}}</span><span class="comment-style">{{commentInfo.list.style}}</span>
    </div>
    <div class="comment-imgs" v-if="commentInfo.list">
      <img v-lazy="item" alt="" v-for="(item,index) in commentInfo.list.images" :key="index">     
    </div>
  </div>
</template>

<script>
import {format} from 'silly-datetime'
export default {
  name: 'MymallDetailcommentinfo',
  props:{
    commentInfo:{
      type: Object,
      default(){
        return {};
      }
    }
  },
  computed:{
    fomatTime(){
      return format(new Date(this.commentInfo.list.created * 1000),'YYYY-MM-DD');
    },
  },
};
</script>

<style scoped>
.detail-common-info{
  margin-bottom: 30px;
}
.comment-common{
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  border-top: 3px solid rgba(100, 100, 100, .1);
  padding: 6px 0px;
  font-weight: bold;
  margin: 0px 30px;
  position: relative;
}
.icon-gengduo{
  position: absolute;
  right: 0px;
  font-size: 24px;
}
.comment-val{
  width: 300px;
  margin: 0px auto;
  border-top: 1px solid rgba(100, 100, 100, .5);
  margin-top: 15px;
}
.comment-val img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
}
.comment-id{
  position: relative;
  top: -15px;
  font-size: 14px;
  margin-left: 5px;
}
.comment{
  padding: 5px 6px 0px 6px;
  font-size: 15px;
  line-height: 22px;
}
.comment-time,.comment-style{
  font-size: 13px;
  color: rgba(100, 100, 100, .5);
}
.comment-style{
  display: inline-block;
  padding-left: 15px;
}
.comment-imgs{
  width: 300px;
  margin: 5px auto;
}
.comment-imgs img{
  width: 70px;
  height: 70px;
  margin:5px;
}
</style>