<script>
  import { onMount } from "svelte";

  let video;

  onMount(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    video.srcObject = stream;

    window.addEventListener("click", () => {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
      } else {
        video.requestPictureInPicture();
      }
    });
  });
</script>

<div class="min-h-screen p-4 text-center">
  <h1 class="text-3xl font-bold mb-2">Webcam Online</h1>
  <p class="mb-5">
    Klik di sembarang tempat, untuk menjalankan mode Picture in Picture
  </p>
  <video autoplay bind:this={video} class="mx-auto w-100" />
</div>

<style>
  video {
    box-shadow: 10px 10px 0 0 black;
  }
</style>
