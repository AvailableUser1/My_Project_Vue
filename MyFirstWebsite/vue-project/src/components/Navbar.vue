<script setup>
const props = defineProps(["item"])
</script>
<template>
    <div class="wrapper">
        <div class="logo">Mylog</div>
        <div class="contentWrapper">
        <div class="navContent" v-for="navitem in item">{{ navitem }}</div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    margin-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid black;
}
.logo {
    text-align: center;
    color: rgb(0, 0, 0);
    padding: 10px;
    cursor:pointer;
    margin-left: .5em;
    font-size: 1.5em;
    
}
.contentWrapper {
    display: flex;
    margin-left: 3em;
    font-size: 1.5em;
    flex: auto;
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