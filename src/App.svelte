<div class="container">
 <br>
 <h1 class="text-center">Made by Zen</h1>
 <hr>
 <div class="row">
  {#each datanya as x}
   <div class="col-6">
    <div class="card" on:click={() => location.href = x.link}>
     <img class="card-img-top" src="{x.nama.toLowerCase}.jpg" alt={x.nama}>
     <div class="card-body">
      <h5 class="card-title">{x.nama}</h5>
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
 onMount(() => datanya = data)
</script>
