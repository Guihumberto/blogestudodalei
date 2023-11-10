<template>
  <div class="shareWrapper">
        <h3>Compartilhamento</h3>
        <div>
          <div v-for="item, i in sharesApps" :key="i" class="socialIcon">
            <v-icon class="icon">{{ item.icon }}</v-icon>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        sharesApps:[
          {id:1, name: 'whatsapp', icon: 'mdi-whatsapp'},
          {id:2, name: 'e-mail', icon: 'mdi-email'},
          {id:3, name: 'copy', icon: 'mdi-content-copy'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.shareWrapper{
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  min-width: 400px;
}
.shareWrapper div{
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
}
.socialIcon{
  width: 70px;
  height: 70px;
  border: 1px solid grey;
  border-radius: 12px;
  transition: .6s ease;
}
.socialIcon .icon{
  transition: .6s ease;
}
.socialIcon:hover .icon{
  transform: scale(1.9);
}
.socialIcon:hover{
  box-shadow: 10px 5px 5px black;
}
@media (max-width: 500px){
  .shareWrapper{
    min-width: 90%;
    margin: 0;
    padding: 0;
  }
}

</style>
