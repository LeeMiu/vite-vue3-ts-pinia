<template>
  <div class="Empty">
    <div class="Empty-main">
      <img :src="img" alt="" />
      <p>啥都没找到</p>
      <h3>Mouse:{{x}} x {{y}}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import request from "@/utils/axios";
import { useMouse } from '@vueuse/core'
import img from "./empty.png"
import "./index.less";

export default defineComponent({
  name: 'empty',
  setup() {
    const { x, y } = useMouse()
    const fetchApi = async() => {
      const res = await request({
        url: '/api/xxx',
        method: 'get',
        params: {
          id: '1'
        }
      })
      console.log(res)
    }
    return {
      x,
      y,
      img,
      fetchApi,
    }
  }
})
</script>
