import { Component } from '@angular/core';


@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.component.html',
  styleUrls: ['./projectspage.component.scss',
  ],
})
export class ProjectspageComponent {
  selected = 'Any'

  SelectedValue(){
    var select = <HTMLSelectElement>document.getElementById("Select");
    this.selected = select.options[select.selectedIndex].innerHTML;
  }

  open(url:string){
    window.open(url);
  }
}
