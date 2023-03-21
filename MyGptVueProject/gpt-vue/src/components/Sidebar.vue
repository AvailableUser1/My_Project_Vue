<template>
    <aside>
        <h2>Categories</h2>
        <ul>
            <li><router-link to="/category/1">Category 1</router-link></li>
            <li><router-link to="/category/2">Category 2</router-link></li>
            <li><router-link to="/category/3">Category 3</router-link></li>
        </ul>
    </aside>
</template>

<style scoped>
aside {
    background-color: #eee;
    padding: 1rem;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 0.5rem;
}

a {
    color: #333;
    text-decoration: none;
}

a:hover {
    color: #777;
}
</style>