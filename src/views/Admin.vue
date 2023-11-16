<template>
  <div class="wrapperAdmin">
    <div class="contentAdmin">
      <login-admin v-if="login" />
      <main-post v-else />
    </div>
  </div>
</template>

<script>
import LoginAdmin from '@/components/Login/LoginAdmin.vue'
import PostCreate from '@/components/Admin/postCreate.vue'
import MainPost from '@/components/Admin/mainPost.vue'
  export default {
  components: { LoginAdmin, PostCreate, MainPost },
    data(){
      return{
        login: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.wrapperAdmin{
  min-height: 70vh;
  margin-top: 10rem;
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  align-items: center;
  color: #333;
}
.wrapperAdmin .contentAdmin{
  width: 1024px;
  min-height: 50vh;
}
</style>
