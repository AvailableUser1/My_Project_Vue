<script setup>
const props = defineProps(["item"])
</script>
<template>
    <div class="wrapper">
        <div class="logo">
            <img src="../assets/baobao.jpg" alt="爆爆">
        </div>
        <div class="contentWrapper">
        <div class="navContent" v-for="navitem in item">{{ navitem }}</div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    border-bottom: 1px solid black;
}
.logo {
    text-align: center;
    color: rgb(0, 0, 0);
    padding: 10px;
    cursor:pointer;
    margin-left: 3em;
    font-size: 1.5em;
}
img {
    height: 70px;
}
img:hover {
    transform: scale(1.5);
}
.contentWrapper {
    display: flex;
    margin-left: 3em;
    font-size: 1.5em;
    flex: auto;
    align-items: center;
    justify-content: flex-end;
    margin-right: .5em;
    flex-wrap: wrap;
}
.navContent {
    width: 3em;
    text-align: center;
    color: black;
    padding: 10px;
    cursor:pointer;
    margin-left: 10px;
}
</style>