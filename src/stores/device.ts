import {defineStore} from "pinia";
import {ref} from "vue"

export const deviceState = defineStore("device", () => {
    const device = ref(true)

    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        // 当前设备是移动设备
        device.value = false
    }
    return {device}
})
