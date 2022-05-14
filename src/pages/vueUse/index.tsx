import { defineComponent, onMounted, ref, reactive } from "vue";
import { onClickOutside, useMouse } from "@vueuse/core";

export default defineComponent({
  name: 'vueUse',
  setup() {
    const el = ref()
    const mouse = reactive(useMouse())
    onMounted(() => {
      onClickOutside(el, () => {
        alert('出来了')
      })
    })
    return () => {
      return (
        <>
          <h1 ref={el}>click outside of me</h1>
          <h3>Mouse: {mouse.x} x {mouse.y}</h3>
        </>
      )
    }
  }
})