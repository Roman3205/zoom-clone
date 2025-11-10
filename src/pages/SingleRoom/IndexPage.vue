<template>
  <div class="fullscreen">
    <div ref="videoConference" class="full-height"></div>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted} from 'vue'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { generateRandomID } from 'src/utils/index';
import { useRoute } from 'vue-router';

const videoConference = ref<HTMLElement | null>(null)
const route = useRoute()

onMounted(() => {
    const roomID = route.params.roomId as string || generateRandomID(10)
    const userId = generateRandomID(5)
    if(videoConference.value) {
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(parseInt(import.meta.env.VITE_ZEGO_APP_ID), import.meta.env.VITE_ZEGO_SERVER_SECRET, roomID, userId, `user_${Date.now()}`, 720)
        const zp = ZegoUIKitPrebuilt.create(kitToken)
        zp.joinRoom({
            container: videoConference.value,
            sharedLinks: [
                {name: 'Shareable Link',
                    url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference
            },
            maxUsers: 10
        })
    }
})
</script>

<style>

</style>