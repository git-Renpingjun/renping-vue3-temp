{{#values.usePinia}}
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0
  })
})
{{/values.usePinia}}