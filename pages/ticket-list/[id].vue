<script>
export default defineComponent({
  setup() {
    const route = useRoute()
    const id = computed(() => route.value.params.id)
  },
})
</script>
<template>
  <PageLayout>
    <template #title>Tickets>{{ id }}</template>
  </PageLayout>
</template>
