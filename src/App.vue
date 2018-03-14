<template>
    <router-view/>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* width */
::-webkit-scrollbar {
    width: 10px;
    border-radius:4px
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius:4px
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius:4px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    
    background: #ffc107; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
