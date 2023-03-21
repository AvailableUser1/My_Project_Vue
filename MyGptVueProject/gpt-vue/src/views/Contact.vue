<template>
    <div>
        <h1>Contact Me</h1>
        <p>Feel free to send me a message:</p>
        <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            <label for="message">Message:</label>
            <textarea id="message" v-model="message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            name: "",
            email: "",
            message: "",
        };
    },
    methods: {
        submitForm() {
            // Send form data to server or API
            console.log("Form submitted");
            this.name = "";
            this.email = "";
            this.message = "";
        },
    },
};
</script>
