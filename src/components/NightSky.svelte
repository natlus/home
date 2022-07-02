<script lang="ts">
	function rand() {
		return Math.floor(Math.random() * (2000 - 1) + 1);
	}

	function createStars(n: number) {
		const values = [...new Array(n)];

		return values.map(() => `${rand()}px ${rand()}px 1px rgba(255,255,255,0.45)`);
	}

	const starsSmall = createStars(500);
	const starsMedium = createStars(200);
	const starsLarge = createStars(25);
</script>

<div class="skybox">
	<div class="starset small" style="box-shadow: {starsSmall}" />
	<div class="starset medium" style="box-shadow: {starsMedium}" />
	<div class="starset large" style="box-shadow: {starsLarge}" />

	<slot />
</div>

<style>
	.skybox {
		height: calc(100vh);
		overflow: hidden;
		background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
	}

	.starset {
		background: transparent;
		border-radius: 5px;
	}

	.small {
		height: 1px;
		width: 1px;
		animation: animateStars 150s linear infinite;
		position: relative;
	}

	.small:after {
		content: ' ';
		position: absolute;
		top: 2000px;
		width: 1px;
		height: 1px;
		box-shadow: inherit;
		animation: animateStars 150s linear infinite;
		border-radius: 5px;
	}

	.medium {
		height: 2px;
		width: 2px;
		animation: animateStars 200s linear infinite;
	}

	.medium:after {
		content: "' '";
		position: absolute;
		top: 2000px;
		width: 2px;
		height: 2px;
		box-shadow: inherit;
		animation: animateStars 200s linear infinite;
		border-radius: 5px;
	}

	.large {
		height: 4px;
		width: 4px;
		animation: animateStars 300s linear infinite;
	}

	.large:after {
		content: ' ';
		position: absolute;
		top: 100px;
		width: 4px;
		height: 4px;
		box-shadow: inherit;
		animation: animateStars 300s linear infinite;
		border-radius: 5px;
	}

	@keyframes animateStars {
		from {
			transform: translateY(0px);
		}

		to {
			transform: translateY(-2000px);
		}
	}
</style>
