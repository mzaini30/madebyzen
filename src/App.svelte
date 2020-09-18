<div class="container">
 <br>
 <h1 class="text-center">Made by Zen</h1>
 <hr>
 <div class="row">
  {#each datanya as x}
   <div class="col-6 col-sm-3">
    <div class="card" on:click={() => location.href = `aplikasi/${x}.signed.apk`}>
     <img class="card-img-top" src="gambar/{x.toLowerCase()}.png" alt={x}>
     <div class="card-body">
      <h5 class="card-title">{x}</h5>
     </div>
    </div>
   </div>
  {/each}
 </div>
</div>

<script>
 import {onMount} from "svelte"
 import {data} from "./data.js"
 let datanya = []
 onMount(() => datanya = data.sort())
</script>

<style>
 .card {
 	margin-bottom: 20px;
  user-select: none;
  cursor: pointer;
 }
</style>
