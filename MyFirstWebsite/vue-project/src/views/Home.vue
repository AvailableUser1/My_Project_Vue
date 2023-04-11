<template>
        <div class="nav"  >
            <Navbar :item="homeNavobj"></Navbar>
        </div>
        <div class="codFront" >
            <Cod></Cod>
        </div>
        <div class="footer">
            <Myfooter></Myfooter>
        </div>
        
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Myfooter from '../components/Myfooter.vue';
import Cod from '../components/Cod.vue';

const homeNavobj = {

home:"欢迎来到我的主页"

}
</script>

<style  scoped>
.nav {
    position:sticky;
    top: 0;
    left: 0;
}
footer {
    text-align: center;
    border-top: 1px solid black;
}
.tape {
    background-color: black;
}
</style>