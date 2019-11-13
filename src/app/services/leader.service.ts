import { resolve } from 'q';
import { Leaders } from './../shared/leaders';
import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Promise< Leader[]>{
    return new Promise(resolve=>{
      setTimeout(() => {resolve(Leaders)
      }, 2000);
    });
  }
getLeader(id:string):Promise<Leader>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve( Leaders.filter((l)=>(l.id==id))[0]),2000);
  });
}
getFeatureLeader():Promise<Leader>{
  return new Promise( resolve=>{
    setTimeout(()=>resolve(Leaders.filter((l)=>l.featured)[0]),2000);
  });
}

}
// getDishes():Promise<Dish[]>{
//   return new Promise(resolve=>{
//     setTimeout(()=>resolve(DISHES),2000);
//   });
//   //simulate server latency with 2 secound
// }
