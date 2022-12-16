import { createApp } from './vue.esm-browser.js'

window.app = createApp({
  // data() {
  //   return {

  //   }
  // },
  data: () => ({
    message: '',
    // messageClasses: {
    //   error: false
    // },
    messageClasses: '',
    firstName: '',
    email: '',
    searchValue: '',
    usersList:[
   
    ]
    
    
  }),
  computed:{
    filteredList() {
      return this.usersList.filter((user) => {
        return user.name.toLowerCase().includes(this.searchValue.toLowerCase())
      })
  },
  preview() {
    return this.firstName + ': ' + this.email
  }
},
  methods:{
    addList(){
      if (this.firstName === '' || this.email === '') {
          // this.messageClasses.error=true
          // this.message = 'Please enter all fields'
  //  this.showMessage('please enter All values' ,true)
          // setTimeout(this.removeMessage, 3000)
          this.showMsg('Please enter all fields', true)
            return
        }
    //    console.log(this.first_name ,this.email) 

   this.usersList.push({name:this.firstName,email:this.email})
  //  this.showMessage('User was Added')
   this.showMsg('User was Added')


    this.firstName = ''
    this.email = ''
    },

// showMessage(message, isError = false){

//   if (isError)
//   this.messageClasses = 'error'
// else
//   this.messageClasses = 'success'

// this.message = message

// setTimeout(this.removeMessage, 3000)
// }
//   },
//   removeMessage(){
//     // this.messageClasses.error=false
//     // this.message = ''
//     this.message = ''
//     this.messageClasses = ''
//   },

emptyUsers(){
 
this.usersList=[]
this.showMsg('userlist is emptied')
},
removeUser(index){
this.usersList.splice(index ,1)
},
removeAtLast(){
this.usersList.pop()
},
showMsg(message, isError = false, duration = 3000) {
  if (isError)
    this.messageClasses = 'error'
  else
    this.messageClasses = 'success'

  this.message = message

  setTimeout(this.removeMsg, duration)
},

removeMsg() {
  this.message = ''
  this.messageClasses = ''
}
,

}
}).mount('#app')