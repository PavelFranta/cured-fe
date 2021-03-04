<script lang="ts">
</script>

<style>
  .pulse {
	  animation: pulse 1s infinite;
    padding-left: 244px;
    padding-top: 34px;
  }

@keyframes pulse {
	0% {
		font-size: 25px;
	}

	70% {
		font-size: 16px;
	}

	100% {
		font-size: 25px;
	}
}
</style>

<div class="flex flex-col justify-center items-center h-full relative">
    <h1 class="text-2xl block mb-2">
      Zlaticko
    </h1>
    <h1 class="text-2xl block">
      vitej na dashboardu :-
    </h1>
    <span class="text-red-700 pulse absolute">*</span>
</div>