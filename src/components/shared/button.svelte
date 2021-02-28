<script lang="ts">
  export let disabled: boolean;
  export let type: string;
</script>

<style>
  button:disabled {
    opacity: .5;
    cursor: auto;
  }
</style>

<button type={type} class="px-10 py-2 border border-black rounded-md mt-6" {disabled}>
  <slot></slot>
</button>