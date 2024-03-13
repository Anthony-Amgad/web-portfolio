import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favouritespage',
  templateUrl: './favouritespage.component.html',
  styleUrls: ['./favouritespage.component.scss']
})
export class FavouritespageComponent{

  public display: Map<string,boolean> = new Map<string, boolean>([
    ["contnet",false],
  ]);

  drawer(id:string){
    // let content = <HTMLElement>document.getElementById(id);
    // if(content.classList.contains("active")){
    //   this.display.set(id,false);
    // }else{
    //   this.display.set(id,true);
    // }
    
    var content = <HTMLElement>document.getElementById(id);
    if(content.clientHeight){
      content.style.height = '0';
    }else{
      var wrapper = <HTMLElement>document.getElementById('m'+id);
      content.style.height = (wrapper.clientHeight + 10) + "px";
    }
  }
}
