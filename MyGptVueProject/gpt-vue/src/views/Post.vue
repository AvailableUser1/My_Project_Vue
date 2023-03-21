<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
    </div>
</template>

<script scoped>
export default {
    name: "Post",
    props: ["id"],
    data() {
        return {
            post: {},
        };
    },
    created() {
    // Fetch post data from serveror API using the post ID
        this.post = { id: this.id, title: "My Post", content: "My Post" };
    },
};
</script>
