<template>
  <el-button type="info" @click="out"></el-button>
</template>

<script>
export default {
    name:'Home',
    methods : {
        out(){
            window.sessionStorage.clear();
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>