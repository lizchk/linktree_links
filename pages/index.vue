<template>
  <div class="w-screen h-screen">
    <templates-simple v-if="decodedData" :acc="decodedData" />
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <base-loading class="h-5 w-5" />
    </div>
  </div>
  <div class="fixed w-screen h-screen bg-gradient"></div>
</template>
<script setup>
import { decodeData } from "~/utils/transformer";

const config = useRuntimeConfig();
const decodedData = ref({});
decodedData.value = decodeData(config.public.appData);

</script>
<style scoped>
.bg-gradient {
  background: linear-gradient(45deg, #00dc82, #36e4da 50%, #0047e1);
  bottom: -30vh;
  filter: blur(20vh);
  height: 40vh;
  z-index: -100;
}
</style>
