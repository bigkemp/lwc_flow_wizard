import { LightningElement,api  } from 'lwc';

export default class Cb_lwc_wizard extends LightningElement {
    @api title = "TITLE";
    @api footer = "FOOTER";
     disablenext = false;
    @api loading = false;
    screen_num = 1;
    @api finalbtnname = "Finish";
    @api closebtnname = "Cancel";

    renderedCallback(){

        // var host = this.template.querySelectorAll('.screens_container');
        let btns = this.template.querySelectorAll('lightning-button');
        this.backBtn = btns[0];
        this.nextBtn = btns[1];
        this.screens = this.querySelectorAll('c-cb_lwc_wizard_page');
        this.hideScreens(this.screen_num);
    }

    handleSlotChange(e){
        this.renderedCallback();
    }


    @api disableNext(){
        this.disablenext = true;
    }

    
    @api enableNext(){
        this.disablenext = false;
    }



    hideScreens(pageNumber){
        pageNumber-= 1;
        var screens = this.querySelectorAll('c-cb_lwc_wizard_page');
        for (let index = 0; index < screens.length; index++) {
            const element = screens[index];
            element.classList.add('slds-hide');
        }
         screens[pageNumber].classList.remove('slds-hide');
        if(pageNumber+1 == this.screens.length){
            this.nextBtn.label = this.finalbtnname;
        }else{
            this.nextBtn.label = "Next";
        }
        if(pageNumber+1 == 1){
            this.backBtn.label = this.closebtnname;
        }else{
            this.backBtn.label = "Back";

        }
         return screens[pageNumber].dataset.page;
    }

    shootEvent(type,value){
        const selectedEvent = new CustomEvent(type, {
            detail : value
          });
          this.dispatchEvent(selectedEvent);
    }


    handleClick(event){
        let btnType = event.target.name;
        switch (btnType) {
            case "next":
                if(this.screen_num < this.screens.length){//next
                    this.screen_num++;
                    this.disablenext = true;
                    let currentPage = this.hideScreens(this.screen_num);
                    // this.backBtn.label = "Back";
                    this.shootEvent("next",currentPage);
                }else{//finish
                    // this.shootEvent("finish","finish");
                    this.dispatchEvent(new CustomEvent('finish'));
                }
                break;
        
            case "back":
                if(this.screen_num  != 1){ //back
                    this.disablenext = false;
                    this.screen_num--;
                    let currentPage = this.hideScreens(this.screen_num);
                    // this.nextBtn.label = "Next";
                    this.shootEvent("previous",currentPage);
                }else{  //close
                   this.dispatchEvent(new CustomEvent('close'));
                   
                }
                break;
        }
    }

    
}