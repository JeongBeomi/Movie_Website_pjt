<template>
  <div>
    <h1>profile</h1>
    <p>{{ myinfo }}</p>
  </div>
</template>

<script>
import axios from 'axios'

const Django_URL = 'http://127.0.0.1:8000'


export default {
  name: 'MyProfileView',
  data() {
    return {
      myinfo: null,
    }
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  created() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      if (this.isLogin === true) { 
        axios({
          method: 'get',
          url: `${Django_URL}/accounts/user`,
          headers: {
            Authorization: `Token ${this.$store.state.token}`
          }
        })
          .then((res) => {
            console.log(res)
            console.log(res.data)
            this.myinfo = res.data
            
          })
          .catch((err) => {
            console.log(err)
          })

      } else {
        alert('로그인이 필요한 서비스 입니다.')
        this.$router.push({ name: 'LogInView'})
      }
    }
  }

}
</script>

<style>

</style>