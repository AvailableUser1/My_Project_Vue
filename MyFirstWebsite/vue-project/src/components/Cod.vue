<template>
    <div id="grid">
        <RouterLink to="/me">
            <div class="me">
                <h1>我</h1>
            </div>
        </RouterLink>
        
        <div class="fit">
            <RouterLink to="/fit">
                <h1>健身</h1>
            </RouterLink>
        </div>
        <div class="handcraft">
            <h1>手工</h1>
        </div>
        <div class="translate">
        <h1>翻译</h1>
        </div>
        <div class="cat">
            <h1>猫</h1>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
body {
    margin: 0;   
}
h1 {
    font-size: 50px;
    line-height: 100vh;
    margin: 0;
}

div:hover {
    color: white;
}
#grid {
    height: 100vh;
    transition: 500ms;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: .8px;
    background: black;
    text-align: center;
    cursor: pointer;
}
#grid:hover {
    background: white
}

:where(.me, .fit, .handcraft, .translate, .cat) {
    background: white;
    transition: 300ms;
}

:where(.me, .fit, .handcraft, .translate, .cat):hover {
    background: black;
}

#grid:has(.me:hover) {
    grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
    
}
#grid:has(.fit:hover) {
    grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr 0.5fr;
}
#grid:has(.handcraft:hover) {
    grid-template-columns: 0.5fr 0.5fr 1fr 0.5fr 0.5fr;
}
#grid:has(.translate:hover) {
    grid-template-columns: 0.5fr 0.5fr 0.5fr 1fr 0.5fr;
}
#grid:has(.cat:hover) {
    grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr 1fr;
}
.title{
    border-bottom: 1px solid black;
    position: sticky;
}
a{
    text-decoration: none; 
}
a:visited {
    color: inherit;
    text-decoration: none;
}
</style>