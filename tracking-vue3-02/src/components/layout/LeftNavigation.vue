<template>
    <div class="flex-grow-0 h-100 left-nav bg-left-nav d-flex flex-column">
        <div class="flex-grow-1">
            <router-link to="/" class="p-3 active">
                <i class="bi-house-fill fw-bold f-xx-large" />
            </router-link>
            <router-link to="/about" class="p-3">
                <i class="bi-info-circle-fill fw-bold f-xx-large" />
            </router-link>
        </div>
        <div class="flow-grow-0">
            <router-link :to="{name: 'SignUp', params: {}}" class="p-3">
                <i class="bi-gear-wide-connected fw-bold f-xx-large" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left-nav a {
  color: #666666;
  text-align: center;
}
.left-nav a.router-link-active {
  background-color: #e6e1e7;
  position: relative;
}
.left-nav a.router-link-active::before {
  background-color: #999999;
  position: absolute;
  width: 3px;
  height: 80%;
  margin-top: 10%;
  left: 0;
  top: 0;
  content: "";
}
</style>