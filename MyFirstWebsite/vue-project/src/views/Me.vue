<template>
    <div>
        <Navbar :item="navContentobj"></Navbar>
    </div>
    <div class="main">
        <div class="article">
            <Zhengwen :ZhengwenItem="mainContent"></Zhengwen>
        </div>

    </div>
    <div>
        <Myfooter></Myfooter>
    </div>
</template>

<script setup>

import Zhengwen from '../components/Zhengwen.vue';
import Myfooter from '../components/Myfooter.vue';
import Navbar from '../components/Navbar.vue';


    

const navContentobj =  {
    first: "我",
    second: "健身",
    third: "手工",
    forth: "翻译",
    fifth: "猫",
    span:"<-点击小猫可以返回主页哦~"
}
const mainContent = {
    content: "这是me里的正文",
    header: "标题"
}

</script>

<style  scoped>
.main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;
}
a{
    text-decoration: none; 
}
a:visited {
    color: inherit;
    text-decoration: none;
}
</style>