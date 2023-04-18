<script>
  let name = "world";

  import { darkModeAtom } from "../stores";

  console.log(darkModeAtom);

  function handleClick() {
    darkModeAtom.set(!darkModeAtom.get());
  }
</script>

<div class="bg-blue color-red dark:(bg-red color-blue)">
  <div>svelte {name}</div>
  <button on:click={handleClick}>switch {$darkModeAtom}</button>
</div>
