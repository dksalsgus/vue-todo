<template>
<div>
    <li v-for="item in todos" v-bind:key="item">{{item}}</li>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            todos:[]
        }
    },
    mounted(){
            this.getTodos();
    },
    methods:{
        getTodos() {
            axios
                .get("http://localhost:8080/todos",
                {headers:{
                'x-auth-token':localStorage.getItem("x-auth-token")
                }})
                .then((res) => {
                this.todos = res.data
                })
                .catch((e) => {
                alert("get 실패");
                console.log(e);
                });
            },
    }
}
</script>