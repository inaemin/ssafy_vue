<template>
  <div>
    <h5>손자컴포넌트</h5>
    <p>{{ dynamicName }}</p>
    <p>{{ person }}</p>
    <input type="text" v-model="name" />
    <button @click="updateName">이름개명신청</button>
  </div>
</template>

<script setup>
defineProps({
  myMsg: String,
  dynamicName: String,
  person: Object,
});

const emit = defineEmits(["updateNamess"]);
const updateName = function () {
  console.log("click update name -- grand child");
  emit("updateNamess", name.value);
};
import { ref } from "vue";
const name = ref("");
</script>

<style scoped></style>
