<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div class="container-xl">
      <a class="navbar-brand" href="/">Shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products">Products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About Us</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Member
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/profile">Profile</RouterLink></li>
              <li><a class="dropdown-item" href="#">Setting</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'MenuBar'
}
</script>