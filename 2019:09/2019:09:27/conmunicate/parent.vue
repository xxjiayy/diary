<template>
	<div id="app">
		<h1>parent component</h1>
		<children :name="msg"></children>
	</div>
</template>
<script>
	import children form './children'
	var vm = new Vue({
		el: '#app',
		data: {
			mag: 'joycee'
		},
		components: {
			children
		}
	});
	export default vm;
</script>