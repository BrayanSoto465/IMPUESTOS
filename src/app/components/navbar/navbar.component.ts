import { Component, OnInit, HostListener, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { FormsModule } from '@angular/forms';
/* import { EventEmitter } from 'stream'; */

/* interface SideNavToggle {
  collapsed: boolean;
} */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

/*   @Output() onToggleSideNav: EventEmitter = new EventEmitter(); */  
  public navData: Array<any> = navbarData;
  public collapsed = true;
  public searchInput = '';

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  toogleOnClick():void {
    this.collapsed = !this.collapsed; 
  }

  searchOnClick():void {
    this.collapsed = !this.collapsed;
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

  search(event: any): void{
    if(event.target.value){
      this.navData = navbarData.filter( (element: any) => {
        return element.label.toLowerCase().includes(event.target.value.toLowerCase());
      });
    }else{
      this.navData = navbarData;
    } 
  }

}
