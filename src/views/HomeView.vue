<script>
import Usuarios from "../components/NewUsuario.vue";
import usuarioList from "../components/UsuarioList.vue";
import { mapState, mapActions} from "vuex";

export default {
  components: {
    Usuarios,
    usuarioList,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  created() {
    this.getUser();
  },
};
</script>

<template>
  <main>
    <usuarioList v-if="user.length > 0"/>
    <Usuarios v-else/> 
     <!-- <usuarios/>
      <usuarioList/> -->
  </main>
</template>
<style>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
