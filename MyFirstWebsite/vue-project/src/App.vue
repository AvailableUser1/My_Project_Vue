<script setup>
import Navbar from './components/Navbar.vue'
const navContentobj = { 
    first: "我",
    second: "健身",
    third: "手工",
    forth: "翻译",
    fifth: "猫"
}
console.log(navContentobj);
</script>
<template>
    <div>
    <Navbar :item="navContentobj"></Navbar>
    </div>
    <h1>阿里妈妈东方大楷</h1>
</template>
<style>

</style>