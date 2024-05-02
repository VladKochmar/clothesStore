<template>
  <div class="address-editor pt-8 px-12 pb-12">
    <div class="d-flex align-center justify-space-between mb-8">
      <h2 class="title-s">{{ $t('pages.addresses.popup-title') }}</h2>
      <button @click="closePopUp"><v-icon icon="fa-solid fa-xmark" /></button>
    </div>
    <v-select
      v-model="addressData.country"
      :label="$t('fields.country')"
      :item-title="`title.${[$i18n.locale]}`"
      item-value="title.en"
      :items="countries"
      variant="outlined"
    ></v-select>
    <v-text-field
      v-model="addressData.city"
      :label="$t('fields.city')"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      v-model="addressData.address"
      :label="$t('fields.address')"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      v-model="addressData.postCode"
      :label="$t('fields.post-code')"
      variant="outlined"
    ></v-text-field>
    <button id="save-btn" class="button button_black w-100" @click="onAction">
      {{ $t('pages.addresses.save') }}
    </button>
  </div>
</template>

<script setup>
// Getting current user ID
const props = defineProps({
  userId: {
    type: String,
    required: true
  },
  addressId: {
    type: String,
    required: false
  }
})

// Countries names import
import countries from '@/data/countries.json'

// Address data object
import { onMounted, ref } from 'vue'

const addressData = ref({
  id: new Date().getTime(),
  country: null,
  city: null,
  address: null,
  postCode: null
})

onMounted(() => {
  if (props.addressId) addressData.value = { ...findAddressById(props.addressId) }
})

// Methods
import { useUsersStore } from '@/stores/users'
const { getCurrentUser, addItemToArray, updateUser } = useUsersStore()

async function onAction() {
  if (!props.addressId) await addItemToArray(props.userId, 'addresses', addressData.value)
  else await updateAddresses()
  closePopUp()
}

function findAddressById(id) {
  return getCurrentUser.addresses.find((address) => address.id === id)
}

async function updateAddresses() {
  const index = getCurrentUser.addresses.findIndex((address) => address.id === props.addressId)
  getCurrentUser.addresses[index] = addressData.value
  updateUser({ id: props.userId, data: getCurrentUser })
}

// Close Pop-up Method
const emit = defineEmits(['close'])

function closePopUp() {
  emit('close', false)
}
</script>

<style lang="scss" scoped>
.address-editor {
  background-color: #fff;
}
</style>
