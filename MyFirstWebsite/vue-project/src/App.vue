<script setup>

import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Zhengwen from './components/Zhengwen.vue';
import Myfooter from './components/Myfooter.vue';

const navContentobj = { 
    first: "我",
    second: "健身",
    third: "手工",
    forth: "翻译",
    fifth: "猫"
}
const sideContentobj = {
    first: "我",
    second: "健身",
    third: "手工",
    forth: "翻译",
    fifth: "猫",
    
}
</script>
<template >
    
    <div class="nav">
    <Navbar :item="navContentobj"></Navbar>
    </div>
    <div class="main">
    <div class="sidebar">
    <Sidebar :sideItem="sideContentobj"> </Sidebar>
    </div>
    <div class="article">
    <Zhengwen></Zhengwen>
    </div>
    </div>
    <div class="footer">
        <Myfooter></Myfooter>
    </div>
</template>
<style scoped>

.main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;
}

</style>