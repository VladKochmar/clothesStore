<template>
  <div class="address-card d-flex justify-space-between gc-6 pt-5 px-8 pb-7">
    <div>
      <p class="mb-2">{{ userData.name }}</p>
      <p class="mb-2">
        {{ addressData.address }} <br />
        {{ addressData.city }}, {{ addressData.country }}, {{ addressData.postCode }}
      </p>
      <p v-if="userData?.phone">{{ userData?.phone }}</p>
    </div>
    <div class="actions d-inline-flex align-start gc-6">
      <v-dialog v-model="dialog" max-width="450">
        <template v-slot:activator="{ props: activatorProps }">
          <button id="edit-btn" v-bind="activatorProps">{{ $t('pages.addresses.edit') }}</button>
        </template>
        <address-editor
          :user-id="getUser?.uid"
          :address-id="addressData.id"
          @close="onClose($event)"
        />
      </v-dialog>
      <button id="delete-btn" @click="removeItemFromArray(userData?.id, 'addresses', addressData)">
        {{ $t('pages.addresses.delete') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import AddressEditor from '@/components/AddressEditor.vue'

defineProps({
  addressData: {
    type: Object,
    required: true
  },
  userData: {
    type: Object,
    required: true
  }
})

// Variable for Address Editor popup
import { ref, toRefs } from 'vue'
const dialog = ref(false)

import { useAuthStore } from '@/stores/auth'
const { getUser } = toRefs(useAuthStore())

import { useUsersStore } from '@/stores/users'
const { removeItemFromArray } = useUsersStore()

// Close Pop-up
function onClose(value) {
  dialog.value = value
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base/variables';

.address-card {
  font-size: 0.875rem;
  border: 1px solid $lavender;
}

.actions {
  color: $dimGray;
}
</style>
