


  const { createApp } = Vue

  createApp({
    data() {
      return {
          todo:[
            
          ],
          valuee:null,
      }
    },
      methods: {
        

        remove(index){
          setTimeout(()=>{
            this.todo.splice(index,1)
          }, 1)
          
        },
        add(){
          if(this.valuee){
            this.todo.unshift({text:this.valuee,done:false})
            this.valuee=""
        }else{
          
        }

        },
        done(index){
          if(this.todo[index].done==true){
            this.todo[index].done=false
          }else{
            this.todo[index].done=true
          }
        },
      }
    
  }).mount('#app')
