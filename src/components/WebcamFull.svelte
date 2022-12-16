<script>
  import { onMount } from "svelte";

  let video;

  onMount(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    video.srcObject = stream;
  });
</script>

<div class="bg-black">
  <video autoplay bind:this={video} class="w-full h-screen" />
</div>
