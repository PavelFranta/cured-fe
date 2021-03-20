<script lang="ts">
  import Logo from "../assets/nature.svg";
  import LoginForm from "../components/login/login-form.svelte";
  import axios from "axios";
  import {setCookie} from "../utils/cookie"
  import { redirect } from "../pager";

  let url = "BASE_URL";

  const validateLogin = async (values) => {
    const { data } = await axios.post(`${url}/login`, values);
    
    if (data.user.id) {
      console.log(data);
      setCookie("cured-token", data.user.token, 1);
      redirect("/dashboard");
    }
  };
</script>

<Logo />
<LoginForm submitHandler={validateLogin} />

<style>
</style>
