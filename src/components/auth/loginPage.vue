<template>
    <b-container>
        <div v-if="!this.$session.get('auth')">
             <fb-signin-button
                :params="fbSignInParams"
                @success="onSignInSuccess"
                @error="onSignInError">
                Đăng nhập Facebook
            </fb-signin-button>
           
        </div>
        <div v-else>
    <b-button style="display: inline-block;
            padding: 4px 8px;
            border-radius: 3px;
            background-color: #4267b2;
            color: #fff;
            cursor: pointer;"
                @click="logOut">
                Đăng xuất Facebook
            </b-button>
        </div>
    </b-container>    
</template>

<script>
import axios from 'axios'
export default {
  name: 'loginPage',
  data () {
     return {
      fbSignInParams: {
        scope: 'email',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      FB.api('/me',
       'GET',
       {"fields":"id,name,email,cover,picture"},
       dude => {
       const nameProfile = dude.name
       const idProfile = dude.id
       const emailProfile = dude.email
       const avatarProfile = `http://graph.facebook.com/${dude.id}/picture?type=large`

        axios.post(`http://localhost:8080/api/account`,{nameProfile,idProfile,emailProfile,avatarProfile})
            .then(response => {
              // JSON responses are automatically parsed.
              this.posts = response.data
              //  console.log(response.data)
              this.$session.start()
              this.$session.set('jwt', response.data.token)
              this.$session.set('auth', response.data.infoData)
              console.log(this.$session.get('auth'))
              this.$router.push('/app')
              
            })
            .catch(e => {
              this.errors.push(e)
            })
      })
    },
    onSignInError (error) {
      console.log('Lỗi đăng nhập!', error)
    },
    logOut(){
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
  cursor: pointer;
}
</style>
