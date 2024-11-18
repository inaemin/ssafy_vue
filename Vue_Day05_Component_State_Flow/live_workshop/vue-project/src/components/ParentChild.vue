<template>
  <div>
    <h4>자식컴포넌트</h4>
    <p>{{ myMsg }}</p>
    <!-- <p>{{ "my-msg" }}</p>  이 방법은 불가능-->
    <p v-text="myMsg" />
    <p>{{ dynamicName }}</p>
    <p>{{ person }}</p>
    <hr />
    <button @click="$emit('someEvent')">부모전송</button>
    <button @click="buttonClick">부모전송2</button>
    <button @click="emitArgs">부모전송3</button>
    <hr />
    <ParentGrandChild
      :my-msg="myMsg"
      :dynamic-name="dynamicName"
      :person="person"
      @update-namess="updateNamesss"
    />
  </div>
</template>

<script setup>
// 부모로부터 받은 props를 사용하기 위한 방법은 크게 2가지
// defineProps(["myMsg"]); // 또는 'my-msg'
// 적어도 타입정도는 알려줘.. 이 방법을 권장
const props = defineProps({
  myMsg: String,
  dynamicName: String,
  person: Object,
});
console.log(props);
console.log(props.myMsg);

import ParentGrandChild from "./ParentGrandChild.vue";

const emits = defineEmits(["someEvent", "emitArgssss", "updateNamessss"]);
console.log(emits);
// 복잡할 경우엔 메서드를 이용해서 작성을 하는 것이 조금 더 가독성과 작업을 하기 좋다.
const buttonClick = function () {
  emits("someEvent");
};

const emitArgs = function () {
  emits("emitArgssss", 1, 2, 3);
};

const updateNamesss = function (newName) {
  console.log("click update name -- child");
  emits("updateNamessss", newName);
};
</script>

<style scoped></style>
