<script>
	import Tailwind from './Tailwind.svelte';
  import { Router, Route, NotFound, redirect } from "./pager";
  
	import Dashboard from './pages/dashboard.svelte';
  import Login from "./pages/login.svelte";
  import axios from 'axios';
  import {getCookie} from "./utils/cookie"

  let url = "BASE_URL";

  const guard = async (ctx, next) => {
    let validatedUserViaToken = false;
    if (getCookie('cured-token')) {
      const {data} = await axios.get(`${url}/login/${getCookie('cured-token')}`)
      validatedUserViaToken = data.user;
    }
    if (!validatedUserViaToken.id) {
      redirect("/login");
    } else {
    }
  };
</script>

<style></style>

<Tailwind />
<main>
  <Router>
    <Route path="/" component={Dashboard} middleware={[guard]} />
    <Route path="/dashboard" component={Dashboard} middleware={[guard]}/>
    <Route path="/login" component={Login} />
    <!-- <Route path="/profile/:username" let:params>
      <h2>Hello {params.username}!</h2>
      <p>Here is your profile</p>
    </Route> -->
    <!-- <Route path="/news" middleware={[guard]}>
      <h2>Latest News</h2>
      <p>Finally some good news!</p>
    </Route> -->
    <NotFound>
      <h2>Sorry. Page not found.</h2>
    </NotFound>
  </Router>
</main>
