<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

ul {
    list-style: none;
    display: flex;
}

li {
    margin-right: 1rem;
}

a {
    color: #fff;
    text-decoration: none;
}

a:hover {
    color: #ccc;
}
</style>