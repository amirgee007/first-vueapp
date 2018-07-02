<template>
    <div class="users">
        <h1>Users</h1>  

          <form v-on:submit="addUser">  
          <input type="text" v-model="newUser.name"> <br/>
          <input type="text" v-model="newUser.email"> <br/>
          <input type="submit" value="submit"> <br/> <br/>
          </form>
         <ul> 
        <li v-for="user in users" v-bind:key="user.name">
          <input type="checkbox" class="toggle" v-model="user.contracted"> <br/>
          <span :class="{contracted: user.contracted}">
            {{user.name}} : {{user.email}}
             <button v-on:click="deleteUser(user)"> Click to Del</button><br/><br/>
          </span>
        </li><br/>
        </ul>

    
    </div>
</template>

<script>
export default {
    name: 'users',
    
    data() {
        return{
            newUser: {},
            users: [
                 {name:'amir',email: 'a@a.com' ,contracted: false},
                  {name:'hadi',email: 'h@h.com', contracted: false},
             ],
            } 
        },

        methods:{
        addUser: function (e){
            this.users.push({
            name: this.newUser.name,
            email: this.newUser.email,
            contracted: false
            });

            e.preventDefault();
        },

        deleteUser: function (user){
            this.users.splice(this.users.indexOf(user), 1);
            e.preventDefault();
        }
         },
          created: function(){
            this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(function(response){
                this.users = (response.data);
            });
        }
    }
</script>

<style scoped>

.contracted {
    text-decoration: line-through;
}
</style>


