<template>
	<div id="app">
		<h2>chidren component</h2>
		<div>
			<p><b>name:</b> {{name}}</p>
		</div>
	</div>
</template>
<script>
import children form './children.html'
export default {
	el: '#app',
	data: {
	},
	props: {
		name: String
	}
}
</script>