<template>

    <div class="main">  
        <div class="sidebar">
        <Sidebar :sideItem="sideContentobj"> </Sidebar>
        </div>
        <div class="article">
        <Zhengwen></Zhengwen>
        </div>
        </div>

</template>

<script setup>

import Sidebar from './Sidebar.vue';
import Zhengwen from './Zhengwen.vue';

const sideContentobj = {
    first: "我",
    second: "健身",
    third: "手工",
    forth: "翻译",
    fifth: "猫",

}

</script>

<style  scoped>
.main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;
}
</style>