import api from '@/api';
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user', // 必填，唯一，此例中为一个user的state集合
  state: () => ({
    name: 'lee',
    homeTown: 'China',
  }),
  getters: {
    getname(state) {
      // do some format or others
      return state.name + 'biu';
    },
  },
  actions: {
    // change state
    updateName(name: string) {
      this.name = name;
    },
    setData(data) {
      console.log(data);
    },
    async login(account, pwd) {
      const { data } = await api.login(account, pwd);
      this.setData(data);
      return data;
    },
  },
});
