<script lang="ts" setup>

import Computed from "../components/Computed.vue";
import mobile from "../components/mobile/Computed.vue"
import {deviceState} from "@/stores/device.ts";

</script>

<template>
  <component :is="deviceState().device? Computed: mobile"/>
</template>
