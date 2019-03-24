var app = new Vue({
    el: '#app',
    data: {  
      toDolist: [
        {
          name:"Aleksei", surname:"Petrov", toDo:"Помыть посуду"
        },{
          name:"Mary", surname:"Ivanova", toDo:"Сходить в магазин"
        }
      ],
      thing: {
        name:"",
        surname:"",
        toDo:""
      }
    },
    methods:{
      add:function(){
        var copy = Object.assign({}, this.thing)
        this.toDolist.push(copy)
      },
      remove:function(index){
      this.toDolist.splice(index, 1)
      }
    }
   

  
  });
 