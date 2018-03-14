<template>
<div style="bg-admin">
<vue-headful
    title="Quản lý BeeVintage!"
/>
<b-container fluid>
<b-row>
<!-- Sidebar custom left -->
  <b-col cols="2" style="padding-right:0px;padding-left:0px" v-if="isActive">
      <sidebarDashboard @letStartDash="getLiveFB"/>
  </b-col>
<!-- Dashboard right -->
<b-col :cols="this.sidebarSize" style="padding-right:0px;padding-left:0px">
  <navbarDashboard @toggleSideBar="isActiveInfo"/>
  <b-col cols="12">
   <b-card 
    style="border-radius: 0px;
    border: none;
    border-top: 1px solid rgba(0,0,0,.125);
    border-bottom: 1px solid rgba(0,0,0,.125);" v-if="loadLive">
    Hi
     
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
import sidebarDashboard from '@/components/layout/admin/sidebarDashboard'

export default {
  name: 'appPage',
  components: {
    navbarDashboard,
    sidebarDashboard
  },
  data () {
    return {
      isActive: true,
      sidebarSize:'10',
      fbSignInParams: {
        scope: 'user_videos,user_posts,email',
        return_scopes: true,
      },
      itemsVideo: [],
      loadLive: true
    }
  },
  created (){
      if(!this.$session.get('auth')){
          this.$router.push('/')
      }
    
  },

  methods: {
    // Lấy dữ liệu FB
      getLiveFB(){
      const self = this;
      window.FB.login(response => {
         this.$session.start()
         this.$session.set('access_token' , response.authResponse.accessToken)
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
            console.log(this.itemsVideo)
            console.log(this.itemsVideo.length)

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