<template>
    <div class="user-form">
        <h2>Crear Nuevo Usuario</h2>
        <form @submit.prevent="addUser(userCreated)">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" v-model="userCreated.nombre" placeholder="Ingresa tu nombre" required>
          </div>
      
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" v-model="userCreated.email"  placeholder="Ingresa tu correo" required>
          </div>
      
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" v-model="userCreated.password" placeholder="Ingresa tu contraseña" required>
          </div>
      
          <div class="form-actions">
            <button type="submit" class="btn-submit" >Crear Usuario</button>
        
          </div>
        </form>
      </div>
      
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Usuarios',
    data() {
        return {
          userCreated: {
            nombre: '',
            email: '',
            password: ''
          }
        }
    },
    methods: {
        ...mapActions(['addUser'])
    }
};
</script>

<style scoped>
.user-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.user-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.btn-submit {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #45a049;
}

.btn-reset {
  background-color: #f44336;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-reset:hover {
  background-color: #d32f2f;
}

  
</style>