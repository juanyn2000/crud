<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in user" :key="usuario">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.password }}</td>
          <td>
            <button class="btn btn-delete" @click="deleteUser(usuario.id)">Eliminar</button>
            <button class="btn btn-add " @click="showModal">Agregar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div v-if="isModalVisible" class="modal-overlay">
      <div class="modal">
        <h1 class="titleModal">Agregar Usuario</h1>
        <form  @submit.prevent="addUserModal(userCreated)">
          <div>
            <label for="nombre">Nombre:</label>
            <input type="text" v-model="userCreated.nombre" required />
          </div>
          <div>
            <label for="email">Correo:</label>
            <input type="email"  v-model="userCreated.email" required />
          </div>
          <div>
            <label for="password">Contraseña:</label>
            <input type="password"  v-model="userCreated.password" required />
          </div>
          <div class="modal-actions">
            <button class="btn btn-add"  type="submit">Guardar</button>
            <button class="btn btn-delete"  type="button" @click="hideModal">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UsuarioList",
  data() {
    return {
      isModalVisible: false,
      userCreated: {
        nombre: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["getUser", "deleteUser", "addUserToState", 'addUser']),
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
      this.resetForm();
    },
    resetForm() {
      this.newUser = { nombre: "", email: "", password: "" };
    },
    addUserModal(usuario) {
     this.addUser(usuario);
      this.hideModal();
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped>
/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 250px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: start;
}

/* Modal */
.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.titleModal {
  text-align: center;
  font-size: 2rem;
  color: black;
  margin-bottom: 5px;
}
input {
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-top: 5px;
}

.btnTabla {
  padding: 8px 12px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


.btnTabla:hover {
  opacity: 0.9;
}
/* Contenedor principal */
.container {
  margin: 20px auto;
  padding: 20px;
  max-width: 800px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Título */
h1 {
  text-align: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 5px;
}

/* Tabla */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Encabezado de tabla */
thead tr {
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  text-align: left;
}

thead th {
  padding: 12px 15px;
  font-weight: bold;
}

/* Filas del cuerpo */
tbody tr {
  border-bottom: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #d1e7dd;
}

/* Celdas */
td {
  padding: 12px 15px;
  font-size: 0.9rem;
  color: #333;

}

/* Botones */
.btn {
  padding: 8px 12px;
  margin: 0 5px;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.btn-delete {
  background-color: #f44336; /* Rojo para eliminar */
}

.btn-delete:hover {
  background-color: #c62828;
}

.btn-add {
  background-color: #4caf50; /* Azul para agregar */
}

.btn-add:hover {
  background-color: #59be5d;
}
</style>
