import { LightningElement } from 'lwc';
import { doc } from 'prettier';

export default class App extends LightningElement {
    constructor(){
        super()
        window.addEventListener('scroll', this.windowScrollmethod)
    }

    windowScrollmethod = ()=>{
      const scrollDistance = document.documentElement.scrollTop
      const sections = this.template.querySelectorAll('.page-section')
      console.log(sections.length)
      sections.forEach((elem,index)=>{
          if(elem.offsetTop  -150 < scrollDistance){
              document.querySelector('.nav-link.active').classList.remove('active')
              document.querySelectorAll('.nav-link')[index].classList.add('active')
          }
      })
    }
}
