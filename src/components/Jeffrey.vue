<template>
    <div>

<form> 

<span class="error" v-show="!message">please enter a message </span>
<br/>
<textarea v-model="message"> </textarea>
<br/>
    <button type=submit> Click It</button>
</form>

<!-- <pre> {{$data | json }}</pre> -->

    </div>
</template>

<script>
export default {

    props: {

    },

    data() {
        
        return{
            message: '',
            }
        },

        methods:{
        

        },

    computed: {
    

    }

    }
</script>

<style scoped>

</style>


