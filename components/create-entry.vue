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
    <button class="w-input" @click="add_multiple()">Add</button>
  </div>
</template>
<script>
import { filters } from "../mixins/filters.js";
export default { mixins: [filters] };
</script>