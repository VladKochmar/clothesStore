<template>
  <profile-master-page>
    <div>
      <div class="d-flex align-center justify-space-between mb-10">
        <h1 class="title">{{ $t('pages.addresses.title') }}</h1>
        <v-dialog v-model="dialog" max-width="450">
          <template v-slot:activator="{ props: activatorProps }">
            <button v-bind="activatorProps" class="cross-button">+</button>
          </template>
          <address-editor :user-id="getUser.uid" @close="onClose($event)" />
        </v-dialog>
      </div>
      <template v-if="getCurrentUser?.addresses?.length">
        <address-item
          v-for="address in getCurrentUser?.addresses"
          :key="address.id"
          :address-data="address"
          :user-data="{ id: getUser.uid, name: getCurrentUser.name, phone: getCurrentUser?.phone }"
        />
      </template>
      <p v-else>{{ $t('pages.addresses.empty') }}</p>
    </div>
  </profile-master-page>
</template>

<script setup>
import ProfileMasterPage from '@/masterpages/ProfileMasterPage.vue'
import AddressItem from '@/components/AddressItem.vue'
import AddressEditor from '@/components/AddressEditor.vue'

import { ref, toRefs, onMounted } from 'vue'

// Variable for Address Editor popup
const dialog = ref(false)

// Getting User Data

import { useAuthStore } from '@/stores/auth'
const { getUser } = toRefs(useAuthStore())

import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()

const { loadUserById, loadUsersList } = usersStore
const { getCurrentUser } = toRefs(usersStore)

onMounted(async () => {
  await loadUserById(getUser.value.uid)
  await loadUsersList()
})

// Close Pop-up

function onClose(value) {
  dialog.value = value
}

/*
const addresses = [
  {
    id: 1,
    name: 'Vlad Kochmar',
    city: 'Миколаїв',
    country: 'Україна',
    address: 'Проспект Миру 11',
    postcode: '54000',
    phone: '+380730406906'
  },
  {
    id: 2,
    name: 'Vlad Kochmar',
    city: 'Wroclaw',
    country: 'Poland',
    address: 'Ulanowskiego 1/3',
    postcode: '53-144',
    phone: '+380730406906'
  }
]
*/
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/variables';

.cross-button {
  color: $eclipse;
  font-weight: 700;
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1.5px solid $eclipse;
}
</style>
