<script setup>
const props = defineProps(["sideItem"])
</script>

<template>
    <div class="wrapper">
        <div class="sideContent" v-for="item in sideItem">{{ item }}</div>
    </div>
</template>

<style  scoped>
.wrapper{
    margin-top: 30px;
    display: flex;
    flex-flow: column;
    height: 100%;
    /* background-color: aquamarine; */
    border-right: 2px solid black;
}
.sideContent {
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px;
    padding-left: 100px;
    margin-top: 10px;
    margin-bottom: 10px;

    width: 100%;
    font-size: 30px;
}
.sideContent:hover {
    transform: scale(1.3);
    text-align: center;
}
</style>