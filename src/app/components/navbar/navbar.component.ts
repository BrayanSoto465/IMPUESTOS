import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  toogleOnClick():void {
    document.querySelector('nav')?.classList.toggle("close");
  }

  searchOnClick():void {
    document.querySelector('nav')?.classList.remove("close");
  }

  switchOnClick():void {
    const body = document.querySelector('body');
    let modeText = document.querySelector(".mode-text");
    body?.classList.toggle("dark");
    
    if(modeText != null){
      if(body?.classList.contains("dark")){
        modeText.textContent = "Modo Claro"; 
      }else{
        modeText.textContent = "Modo Oscuro";   
      }
    }
  
  }

}
