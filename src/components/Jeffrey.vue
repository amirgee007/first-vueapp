<template>
<div>

<br/>
<form v-on:submit.prevent="handleIt" v-on:click="updatCount">
    <!-- v-on:click="count+=1"  -->

<span class="error" v-show="!message">please enter a message </span>
<br/>
<textarea v-model="message"> </textarea>
<br/>
    <button type=submit> Increment Count: {{count}}</button>
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
            count : 0
            }
        },

        methods:{
        
        handleIt : function(){
           
        },
        updatCount: function(){
            this.count += 1;
        }

        },

    computed: {
    

    } 

    }
</script>

<style scoped>

</style>


