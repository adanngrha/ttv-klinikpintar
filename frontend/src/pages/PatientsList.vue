<template>
  <layout>
    <div class="justify-content-center text-center mx-5">
      <h3 class="mb-3">Daftar Pasien</h3>
      <div class="input-group mb-3 search">
        <span class="input-group-text">Cari Pasien</span>
        <input
          type="text"
          class="form-control"
          placeholder="Ketik nama disini..."
          v-model="searchQuery"
        />
      </div>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Jenis Kelamin</th>
            <th scope="col">Usia (Tahun)</th>
            <th scope="col">Tekanan Darah (mmHg)</th>
            <th scope="col">Denyut Nadi (per menit)</th>
            <th scope="col">Laju Pernapasan (per menit)</th>
            <th scope="col">Suhu Badan (per menit)</th>
            <th scope="col">Edit/Hapus</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(patient, index) in filteredPatients">
            <td>{{ index + 1 }}</td>
            <td>{{ patient.name }}</td>
            <td>{{ patient.gender }}</td>
            <td>{{ patient.age }}</td>
            <td>{{ patient.blood_pressure }}</td>
            <td>{{ patient.pulse }}</td>
            <td>{{ patient.respiratory_rate }}</td>
            <td>{{ patient.body_temperature }}</td>
            <td>
              <button
                @click="handleEdit(patient._id)"
                class="btn btn-sm btn-success mx-1"
              >
                Edit
              </button>
              <button
                @click="handleDelete(patient._id)"
                class="btn btn-sm btn-danger mx-1"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button
              class="page-link"
              @click="prevPage"
              :disabled="currentPage === 1"
            >
              Previous
            </button>
          </li>
          <li
            v-for="page in pageCount"
            :key="page"
            class="page-item"
            :class="{ active: currentPage === page }"
          >
            <button class="page-link" @click="() => gotoPage(page)">
              {{ page }}
            </button>
          </li>
          <li
            class="page-item"
            :class="{ disabled: currentPage === pageCount }"
          >
            <button
              class="page-link"
              @click="nextPage"
              :disabled="currentPage === pageCount"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import axios from "axios";

export default {
  name: "PatientsList",
  components: {
    Layout,
  },
  data() {
    return {
      searchQuery: "",
      patients: [],
      currentPage: 1,
      perPage: 10,
    };
  },
  created() {
    this.fetchPatients();
  },
  methods: {
    fetchPatients() {
      axios
        .get("http://localhost:3000/api/patients")
        .then((response) => {
          this.patients = response.data.data;
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleEdit(id) {
      this.$router.push(`/edit/${id}`);
    },
    handleDelete(id) {
      axios
        .delete(`http://localhost:3000/api/patients/${id}`)
        .then((response) => {
          this.fetchPatients();
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    gotoPage(page) {
      this.currentPage = page;
    },
  },
  computed: {
    filteredPatients() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = this.currentPage + this.perPage;
      return this.patients
        .filter((patient) => {
          return patient.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        })
        .slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.filteredPatients.length / this.perPage);
    },
  },
};
</script>

<style scoped>
.search {
  width: 50%;
  margin: auto;
}
</style>
