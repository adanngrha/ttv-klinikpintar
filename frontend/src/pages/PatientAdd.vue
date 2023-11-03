<template>
  <layout>
    <div class="center">
      <div class="add mx-5">
        <h3 class="text-center mb-3">Tambah Data Pasien</h3>
        <form>
          <div class="mb-3">
            <label for="fullName" class="form-label">Nama Lengkap</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="fullName"
                required
                v-model="patient.name"
              />
            </div>
          </div>

          <div class="row g-2 mb-3">
            <div class="col-md">
              <label for="gender" class="form-label">Jenis Kelamin</label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="gender"
                  required
                  v-model="patient.gender"
                >
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
            </div>
            <div class="col-md">
              <label for="age" class="form-label">Usia</label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  min="1"
                  v-model="patient.age"
                  required
                />
                <span class="input-group-text">Tahun</span>
              </div>
            </div>
          </div>

          <div class="row g-2 mb-3">
            <div class="col-md">
              <label for="bloodPressure" class="form-label"
                >Tekanan Darah</label
              >
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  id="bloodPressure"
                  min="1"
                  v-model="blood_pressure1"
                  required
                />
                <span class="input-group-text"> / </span>
                <input
                  type="number"
                  class="form-control"
                  id="bloodPressure"
                  min="1"
                  v-model="blood_pressure2"
                  required
                />
                <span class="input-group-text">mmHg</span>
              </div>
            </div>
            <div class="col-md">
              <label for="pulse" class="form-label">Denyut Nadi</label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  id="pulse"
                  min="1"
                  v-model="patient.pulse"
                  required
                />
                <span class="input-group-text">/ menit</span>
              </div>
            </div>
          </div>

          <div class="row g-2 mb-3">
            <div class="col-md">
              <label for="respiratoryRate" class="form-label"
                >Laju Pernapasan</label
              >
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  id="respiratoryRate"
                  min="1"
                  v-model="patient.respiratory_rate"
                  required
                />
                <span class="input-group-text">/ menit</span>
              </div>
            </div>
            <div class="col-md">
              <label for="bodyTemperature" class="form-label">Suhu Badan</label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  id="bodyTemperature"
                  min="1"
                  step="0.1"
                  v-model="patient.body_temperature"
                  required
                />
                <span class="input-group-text">Celcius</span>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button" @click="addPatient()">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "PatientsAdd",
  components: {
    Layout,
  },
  data() {
    return {
      blood_pressure1: null,
      blood_pressure2: null,
      patient: {
        name: null,
        gender: null,
        age: null,
        blood_pressure: null,
        pulse: null,
        respiratory_rate: null,
        body_temperature: null,
      },
    };
  },
  methods: {
    addPatient() {
      function areAllValuesNull(obj) {
        for (const key in obj) {
          if (obj[key] !== null) {
            return false;
          }
        }
        return true;
      }
      const isNullish = areAllValuesNull(this.patient);

      if (isNullish)
        return Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Masih ada data yang belum diisi",
          showConfirmButton: true,
          timer: 10000,
        });

      this.patient.blood_pressure =
        this.blood_pressure1 + "/" + this.blood_pressure2;
      axios
        .post("http://localhost:3000/api/patients", this.patient)
        .then((response) => {
          this.blood_pressure1 = null;
          this.blood_pressure2 = null;
          Object.keys(this.patient).forEach((i) => (this.patient[i] = null));
          return Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Data pasien berhasil ditambahkan",
            showConfirmButton: true,
            timer: 10000,
          });
        })
        .catch((error) => {
          return error;
        });
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
.add {
  min-width: 400px;
  max-width: 500px;
}
</style>
