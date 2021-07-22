import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {default as cartlist} from '../app/JSONfile.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen:Boolean=false;
  newVal:Number=0;
  vari:Number=0;
  records:any[]=cartlist;
  
  constructor(private route:Router){  }
 
  title = 'AngularProj';
  array:any[]=this.records;
  category=[
    {
      "key":"0",
      "name":"All"
    },
    {
    "key":"1",
    "name":"Premium" 
  },
  {
    "key":"2",
  "name":"Tamilnadu"}
]

  selectedoptionfun(value:any) {
    let val:string="";
    for (let i = 0;i< this.category.length; i ++){
      if(this.category[i].key == value.target.value){
        val = this.category[i].name;
      }
    }

    this.reciver(val)
  }
    
   reciver(selected:String ){
     
    this.array=[];
    if(selected=="All"){
      this.array=this.records;
    }else{
      this.records.map((item:any)=>{
          if(item.p_category==selected){
              this.array.push(item)
          }
      })}
   
    }
    call(val:any,list:any){
      this.vari = val.target.value;
    }
    
  save(value:any,list:any){
    console.log(this.vari)
    for(let i of this.records){
      if(i.p_id==list.p_id){
        i.p_Quantity=this.vari
    }
  }
    this.newVal = 0;
  this.isOpen=false;
  window.alert(JSON.stringify(list))
  console.log(this.records)
 }

 Edit(list:any){
  this.newVal=list.p_id;
 this.isOpen=true;
 this.vari = list.p_Quantity
 }
 cancel(){
  this.newVal = 0;
   this.isOpen=false;
 }
 textArea(list:any){
    
   
    if(list == this.newVal){
      return false;
    } 
    return true;
 }
 editBox(list:any){
  if(list == this.newVal){
    return true;
  } 
return false;
 }
 

}