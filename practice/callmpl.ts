// 구현부 
import { ICalculator } from "./cal";

export class Calculator implements ICalculator {
  add(a:number,b:number):number {
    return a+b;
  }
  minus(a:number,b:number):number {
    return a-b;
  }
  multiple(a:number,b:number):number {
    return a*b;
  }
}