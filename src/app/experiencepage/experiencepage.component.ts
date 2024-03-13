import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencepage',
  templateUrl: './experiencepage.component.html',
  styleUrls: ['./experiencepage.component.scss']
})
export class ExperiencepageComponent implements OnInit {

displayKS = "none";
opacityKS = "0%";
displayFoto = "none";
opacityFoto = "0%";
displayWe = "none";
opacityWe = "0%";
displayNTI = "none";
opacityNTI = "0%";
displayWiro = "none";
opacityWiro = "0%";
displayAB = "none";
opacityAB = "0%";

ngOnInit(): void {
    
}

async openModal(m: any){
  switch (m) {
    case "KS":
      this.displayKS = "block";
      for(var i = 1; i <= 100; i++){
        this.opacityKS = i.toString() + "%";
        await new Promise(f => setTimeout(f, 1));
      }
      break;

    case "Foto":
      this.displayFoto = "block";
      for(var i = 1; i <= 100; i++){
        this.opacityFoto = i.toString() + "%";
        await new Promise(f => setTimeout(f, 1));
      }
      break;

      case "We":
        this.displayWe = "block";
        for(var i = 1; i <= 100; i++){
          this.opacityWe = i.toString() + "%";
          await new Promise(f => setTimeout(f, 1));
        }
        break;

        case "NTI":
          this.displayNTI = "block";
          for(var i = 1; i <= 100; i++){
            this.opacityNTI = i.toString() + "%";
            await new Promise(f => setTimeout(f, 1));
          }
          break;
        
        case "Wiro":
          this.displayWiro = "block";
          for(var i = 1; i <= 100; i++){
            this.opacityWiro = i.toString() + "%";
            await new Promise(f => setTimeout(f, 1));
          }
          break;
        
        case "AB":
          this.displayAB = "block";
          for(var i = 1; i <= 100; i++){
            this.opacityAB = i.toString() + "%";
            await new Promise(f => setTimeout(f, 1));
          }
          break;
  
    default:
      break;
  }
  
}

async onCloseHandled(m: any) {
  switch(m){
    case "KS":
      for(var i = 99; i >= 0; i--){
        this.opacityKS = i.toString() + "%";
        await new Promise(f => setTimeout(f, 1));
      }
      this.displayKS = "none";
      break;
    
    case "Foto":
      for(var i = 99; i >= 0; i--){
        this.opacityFoto = i.toString() + "%";
        await new Promise(f => setTimeout(f, 1));
      }
      this.displayFoto = "none";
      break;

    case "We":
      for(var i = 99; i >= 0; i--){
        this.opacityWe = i.toString() + "%";
        await new Promise(f => setTimeout(f, 1));
      }
      this.displayWe = "none";
      break;

    case "NTI":
      for(var i = 99; i >= 0; i--){
        this.opacityNTI = i.toString() + "%";
        await new Promise(f => setTimeout(f, 1));
      }
      this.displayNTI = "none";
      break;
    
    case "Wiro":
      for(var i = 99; i >= 0; i--){
        this.opacityWiro = i.toString() + "%";
        await new Promise(f => setTimeout(f, 1));
      }
      this.displayWiro = "none";
      break;
    
    case "AB":
      for(var i = 99; i >= 0; i--){
        this.opacityAB = i.toString() + "%";
        await new Promise(f => setTimeout(f, 1));
      }
      this.displayAB = "none";
      break;

    default:
      break;
  }
}


}
