import { LightningElement } from "lwc";
export default class Contactus extends LightningElement{
    formData={}
    formHandler(event){
        const {name, value} = event.target
        this.formData[name] = value
        
    }
    sendEmail(){
        console.log(this.formData)
        fetch('https://gentle-oasis-69102.herokuapp.com/api/v1/sendemail',{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.formData)
    }).then(response=>{
        if(!response.ok){
            throw new Error('No Response from server')
        }
        return response.json()

    }).then(result=>{
        console.log("Message Sent", result)
        this.resetForm()
    }).catch(error=>{
        console.error(error)
    })
        
    }
    resetForm(){
        const form =  this.template.querySelector('form')
        if(form){
            form.reset()
        }
    }
}