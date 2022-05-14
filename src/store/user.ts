import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: 'user', // 必填，唯一，此例中为一个user的state集合
  state: () => {
    return {
      name: 'lee'
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    }
  }
})