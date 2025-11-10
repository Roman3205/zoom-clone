<template>
  <div class="flex flex-center fullscreen bg-lime-5 text-white">
    <div>
      <div style="max-width: 600px; width: 100%;" class="q-mx-auto text-center">
        <img src="../assets/logoipsum-335.png"/>
        <h6 class="q-my-none q-mb-md">
          Video Conference
        </h6>
        <q-card class="bg-grey-3" flat>
          <q-card-section class="q-pa-xl">
            <div class="q-gutter-y-md">
              <q-input dense v-model="roomID" unelevated outlined placeholder="Enter room ID to join the meeting">
                <template #append>
                  <q-btn dense padding="2px 16px" :disable="!roomID" color="primary" label="Join" no-caps unelevated @click="() => router.push(`/room/${roomID}`)"></q-btn>
                </template>
              </q-input>
              <div class="flex justify-center">
                <q-btn color="primary" label="Or create a new meeting" no-caps unevelated @click="() => router.push(`/room/${generateRandomID(10)}`)"></q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import {onMounted, ref} from 'vue'
import { generateRandomID } from 'src/utils/index';

const roomID = ref('')

const router = useRouter()
const route = useRoute()

onMounted(() => {
  if(route.query.roomID) {
    router.push(`/room/${route.query.roomID}`)
  }
})
</script>

<style>

</style>