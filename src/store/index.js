import firebaseApp from "../firebaseConfig";
import { getFirestore, collection, getDocs, doc, addDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      user: [],
    };
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getUser({ commit }) {
      try {
        const db = getFirestore(firebaseApp);
        const querySnapshot = collection(db, "usuarios");
        onSnapshot(querySnapshot, (snapshot) => {
            const users = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            commit("setUser", users);
        });
       
      } catch (error) {
        console.log(error);
      }
    },
    async addUser(context, payload) {
      try {
        const db = getFirestore(firebaseApp);
        // await collection(db, "usuarios").add(payload);
        const docRef = collection(db, "usuarios");
        await addDoc(docRef, payload);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(context, payload) {
        try {
          const db = getFirestore(firebaseApp);
          const docRef = doc(db, "usuarios",payload);
          await deleteDoc(docRef);
        } catch (error) {
          console.log(error);
        }
      },
  },
});
export default store;
