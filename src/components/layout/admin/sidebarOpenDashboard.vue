<template>
<div>
     <b-list-group style="min-height: 100vh;border-right:1px solid rgba(0,0,0,.125);">
<!-- Thời gian -->
  <b-list-group-item  active class="flex-column align-items-start"
   style="border-radius:0px;
    padding: 5px 10px;
    z-index: 2;
    color: #fff;
    background-color: #3c4651;
    border-color: #383838;">
    <div class="d-flex w-100 justify-content-between">
    <b-link href="#/app" 
    style="margin-left: auto;
    margin-right: auto;">
      <img src="@/assets/logo.png" 
      style="    width: 50px;
    height: 50px;
    border-radius: 79px;
    background: #FFF;
    border: 2px solid #cebebe;
    "/>
    </b-link>
    </div>
    <hr/>
    <div style="border: 1px solid #9d9d9d;
    padding-top: 15px;
    margin-bottom: 8px;">
    <h4 style="text-align:center">{{ clockTime }}</h4>
    <p class="text-muted" style="text-align:center">{{ new Date() | moment('timezone','Asia/Ho_Chi_Minh', 'L')}}</p>
    </div>
  </b-list-group-item>

<!-- Bắt đầu live 
  <b-list-group-item href="#" class="flex-column align-items-start active-live" 
  style="border-radius: 0px;
    background-color: rgb(255, 255, 255);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    border-left: none;
    border-bottom: none;
    text-align: center;
    color: #FFF;
    font-size: 18px;">
    <b-button @click="letStart" 
    style="color: #fff;
    background-color: #f14b4b;
    border-color: #f14b4b;
    cursor: pointer;"><b>BẮT ĐẦU NÀO</b-button></b>
  </b-list-group-item>
 Kết thúc live -->

  <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius:0px;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.125);
    border-left: none;
    border-bottom: none;">
    <b style="
    font-size: 14px;
    color: #666;">FANPAGE OR PROFILE</b>
  </b-list-group-item>
  <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius:0px;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.125);

    border-left: none;
    border-bottom: none;">
    <b style="font-size: 14px;
    color: #666;">QUẢN LÝ SẢN PHẨM</b>
  </b-list-group-item>
  <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius:0px;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.125);

    border-left: none;
    border-bottom: none;">
    <b style="font-size: 14px;     color: #666;">QUẢN LÝ ĐƠN HÀNG</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius:0px;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.125);

    border-left: none;
    border-bottom: none;">
    <b style="font-size: 14px;     color: #666;">QUẢN LÝ THỐNG KÊ</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius:0px;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.125);

    border-left: none;
    border-bottom: none;">
    <b style="font-size: 14px;     color: #666;">TRANG CỬA HÀNG</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius:0px;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.125);

    border-left: none;
    border-bottom: none;">
    <b style="font-size: 14px;     color: #666;">TRANG NẠP TIỀN</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius:0px;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.125);

    border-left: none;
    border-bottom: none;">
    <b style="font-size: 14px;     color: #666;">QUẢN LÝ CÀI ĐẶT</b>
  </b-list-group-item>
    <b-list-group-item href="#" class="flex-column align-items-start" style="border-radius:0px;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.125);

    border-left: none;
    border-bottom: none;">
    <b style="font-size: 14px;     color: #666;">CHẾ ĐỘ NHANH</b>
  </b-list-group-item>
  <!-- KHOẢNG TRỐN -->
  <div class="mt-5">
  </div>
</b-list-group>
</div>
</template>
<script>
    export default {
        props: {

        },
        data(){
            return {
                 timeClock: this.timeNow(),
                 clockTime: 'Đang cập nhật'
            }
        },
        methods: {
        // Thử lấy dữ liệu LiveFB
        letStart(){
            this.$emit('letStartDash');
        },
        // Thời gian
         timeNow(){
            setInterval(()=>{ 
            var date = new Date();
            var h = date.getHours(); // 0 - 23
            var m = date.getMinutes(); // 0 - 59
            var s = date.getSeconds(); // 0 - 59
            var session = "AM";
            
            if(h == 0){
                h = 12;
            }
            
            if(h > 12){
                h = h - 12;
                session = "PM";
            }
            
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            
            var time = h + ":" + m + ":" + s + " " + session;
            this.clockTime = time;
            }, 1000);
      },
      // Gửi lệnh đóng mở sidebar   
        activeSideBar(){
                this.$emit('toggleSideBar');
            },
        logOut(){
            this.$session.destroy()
            this.$router.push('/')
            }
        }
    }
</script>

<style>
    .img-avatar-cpanel{
    width: 27px;
    border-radius: 20px;
    border: 1px solid #adadad;
}
</style>