<template>
  <div class="wrapperAdmin">
    <div class="contentAdmin">
      <div class="menubar">
        <v-btn to="/admin/user" icon="mdi-tools"></v-btn>
      </div>
      <login-admin v-if="login" />
      <main-post v-else />
    </div>
  </div>
</template>

<script>
import LoginAdmin from '@/components/Login/LoginAdmin.vue'
import MainPost from '@/components/Admin/mainPost.vue'

  export default {
  components: { LoginAdmin, MainPost },
    data(){
      return{
        login: false
      }
    },
  }
</script>

<style lang="scss" scoped>
.wrapperAdmin{
  min-height: 70vh;
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
.menubar{
  width: 100%;
  padding: 1rem 0;
  margin: .5rem 0;
  text-align: right;
}
</style>
