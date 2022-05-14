import { defineComponent } from "vue";
import { useUserStore } from "@/store/user";

export default defineComponent({
  name: 'usePinia',
  setup() {
    const useStore = useUserStore()
    return () => {
      return (
        <>
          <div>{useStore.name}</div>
          <button onClick={() => {useStore.updateName('biu')}}>点击修改name</button>
        </>
      )
    }
  }
})