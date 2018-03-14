<template>
<div style="bg-admin">
<vue-headful
    title="Bắt đầu supportLive!"
/>
<b-container fluid>
<b-row>
<!-- Sidebar custom left -->
  <b-col cols="2" style="padding-right:0px;padding-left:0px" v-if="isActive">
      <sidebarOpenDashboard @letStartDash="getLiveFB"/>
  </b-col>
<!-- Dashboard right -->
<b-col :cols="this.sidebarSize" style="padding-right:0px;padding-left:0px">
  <navbarDashboard @toggleSideBar="isActiveInfo"/>
<!--  <b-collapse visible id="collapse3">
    <b-card 
    style="border-radius: 0px;
    border: none;
    border-top: 1px solid rgba(0,0,0,.125);
    border-bottom: 1px solid rgba(0,0,0,.125);">
      KHUYẾN MÃI COUPON : FREENEWBIE2018
      <p>Để được sử dụng miễn phí 1 tháng dịch vụ!</p>
    </b-card>
  </b-collapse> -->
  <b-col cols=12>
   <b-card 
    style="border-radius: 0px;
    border: none;
    border-top: 1px solid rgba(0,0,0,.125);
    border-bottom: 1px solid rgba(0,0,0,.125);" v-if="loadLive">
    <center>
    {{ showData }}
    <b-btn @click="loadOpenLive" size="sm" variant="warning" >OPEN SUPPORT LIVE</b-btn>
    </center>
    </b-card>
  </b-col>
</b-col>
  </b-row>
</b-container>
</div>
</template>

<script>

import axios from 'axios'
import navbarDashboard from '@/components/layout/admin/navbarDashboard'
import sidebarOpenDashboard from '@/components/layout/admin/sidebarOpenDashboard'

export default {
  name: 'openLivePage',
  components: {
    navbarDashboard,
    sidebarOpenDashboard
  },
  data () {
    return {
      isActive: true,
      sidebarSize:'10',
      fbSignInParams: {
        scope: 'user_videos,user_posts,email',
        return_scopes: true,
      },
      loadLive: true
    }
  },
  created (){
      if(!this.$session.get('auth')){
          this.$router.push('/')
      }

    //   alert(this.$route.params.id);
  },
  methods: {
    loadOpenLive(){
    // Load accessToken 
    let accessToken = this.$session.get('access_token')
    // Lấy comment live
        var source = new EventSource(`https://streaming-graph.facebook.com/${this.$route.params.id}/live_comments?access_token=${accessToken}&comment_rate=one_per_two_seconds&fields=from{name,id},message`);
        source.onmessage = function(event) {
            console.log(event.message);
        };
        // FB.api(`/${this.$route.params.id}?access_token=${accessToken}`, 'GET', {},
        //     function(response) {
        //        Nhận kết quả trả về bỏ vào Items
        //         this.itemsEmbed = response.embed_html;
        //        Tìm những giá trị đang là VIDEO LIVE

        //         console.log(this.itemsEmbed)

        //     }
        //   );
        FB.api(`/${this.$route.params.id}/comments?access_token=${accessToken}`, 'GET', {"limit":"99999"},
            function(response) {
              // Nhận kết quả trả về bỏ vào Items
                this.items = response.data;
              // Tìm những giá trị đang là VIDEO LIVE
                console.log(this.items)

            }
          );

      },
        // Lấy dữ liệu FB
      startLiveFB(){
      const self = this;
      window.FB.login(response => {
       
        // Lấy video đang live
      FB.api(
            '/me/live_videos', 'GET', {},
            function(response) {
              // Nhận kết quả trả về bỏ vào Items
                this.items = response.data;
              // Tìm những giá trị đang là VIDEO LIVE
                this.itemsVideo = items.filter(function(item) {
                  return item.status === "LIVE";
                
              });
            // Gán giá trị vào resultVideoLive
            var resultVideoLive = this.itemsVideo.length;

            // Nếu có thì chuyển hướng.. Còn không thì báo không có!
            if(resultVideoLive >= 1){

              self.$router.push(`/app/openLive/${this.itemsVideo[0].id}`)

            }else{
              alert('Chưa tìm thấy được Bài viết LIVE VIDEO! Đang thử lại sau 5s!')
                }
            }
          );
      }, this.fbSignInParams )

      },
      // toggle SideBar
      isActiveInfo(){
        this.isActive = !this.isActive;
        if(this.isActive !== true){
          this.sidebarSize = 12;
        }else{
          this.sidebarSize = 10;
        }
      },
      // Đăng xuất
      logOut(){
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>