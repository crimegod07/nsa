import {LightningElement} from 'lwc'
import NAV_DATA from '../../../data/navbarData.js'
export default class navbar extends LightningElement{
    navList =NAV_DATA

    isMobileToggle = false
    isDomLoaded = false
    
    get openMobileNav(){
        return `collapse navbar-collapse ${this.isMobileToggle && 'show'}`
    }

    get navMobileDesign(){
        return `fixed-top navbar navbar-expand-lg navbar-dark ${this.isMobileToggle ? 'bg-dark' : 'purple-gradient'}`
    }
    toggleMobileMenu(){
        this.isMobileToggle = !this.isMobileToggle
    }

    navSelection(event){
        event.preventDefault()
        if(this.isMobileToggle){
            this.toggleMobileMenu()
        }

        const name =   event.target.name.toLowerCase().replace(/\s+/g, '')
        let tagName = name === 'home'? `my-navbar`:`my-${name}`
          const elem = document.querySelector(tagName)
          elem.scrollIntoView()
    }

    renderedCallback(){
        if(this.isDomLoaded){
            return
        }else{
            const elem = this.template.querySelector('.nav-link')
            if(elem){
                elem.classList.add('active')
                this.isDomLoaded = true
            }
        }
        
    }
}
