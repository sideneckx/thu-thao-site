<script lang="ts">
	import Button from "$lib/component/Button.svelte";
	import { fade } from "svelte/transition";
	import sound from "$lib/sounds/nang-gio-sai-gon.mp3";
	import bannerImg from "$lib/images/thu-thao-best.jpeg";

	let showPopup = false;
	let pauseSound = true;

	function onTapXBtnPopUp() {
		showPopup = false;
		// pauseSound = false;
	}

	let imgList = [
		"https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/271722398_1915116028659297_7030862256220968124_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=e4MlfbBpFlwAX8g7CUr&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDjl3mFM0_LqxgIsYF1uXG2F1Y57lwxPqU5VTrsM36rsg&oe=640D508B",
		"https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/277553130_1970740976430135_5568144928600264529_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2ZpdiekHLIQAX-YqkFi&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDPNsGnBBfU3cGa4uV1nlEd_g5p1g8tgLnbjMElmexkRg&oe=640D6771",
		"https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/277807302_1979068602264039_1568397177033441035_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=z7Hc7sOhNhgAX9KgT_K&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDHNHLwIk2e_SfvX6I4KRd82RtgqAW9KRz4Oc-JV3KzcA&oe=640C64EE",
		"https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/242279696_1828988693938698_8879930750323885340_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7Wd9fTpTjVoAX97boOt&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfD15ht3yvrHdH3dbRai9E8RmbVjiYEgGl8S1ya6Olqkrw&oe=640D409C",
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if showPopup}
	<div
		class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black/50"
		transition:fade={{ duration: 100 }}
	>
		<div
			class="mx-4 p-3 bg-main-500 rounded-lg max-w-2xl w-full relative shadow-md text-white flex flex-col items-center"
		>
			<button
				class="w-8 h-8 rounded-full bg-white absolute right-3 top-3 shadow-md"
				on:click={onTapXBtnPopUp}
			>
				<i class="fa-sharp fa-solid fa-xmark " />
			</button>
			<h3 class="text-3xl font-semibold text-white text-center px-6">
				Hi bạn Thảo
			</h3>
			<p class="my-4">Chào cậu đến với thế giới của mình</p>
			<Button title="Let's go" on:click={onTapXBtnPopUp} />
		</div>
	</div>
{/if}

<!-- <div class="bg-main-500">Hello Thảo</div> -->
<section>
	<div class="bg-black relative">
		<img
			class="h-[400px] object-cover sm:object-contain w-full opacity-90"
			src={bannerImg}
			alt="banner"
		/>
		<div
			class="absolute top-9 right-9 font-serif text-white text-4xl w-40 text-right"
			style="text-shadow: 2px 2px 5px black;"
		>
			Thu thảo yêu đời
		</div>
	</div>
</section>
<section class="flex flex-col items-center py-12 px-7">
	<div class="text-2xl text-center">
		Chúc em 8/3 xinh đẹp, hạnh phúc và luôn tươi cười nhá
	</div>
	<div class="text-center my-5">
		Hiện web được làm gấp rút nên ko có gì nhiều, e nghe nhạc đỡ ha:)))
	</div>
	<button
		class="bg-main-500 rounded-full w-16 h-16 text-white hover:opacity-90 border-4 border-white shadow-md"
		on:click={() => {
			pauseSound = !pauseSound;
		}}
	>
		<!-- {#if pauseSound}
			<i in:fade class="fa-solid fa-play fa-lg" />
		{:else}
			<i in:fade class="fa-solid fa-pause fa-lg" />
		{/if} -->
		{pauseSound ? "Play" : "Pause"}
	</button>
</section>
<section class="my-3">
	<div class="overflow-x-auto flex gap-x-7 h-52 pb-3">
		{#each imgList as url, index}
			<div
				class={`w-36 h-full flex-shrink-0 ${index == 0 ? "ml-4" : ""} ${
					index == imgList.length - 1 ? "mr-4" : ""
				} rounded-md drop-shadow-xl`}
			>
				<img
					src={url}
					class="rounded-md object-cover h-full w-full"
					alt="item"
				/>
			</div>
		{/each}
	</div>
</section>

<video hidden controls bind:paused={pauseSound}>
	<source src={sound} />
	<track kind="captions" />
</video>
