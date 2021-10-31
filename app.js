const app = Vue.createApp({
  data() {
     return{
      enteredGoal:'',
      tasks:[],
      active:true,
      button:'Hide',
     }
    },
  methods:{
    addTasks(){
       this.tasks.push(this.enteredGoal)
    },
    toggleBtn(){
      if(this.enteredGoal === ''){
         this.button = 'Hide';
      }else{
        this.active = !this.active;
        if(this.active === true){
          this.button = 'Hide';
          this.active = 'hidden';
        }else{
          this.button = 'Show List';
        }
      }
    }
  },
});
app. mount('#assignment');