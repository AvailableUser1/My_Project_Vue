<script setup>
const props = defineProps(["item"])
</script>
<template>
    <div class="wrapper">
        <div class="logo">
            mylog
        </div>
        <div class="navContent" v-for="navitem in item">
            {{ navitem }}
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    background-color: #bfa;
    display: flex;
    width: 100%;
    padding: px;
}
.logo {
background-color: red;
width: 15%;
text-align: center;
 color: white;
  padding: 10px;
  cursor:pointer;
}
.navContent {
    box-sizing: content-box;
    background-color: blue;
    width: 10%;
    flex: auto;
    text-align: center;
    color: white;
    padding: 10px;
    cursor:pointer;
    margin-left: 1em ;
}
.navContent:hover {
      box-shadow: 10px 10px 5px grey;
      color:#bfa;
      transform: scale(1.9);
}
</style>