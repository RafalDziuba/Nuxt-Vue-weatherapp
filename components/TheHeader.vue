<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Search</nuxt-link></li>
        <li><nuxt-link to="/history">History</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  transition: 'page',
}
</script>
<style scoped>
a.nuxt-link-exact-active {
  color: black;
}

header {
  width: 100%;
  height: 12vh;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 50px;
}

nav {
  width: 500px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

li,
a {
  text-decoration: none;
  font-size: 28px;
  color: white;
  transition: 0.1s;
}

a:hover {
  color: black;
}

@media (max-width: 420px) {

  nav {
    width: 330px;
  }
}
</style>
