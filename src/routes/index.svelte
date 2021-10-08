<script>
  import { onMount } from "svelte";
  import TestWorker from "../worker?worker";
  import { base } from "$app/paths";

  let workerResponsePromise;

  onMount(() => {
    console.log('main thread:', base);
    
    const worker = new TestWorker();
    workerResponsePromise = new Promise((resolve) => {
      worker.addEventListener("message", (ev) => {
        resolve(ev.data);
      });
    });
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<p>main thread: "{base}"</p>

<p>worker thread:
  {#if workerResponsePromise !== undefined}
    {#await workerResponsePromise}
      loading...
    {:then response}
      "{response}"
    {/await}
  {/if}
</p>
