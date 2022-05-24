import { defineComponent } from 'vue';
import { useUserStore } from '@/store/user';
// import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'UsePinia',
  setup() {
    const useStore = useUserStore();
    // const { name, homeTown } = storeToRefs(useStore);
    return () => {
      return (
        <div>
          <div>直接store.state：{useStore.name}</div>
          {/* <div>
            storeToRefs解构：{name}
            {homeTown}
          </div> */}
          <div>getters: {useStore.getname}</div>
          <button
            onClick={() => {
              useStore.name = 'biu';
              setTimeout(() => {
                useStore.$patch({
                  // 多条数据修改
                  name: 'biu1',
                });
                setTimeout(() => {
                  useStore.updateName('biu2');
                }, 2000);
              }, 2000);
            }}
          >
            点击修改name
          </button>
        </div>
      );
    };
  },
});
