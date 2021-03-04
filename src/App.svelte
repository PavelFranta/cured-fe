<script>
	import Tailwind from './Tailwind.svelte';
  import { Router, Route, NotFound, redirect } from "./pager";
  
	import Dashboard from './pages/dashboard.svelte';
  import Login from "./pages/login.svelte";

  const data = { foo: "bar", custom: true };

  const guard = (ctx, next) => {
    // check for example if user is authenticated
    if (true) {
      redirect("/login");
    } else {
      // go to the next callback in the chain
      next();
    }
  };
</script>

<style>
</style>

<Tailwind />
<main>
  <Router>
    <Route path="/" component={Login} {data} />
    <Route path="/dashboard" component={Dashboard} />
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
