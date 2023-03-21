<template>
  <div id="app">
    <Navbar />
    <div class="wrap"> 
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
}

body {
  margin: 0;
  padding: 0;
}



main {
  flex: 1;
  margin: 1rem;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #777;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}
</style>