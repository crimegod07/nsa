import { LightningElement } from "lwc";
import SERVICES_DATA from '../../../data/servicesData'
export default class services extends LightningElement{
servicesData = SERVICES_DATA

connectedCallback(){
    this.formatdata()
}
formatdata(){
    this.servicesData = SERVICES_DATA.map(item=>{
        let className = `icon $(item.color)`
        return {...item, className}
    })
}
}