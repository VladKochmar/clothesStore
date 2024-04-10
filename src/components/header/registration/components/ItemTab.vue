<template>
  <div class="py-8">
    <v-text-field
      v-if="isSignUp"
      v-model="loginData.name"
      :rules="[rules.required, rules.email]"
      :label="$t('fields.name')"
      variant="outlined"
      class="mb-3"
    ></v-text-field>
    <v-text-field
      v-model="loginData.email"
      :rules="[rules.required, rules.email]"
      :label="$t('fields.email')"
      variant="outlined"
      class="mb-3"
    ></v-text-field>
    <v-text-field
      v-model="loginData.password"
      :append-inner-icon="show1 ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      :label="$t('fields.password')"
      :hint="$t('fields.hint')"
      counter
      variant="outlined"
      class="mb-3"
      @click:append-inner="show1 = !show1"
    ></v-text-field>
    <button
      :disabled="!isDataValid"
      class="button button_black w-100"
      @click="authAction({ ...loginData })"
    >
      {{ submitBtnTitle }}
    </button>
    <template v-if="!isSignUp">
      <div class="line-between">{{ $t('header.or') }}</div>
      <v-btn
        prepend-icon="fa-brands fa-google"
        size="large"
        class="w-100"
        @click="loginWithGoogleAccount"
      >
        {{ $t('buttons.google') }}
      </v-btn>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  isSignUp: {
    type: Boolean,
    default: false
  }
})

// Component Settings

const submitBtnTitle = computed(() => (props.isSignUp ? t('header.signup') : t('header.login')))

// Forms Settings

const loginData = reactive({
  email: null,
  password: null
})

const rules = reactive({
  required: (value) => !!value || t('fields.required'),
  min: (v) => v.length >= 8 || t('fields.hint'),
  emailMatch: () => t('fields.match')
})

const isDataValid = computed(() => loginData.email && loginData.password)
const show1 = ref(false)

// Auth functions

import { useAuthStore } from '@/stores/auth'
const { signUpWithWithEmailAndPassword, signInWithWithEmailAndPassword, loginWithGoogleAccount } =
  useAuthStore()

const authAction = props.isSignUp ? signUpWithWithEmailAndPassword : signInWithWithEmailAndPassword
</script>

<style lang="scss" scoped>
.line-between {
  display: flex;
  gap: 0 0.625rem;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0;
  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 50%;
    background-color: #252525;
  }
}
</style>
