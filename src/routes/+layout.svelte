<script>
	import Header from "./Nav.svelte";
	import "./app.css";
	import Nav from "./Nav.svelte";
	import Footer from "./Footer.svelte";
</script>

<svelte:head>
	<!-- <script
		src="https://kit.fontawesome.com/ad7036b92f.js"
		crossorigin="anonymous"
	></script> -->
	<!-- <link
		rel="stylesheet"
		href="https://kit.fontawesome.com/ad7036b92f.css"
		crossorigin="anonymous"
	/> -->
	<script
		src="https://kit.fontawesome.com/ad7036b92f.js"
		crossorigin="anonymous"
	></script>
</svelte:head>
<Nav />
<main>
	<slot />
</main>
<Footer />
