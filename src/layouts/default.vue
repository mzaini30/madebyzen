<script setup="">
import "@unocss/reset/tailwind.css";
import "uno.css";

const daftar_isi = [
  {
    judul: "Beranda",
    link: "/",
  },
  {
    judul: "Pembuat Tag YouTube",
    link: "/tag-youtube",
  },
];
</script>

<template>
  <h1
    class="w-full p-3 bg-violet-500 text-white border-b border-b-violet-800 border-b-5"
  >
    Made by Zen
  </h1>
  <section class="p-3 grid grid-cols-12 gap-5">
    <aside class="col-span-12 sm:col-span-2">
      <div class="border">
        <router-link
          class="block p-3 text-sm bg-violet-300 hover:bg-violet-500 hover:text-white"
          v-for="x in daftar_isi"
          :to="x.link"
          >{{ x.judul }}</router-link
        >
      </div>
    </aside>
    <main class="col-span-12 sm:col-span-10">
      <slot></slot>
    </main>
  </section>
</template>
