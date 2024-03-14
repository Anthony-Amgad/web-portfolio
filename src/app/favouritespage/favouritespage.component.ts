import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-favouritespage',
  templateUrl: './favouritespage.component.html',
  styleUrls: ['./favouritespage.component.scss']
})
export class FavouritespageComponent implements AfterViewInit{

  numofcon = 0
  numofloaded = 0

  public display: Map<string,boolean> = new Map<string, boolean>([
    ["contnet",false],
  ]);

  ngAfterViewInit(): void {
    var contents = <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName('content');
    this.numofcon = contents.length - 1;

    for(var i = 0; i < contents.length; i++){
      if(contents[i].id!='color'){
        var url = $('#'+contents[i].id).css('background-image');
        url = url.match(/\((.*?)\)/)![1].replace(/('|")/g,'');

        var img = new Image();
        img.src = url;
        this.check(img);
          
        // console.log(url);
        
      }
    }

    // var loading = <HTMLElement>document.getElementById('loading');
    // var body = <HTMLElement>document.getElementById('body');
    // body.style.display = 'block';
    // loading.style.display = 'none';
  }

  check(img:HTMLImageElement){
    if(img.complete){
      this.count();
    }else{
      window.setTimeout(() => {this.check(img);}, 100);
    }
  }

  count(){
    this.numofloaded++;
    console.log(this.numofloaded+" "+this.numofcon)
    if(this.numofloaded == this.numofcon){
      var loading = <HTMLElement>document.getElementById('loading');
      var body = <HTMLElement>document.getElementById('body');
      body.style.display = 'block';
      loading.style.display = 'none';
    }
  }

  drawer(id:string){
    var content = <HTMLElement>document.getElementById(id);
    if(content.clientHeight){
      content.style.height = '0';
    }else{
      var wrapper = <HTMLElement>document.getElementById('m'+id);
      content.style.height = (wrapper.clientHeight + 10) + "px";
    }
  }

  open(url:string){
    window.open(url);
  }
}
