<template>
  <profile-master-page>
    <div class="details">
      <h1 class="title mb-10">{{ $t('profile-sidebar.details') }}</h1>
      <v-text-field
        id="userName"
        v-model="userData.name"
        :label="$t('fields.name')"
        variant="outlined"
        class="mb-3 w-100"
      ></v-text-field>
      <v-text-field
        id="phone"
        v-model="userData.phone"
        :label="$t('fields.phone')"
        variant="outlined"
        class="mb-3 w-100"
      ></v-text-field>
      <div class="mb-6">{{ $t('fields.email') }}: {{ userData?.email }}</div>
      <button id="save-btn" class="button button_black w-100" @click="update">
        {{ $t('buttons.save') }}
      </button>
      <template>
        <div class="text-center ma-2">
          <v-snackbar v-model="snackbar">
            {{ $t('snackbar.success') }}
            <template v-slot:actions>
              <v-btn color="pink" variant="text" @click="snackbar = false">
                <v-icon icon="fa-solid fa-xmark" />
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </template>
    </div>
  </profile-master-page>
</template>

<script setup>
import { toRefs, onMounted, ref } from 'vue'
import ProfileMasterPage from '@/masterpages/ProfileMasterPage.vue'

// Snackbar

const snackbar = ref(false)

// Getting User Data

import { useAuthStore } from '@/stores/auth'
const { getUser } = toRefs(useAuthStore())

import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
const { loadUserById, updateUser } = usersStore
const { getCurrentUser } = toRefs(usersStore)

const userData = ref({ name: null, email: null })

onMounted(async () => {
  await loadUserById(getUser.value.uid)
  userData.value = getCurrentUser.value
})

// Update User Data

function update() {
  updateUser({ id: getUser.value.uid, data: userData.value })
  snackbar.value = true
}
</script>

<style lang="scss" scoped>
.details {
  max-width: 30.625rem;
}
</style>
