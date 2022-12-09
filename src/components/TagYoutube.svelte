<script>
  import toast from "only-toast";

  let link;
  let hasil = "";

  if (localStorage.hasil) {
    hasil = localStorage.hasil;
  }

  let tunggu_sebentar = false;

  const anti_cors = "https://cfv7gd.deta.dev/?url=";

  async function olah() {
    const standar = "https://www.youtube.com/watch?v="
    if (link.includes("youtu.be")){
    	link = standar + link.split("/").reverse()[0]
    }

  
    tunggu_sebentar = true;
    let ambil = await fetch(anti_cors + encodeURIComponent(link));
    ambil = await ambil.text();
    if (ambil) {
      tunggu_sebentar = false;
    }
    // console.log(ambil);

    const regex = /"keywords":\[.+\],"channelId"/gm;
    let ketemu = ambil.match(regex);
    if (ketemu) {
      ketemu = ketemu[0];
      ketemu = ketemu
        .replace(`"keywords":[`, "")
        .replace(`],"channelId"`, "")
        .replaceAll(`"`, "");
      // console.log(ketemu);
      hasil += ketemu + ",";
      localStorage.hasil = hasil;
    } else {
      toast("Tidak ada tag");
    }
    link = "";
  }

  function reset() {
    const tanya = confirm("Hapus semua tag yang sudah dikumpulkan?");
    if (tanya) {
      hasil = "";
      localStorage.removeItem("hasil");
    }
  }
</script>

<form action="" on:submit|preventDefault={olah}>
  <label for="" class="mb-2 block"
    >Masukkan Link YouTube (lalu tekan enter)</label
  >
  <input
    type="url"
    placeholder="https://www.youtube.com/watch?v=SqV_37jdXS8"
    class="w-full block border border-violet-800 p-2 mb-2"
    bind:value={link}
  />
</form>

<label for="" class="mb-2 block">
  Hasil
  {#if tunggu_sebentar}
    <span class="text-red-500">tunggu sebentar...</span>
  {/if}
</label>
<textarea
  name=""
  class="w-full block border border-violet-800 p-2"
  id=""
  bind:value={hasil}
  cols="30"
  rows="10"
/>
<button on:click={reset} class="inline-block mt-3 bg-red-500 text-white p-2"
  >reset</button
>
