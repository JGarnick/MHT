<template>
	<div class="row-container flex wrap just-cont--space-between">
		<div class="left align-items--ce flex">
			<span class="name">{{data.name}}</span>
			<span class="current flex align-items--ce">
				<input type="text" name="current" :value="data.current" size="1">
			</span>
			<span class="divide">/</span>
			<span class="max">{{data.max}}</span>
			<button class="damage" name="damage" @click="damage()">
				<i class="fas fa-fist-raised"></i>
			</button>
			<button class="heal" name="heal" @click="heal()">
				<i class="fas fa-heart"></i>
			</button>
			<button class="conditions-button" name="conditions" @click="show_conditions()">
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
					<g>
						<g>
							<path
								d="M54.307,75.057c-0.044,0-0.084-0.001-0.129-0.002c-1.217-0.061-2.233-0.943-2.465-2.139L45.156,38.76l-3.525,11.983    c-0.33,1.122-1.359,1.893-2.531,1.893H18v-5.273h19.127l6.036-20.528c0.344-1.165,1.412-1.914,2.658-1.891    c1.216,0.061,2.234,0.943,2.463,2.138l6.562,34.157l3.523-11.984c0.33-1.122,1.361-1.892,2.529-1.892H82v5.273H62.873    l-6.038,20.528C56.504,74.291,55.473,75.057,54.307,75.057z"
							></path>
						</g>
					</g>
				</svg>
			</button>
		</div>
		<div class="right flex just-cont--end align-items--ce">
			<button name="remove" class="remove" @click="delete_row()">
				<i class="far fa-trash-alt"></i>
			</button>
		</div>
		<div class="conditions-wrapper flex">
			<v-condition v-for="(condition, index) in data.conditions" :key="index" :condition="condition"></v-condition>
		</div>
		<div class="conditions-container">
			<v-condition v-for="(condition, index) in all_conditions" :key="index" :condition="condition"></v-condition>
		</div>
	</div>
</template>
<script>
const $j = require("jquery");
export default {
	props: ["data", "id", "all_conditions"],
	mounted() {
		let button = $j(this.$el).find(".conditions-button");
		let position = button.position();
		let container = $j(this.$el).find(".conditions-container");

		container
			.css("top", position.top + button.outerHeight() + 15)
			.css("left", position.left)
			.hide();
	},
	methods: {
		damage() {
			this.$emit("damage", this.id);
		},
		heal() {
			this.$emit("heal", this.id);
		},
		delete_row() {
			this.$emit("delete_row", this.id);
		},
		show_conditions() {
			$j(this.$el)
				.find(".conditions-container")
				.toggle();
		}
	}
};
</script>