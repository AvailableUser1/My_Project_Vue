<script setup>
const props = defineProps(["item"])
</script>
<template>
    <div class="wrapper">
        <div class="logo">
        <RouterLink to="/"><img src="../assets/baobao.jpg" alt="爆爆"></RouterLink>
        <span>{{props.item.span}}</span>
        </div>
        <div class="home">{{ props.item.home }}</div>
        <div class="contentWrapper">
        <RouterLink to="/me"><div class="navContent" >{{ props.item.first }}</div></RouterLink>
        <RouterLink to="/fit"><div class="navContent" >{{ props.item.second }}</div></RouterLink>
        <div class="navContent" >{{ props.item.third }}</div>
        <div class="navContent" >{{ props.item.forth }}</div>
        <div class="navContent" >{{ props.item.fifth }}</div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    border-bottom: 1px solid black;
    background-color: white;
    width: 100%;
    
}
.home {
    font-size: 1.5em;
    display: flex;
    align-items: center;

}
.logo {
    text-align: center;
    color: rgb(0, 0, 0);
    padding: 10px;
    cursor:pointer;
    margin-left: 3em;
    font-size: 1.5em;
    display: flex;
    align-items:end;
}
span {
    padding-left: 1em;
    font-size: .8em;
    cursor:default;
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
.navContent:hover {
    transform: scale(1.5);

}

a{
    text-decoration: none; 
}
a:visited {
    color: inherit;
    text-decoration: none;
}
</style>