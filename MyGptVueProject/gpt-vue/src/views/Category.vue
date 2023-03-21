<template>
    <div>
        <h1>Posts in Category {{ category }}</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="{ name: 'Post', params: { id: post.id } }">{{ post.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ["id"],
    data() {
        return {
            category: "",
            posts: [
                { id: 1, title: "My First Post", content: "My First Post", category: 1 },
                { id: 2, title: "My Second Post", content: "My Second Post", category: 2 },
                { id: 3, title: "My Third Post", content: "My Third Post.", category: 3 },
                { id: 4, title: "My Fourth Post", content: "My Fourth Post", category: 1 },
                { id: 5, title: "My Fifth Post", content: "My Fifth Post", category: 2 },
            ],
        };
    },
    created() {
        this.category = this.id;
        this.posts = this.posts.filter(post => post.category == this.category);
    },
};
</script>