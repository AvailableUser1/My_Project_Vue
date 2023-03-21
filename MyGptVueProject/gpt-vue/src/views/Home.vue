<template>
<div>
    <h1>Welcome to My Blog</h1>
    <p>Check out my latest posts:</p>
    <ul>
    <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'Post', params: { id: post.id }}">{{ post.title }}</router-link>
    </li>
    </ul>
</div>
</template>

<script >
export default {
    name: "Home",
    data() {
        return {
            posts: [
                { id: 1, title: "My First Post", content: "My First Post" },
                { id: 2, title: "My Second Post", content: "My Second Post" },
                { id: 3, title: "My Third Post", content: "My Third Post" },
            ],
        };
    },
};
</script>
<style scoped>
h1 {
    font-size: 3rem;
    color: #333;
    text-align: center;
    margin-top: 2rem;
}

p {
    font-size: 1.5rem;
    color: #555;
    text-align: center;
    margin-top: 1rem;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    width: 50%;
}

li {
    font-size: 1.2rem;
    color: #888;
    margin-bottom: 1rem;
}

li a {
    color: #333;
    text-decoration: none;
}

li a:hover {
    text-decoration: underline;
}
</style>
