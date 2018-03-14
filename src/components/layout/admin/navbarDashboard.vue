<template>
    <b-navbar toggleable="sm" type="light" 
style="background:#FFF; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px 0px;
    padding: 0em 1.1em;
    border-bottom: 1px solid rgb(254, 254, 254);
    z-index: 1000;
    top: 0;
    position: sticky;">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand><b-button style="border: 0px; 
  background: none;
  color:#615f5f;
  box-shadow: none;
  padding:2px;
  cursor:pointer
  " @click="activeSideBar"><icon name="navicon"></icon></b-button><b-button style="border: 0px; 
  background: none;
  color:#615f5f;
  box-shadow: none;
  padding:2px;
  cursor:pointer
  " @isActiveOpenEmit="activeOpenMethod" v-if="isActiveOpen" ><icon name="navicon"></icon></b-button> </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#"><b-button size="sm" 
    style="
    background: rgb(255, 255, 255);
    color: rgb(122, 122, 122);
    border: 1px solid rgb(217, 217, 217);
    cursor: pointer;
    box-shadow: 0px 0px 1px rgb(217, 217, 217);
    font-size: 11px;">MENU</b-button></b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav>
      <b-nav-item href="#"><b-button size="sm" 
    style="
    background: rgb(255, 255, 255);
    color: rgb(122, 122, 122);
    border: 1px solid rgb(217, 217, 217);
    cursor: pointer;
    box-shadow: 0px 0px 1px rgb(217, 217, 217);
    font-size: 11px;">TRẠNG THÁI TÀI KHOẢN</b-button></b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav>
      <b-nav-item href="#/app/thong-bao"><b-button size="sm" 
    style="
        background: rgb(255, 73, 73);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(255, 73, 73);
    cursor: pointer;
    box-shadow: rgb(91, 91, 91) 0px 0px 1px;
    font-size: 11px;">THÔNG BÁO</b-button></b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

    <!-- <b-nav-form>
         <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Tìm kiếm"/>
         <b-button size="sm" class="my-2 my-sm-0" type="submit">Tìm</b-button>
       </b-nav-form> 
       
    <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>-->
        <b-navbar-nav right>
         <b-nav-item href="#">
         <b-button size="sm" variant="warning" 
         style="
        font-size: 12px;
        cursor: pointer;
        font-weight: 600;
        color: #FFF;
        padding-top: 5px;"> NÂNG CẤP </b-button>
        </b-nav-item>
        <b-nav-item href="#">
        <b-button size="sm" 
        style="
        background: rgb(255, 255, 255);
        color: rgb(122, 122, 122);
        border: 1px solid rgb(217, 217, 217);
        cursor: pointer;
        box-shadow: rgb(217, 217, 217) 0px 0px 1px;
        font-size: 11px;
        margin-bottom: 1px;
        padding: 6px 9px;">HỖ TRỢ 24/7</b-button>
        </b-nav-item>
        </b-navbar-nav>
      

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <img :src="this.$session.get('auth').avatar" style="" class="img-avatar-cpanel">
        </template>
<b-dropdown-item href="#">Trang cá nhân</b-dropdown-item>
<b-dropdown-item @click="logOut">Đăng xuất</b-dropdown-item>
</b-nav-item-dropdown>
</b-navbar-nav>

</b-collapse>
</b-navbar>
</template>
<script>
    export default {
        data(){
            return {
                isActiveOpen: false
            }
        },
        methods: {
            
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