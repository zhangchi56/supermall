import BackTop from "components/content/backTop/BackTop";
// import { BACKTOP_DISTANCE } from "@/common/const"

export const backTop = {
  data() {
    return {
      tabControlisShow: false
    }
  },
  components:{
    BackTop
  },
  methods: {
    //点击返回顶部功能
    backClick(){
      this.$refs.scroll.scrollTo(0,0,300);
    },
    

  }
}