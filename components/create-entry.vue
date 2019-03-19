<template>
  <div class="new-entry flex">
    <input class="single" type="text" name="name">
    <span class="flex">
      <input class="w-btn" type="text" name="health" @keyup="number_mask">
      <button class="w-input">Add</button>
    </span>
    <span class="flex">
      <input class="w-btn" type="text" name="how-many">
      <button class="w-input">Add</button>
    </span>
  </div>
</template>
<script>
import { filters } from "../mixins/filters.js";
export default { mixins: [filters] };
</script>