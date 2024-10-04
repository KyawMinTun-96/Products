<template>
    <div :style="{height: `calc(100vh - 150px)`}" class="d-flex justify-content-center align-items-center">
        <div class="col-md-4">
            <div class="card ">
                <div class="card-body p-4">
                    <h3 class="text-center mb-4">Login</h3>
                    <form>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="your email..."/>
                        </div>
                        <div class="input-group mb-4">
                            <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <div class="text-center">
                        <small><span class="text-muted">Don't have an account? </span><a href="#">Register</a></small> 
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>