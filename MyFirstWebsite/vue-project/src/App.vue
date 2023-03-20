<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
import Myfooter from './components/Myfooter.vue';
import Cod from './components/Cod.vue';

const navContentobj = { 
    first: "我",
    second: "健身",
    third: "手工",
    forth: "翻译",
    fifth: "猫"
}

</script>
<template >
    
    <div class="nav"  >
        <Navbar :item="navContentobj">
        </Navbar>
    </div>
    <div class="mian" >
        <Main></Main>
    </div>
    <div class="codFront" >
        <Cod></Cod>
    </div>
    <div class="footer">
        <Myfooter></Myfooter>
    </div>
</template>
<style scoped>

</style>