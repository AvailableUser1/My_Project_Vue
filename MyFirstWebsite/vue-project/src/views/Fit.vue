<template>
    <div>
        <Navbar :item="navContentobj"></Navbar>
    </div>
    <div class="main">
        <div class="sidebar">
            <Sidebar :sideItem="sideContentobj"></Sidebar>
        </div>
        <div class="article">
            <Zhengwen :ZhengwenItem="mainContent"></Zhengwen>
        </div>

    </div>
    <div>
        <Myfooter></Myfooter>
    </div>
</template>

<script setup>

import Sidebar from '../components/Sidebar.vue';
import Zhengwen from '../components/Zhengwen.vue';
import Myfooter from '../components/Myfooter.vue';
import Navbar from '../components/Navbar.vue';
const sideContentobj = {

    second: "日期",
    third: "食谱",
    


}
const navContentobj = {
    first: "我",
    second: "健身",
    third: "手工",
    forth: "翻译",
    fifth: "猫"
}
const mainContent = {
    content:"这是fit里的正文"
}

</script>

<style  scoped>
.main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;
}
</style>