<script lang="ts">
  import Login32 from "carbon-icons-svelte/lib/Login32";
  import Password32 from "carbon-icons-svelte/lib/Password32";
  import Button from "../shared/button.svelte";
  import Bee24 from "carbon-icons-svelte/lib/Bee24";
  import * as yup from "yup";
  import { Form, Input } from "sveltejs-forms";

  async function handleSubmit({ detail: { values, setSubmitting, resetForm } }) {
    setTimeout(async () => {
      try {
        const res = await fetch('https://cured-api.herokuapp.com/users', {
          method: 'GET',
        })
      } catch (error) {
        console.log(error) 
      }
      setSubmitting(false);
    }, 10000);

    resetForm({
      email: '',
      password: '',
    });
  }

  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().min(4),
  });

  const initialValues = {
    email: "",
    password: "",
  };
</script>

<style>
  :global([data-carbon-icon="Bee24"]) {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	  transform: scale(1);
	  animation: pulse 3s infinite;
  }

  @keyframes pulse {
    0% {  
      transform: scale(0.6);
      transform: rotate(20deg);
    }

    20% {
      transform: scale(1);
      transform: rotate(-20deg);
    }

    60% {
      transform: scale(0.4);
      transform: rotate(40deg);
    }

    80% {
      transform: scale(0.6);
      transform: rotate(-80deg);
    }

    100% {
      transform: scale(0.6);
      transform: rotate(20deg);
    }
  }
</style>

<Form
  {schema}
  {initialValues}
  validateOnChange={true}
  on:submit={handleSubmit}
  let:isSubmitting
  let:isValid
  class="flex flex-col items-center"
>
  <div class="flex flex-col items-center">
    <div class="flex mb-2">
      <Login32 class="mr-2" />
      <Input name="email" placeholder="cured@example.com" />
    </div>

    <div class="flex">
      <Password32 class="mr-2" />
      <Input name="password" placeholder="password" type="password" />
    </div>

    <Button type="submit" disabled={!isValid}>
      <div class="flex relative">
        {#if isSubmitting}
          <Bee24 class="absolute -left-8 bee shadow-sm"/>
        {/if}
        Sign in
      </div>
    </Button>
  </div>
</Form>
