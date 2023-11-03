<template>
  <nav
    class="navbar navbar-expand-sm fixed-bottom justify-content-center border-top border-1"
  >
    <ul class="nav">
      <li class="nav-item me-2 ">
        <button class="nav-link nav-btn" @click="goPatients">
          <i class="bi bi-person-lines-fill"></i>Patients
        </button>
      </li>
      <li class="nav-item mx-2">
        <button class="nav-link nav-btn" @click="goAdd" >
          <i class="bi bi-person-fill-add"></i>Add
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    goPatients() {
      this.$router.push("/");
    },
    goAdd() {
      this.$router.push("/add");
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 60px;
  background-color: white;
}
.nav-btn {
  border-radius: 10px;
  color: black;
}
.nav-btn:hover {
  background-color: #0b5ed7;
  border-radius: 10px;
  color: white;
}
</style>
