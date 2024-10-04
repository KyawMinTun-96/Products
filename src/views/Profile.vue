<template>
    <div :style="{height: `calc(100vh - 150px)`}" class="d-flex justify-content-center align-items-center">
      <div class="col-md-3">
        <div class="card">
          <div class="card-body py-5">
            <div class="d-flex justify-content-center align-items-center mb-4">
              <div class="profile-image">
                <img src="@/assets/profile/profile.jpg" alt="..."/>
              </div>
            </div>
            <div class="text-center  text-muted">
              <h3 class="mb-4">Mr.John Does</h3>
              <p>johndoes@gmail.com</p>
              <p>09-123-456-789</p>
            </div>
            
          </div>
          <div class="card-footer d-flex justify-content-end">
            <button class="btn btn-sm btn-secondary me-3">Edit</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>

  <style>
  @media print {
    img {
      image-resolution: 300dpi;  /* Higher resolution for better print quality */
      resolution: 300dpi;        /* Fallback for older browsers */
    }
  }

    .profile-image {
      background-color: blue;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      overflow: hidden;
    }

    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: crisp-edges;
    }
  </style>