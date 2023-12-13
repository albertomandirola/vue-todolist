const { createApp } = Vue

createApp({
    data(){
        return{
            new_todo: '',
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
                    text: "andare a fare la spesa",
                    done: false
                },
                {
                    text: "iniziare a fare regali di natale",
                    done: true
                },
                {
                    text: "comprare pecorino",
                    done: false
                },
                {
                    text: "guardare one piece",
                    done: false
                },
                {
                    text: "pulire casa",
                    done: true
                },
                
            ]
        }
    },
    methods:{
        
        deleteTodo(index){
            this.todo_list.splice(index,1)
        },
        addTodo(){
            let obj ={
                text : this.new_todo,
                done: false
            }
            this.todo_list.push(obj)
            this.new_todo = ''

        }
    }

}).mount('#app')