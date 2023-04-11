<script setup>
const props = defineProps(["ZhengwenItem"])
</script>
<template>
    <h1>{{ props.ZhengwenItem.header }}</h1>
    <article>{{ props.ZhengwenItem.content }}</article>

</template>

<style  scoped>
h1 {
    text-align: left;
}
article{
    margin-top: 30px;
    text-indent: 2em;
    font-size: 40px;
    height: 100vh;
}
</style>