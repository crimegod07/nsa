import { LightningElement } from "lwc";
export default class Contactus extends LightningElement{
    formData={}
    formHandler(event){
        const {name, value} = event.target
        this.formData[name] = value
        
    }
    sendEmail(){
        console.log(this.formData)
        fetch('http://localhost:3002/api/v1/sendemail',{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.formData)
    }).then(Response=>{
        if(!response.ok){
            throw new Error('No Response from server')
        }
        return response.JSON()

    }).then(result=>{
        console.log("Message Sent",result)
        this.resetForm()
    }).catch(error=>{
        console.log(error)
    })
        
    }
    resetForm(){
        const form =  this.template.querySelector('form')
        if(form){
            form.reset()
        }
    }
}