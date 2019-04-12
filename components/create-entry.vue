<template>
  <div class="new-entry flex align-items--fe">
    <label>
      <div style="font-size:1.5rem;">Name</div>
      <input class="single" type="text" name="name">
    </label>
    <label>
      <div style="font-size:1.5rem;">Health</div>
      <input class="w-btn" type="text" name="health" @keyup="number_mask">
    </label>
    <button class="w-input" @click="add_row()">Add</button>
    <label>
      <input class="w-btn" type="text" name="how-many">
    </label>
    <button class="w-input" @click="add_many()">Add</button>
  </div>
</template>
<script>
import { filters } from "../mixins/filters.js";
export default { 
  mixins: [filters],
  methods: {
    add_row(){
      let name = document.querySelector("[name='name']");
      let health = document.querySelector("[name='health']");
      
      this.$emit("add_row", name.value, health.value);
      name.value = "";
      health.value = "";
    },
    add_many(){
      let name = document.querySelector("[name='name']");
      let health = document.querySelector("[name='health']");
      let count = document.querySelector("[name='how-many']");
      
      this.$emit("add_many", name.value, health.value, count.value);
      name.value = "";
      health.value = "";
      count.value = "";
    }
  }
};
</script>