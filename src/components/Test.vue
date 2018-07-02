<template>
    <div class="test">
    <h1>{{title}}</h1>
    <p>{{user.first_name}} </p>
    <p v-text="user.first_name"></p>
    <p v-html="user.name_html"></p>
    <p v-if="showName">its showing name if</p>
    <ul> 
        <li v-for="item in items"  v-bind:key="item.title">{{item.title}}</li><br/>
    </ul>
    <input type="text" v-model="title"> <br/> <br/>

    <button v-on:click="clickable"> Click to see</button><br/><br/>
    <input v-on:keyup="keyPres"><br/>
    <h3> {{full_name}}</h3>
    <h3> {{msg_prop}}</h3>
    </div>
</template>

<script>
export default {
    name: 'test',
    props: {
        msg_prop: {
            type: String,
            default: 'FooBar'
        }
    },
    data() {
        return{
            title: 'Helo world',
            user: {
                first_name: 'Amir',
                last_name: 'Shahzad',
                name_html: '<h1>Amir Shahzad</h1>',

            },
            showName: true,
             items: [
                 {title:'loop 1'},
                 {title:'loop 2'},
                 {title:'loop 3'},
                 {title:'loop 4'},
             ],
            }
        
        },
        methods:{
        clickable: function(){
            alert('its me testing');
        },
        keyPres: function(e){
            console.log(e.target.value);
        }
        },

    computed: {
        full_name: function(){
            return this.user.first_name+' '+this.user.last_name
        }
    }

    }
</script>

<style scoped>

</style>


