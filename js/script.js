const { createApp } = Vue

createApp({
    data(){
        return{
            
            todo_list:[
                {
                    text: "portare il cane",
                    done: false
                },
                {
                    text: "fare esercizio",
                    done: true
                },
                {
                    text: "cose da fare",
                    done: false
                },
                {
                    text: "cose da fare",
                    done: true
                },
                {
                    text: "cose da fare",
                    done: false
                },
                {
                    text: "cose da fare",
                    done: false
                },
                {
                    text: "cose da fare",
                    done: true
                },
                {
                    text: "cose da fare",
                    done: false
                },
                {
                    text: "cose da fare",
                    done: false
                },
                {
                    text: "cose da fare",
                    done: false
                },
            ]
        }
    },
    methods:{
        
        deleteTodo(index){
            this.todo_list.splice(index,1)
        }
    }

}).mount('#app')