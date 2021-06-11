<template>
  <div
    class="container border border-2 rounded p-5 border-primary"
    style="width:500px;"
  >
    <form>
      <h1 class="mb-5 fw-normal text-center fw-bold">Sign in</h1>
      <div class="form-floating mt-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mt-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">
        Sign in
      </button>
    </form>
  </div>
</template>

