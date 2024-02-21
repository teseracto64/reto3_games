import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit{
  websiteName:string='Games Store';
  @Input() optionSelected!:string;
  ngOnInit(): void {
     //this.removeClassSelected();
     //this.addClassSelected(this.optionSelected);
  }
 
   addClassSelected(id:string) {
    console.log('elemento:',document.getElementById(id)?.nodeValue);
   document.getElementById(id)?.classList.add('border-b-store-darkblue','border-b-2');
   
 }
 
 removeClassSelected() {
   document.getElementById("home")?.classList.remove('border-b-store-darkblue','border-b-2');
   document.getElementById("downloaded")?.classList.remove('border-b-store-darkblue','border-b-2');
   document.getElementById("upcoming")?.classList.remove('border-b-store-darkblue','border-b-2');
   document.getElementById("newgame")?.classList.remove('border-b-store-darkblue','border-b-2');
 }
 
  logout(){
 
  }
}
