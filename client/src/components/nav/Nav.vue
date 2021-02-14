<template>
  <ul class="nav">
    <li class="margin-left">
      <router-link class="link-home" :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li><router-link :to="{ name: 'About' }">About</router-link></li>
    <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #7ea1ff;
}

li {
  float: left;
}

li a {
  display: block;
  padding: 8px;
  color: white;
  text-decoration: none;
  font-size: 1.5em;
}
a:hover {
  color: rgb(255, 255, 255);
  background: #1a2e64;
}

.router-link-active {
  background: #1a2e64;
}
</style>