import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: 'user', // 必填，唯一，此例中为一个user的state集合
  state: () => ({
      name: 'lee',
  }),
  getters: {
    name(state) {
      // do some format or others
        return state.name;
    },
  },
  actions: {
    // change state
    updateName(name: string) {
      this.name = name
    }
  }
})