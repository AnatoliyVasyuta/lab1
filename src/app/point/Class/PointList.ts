import { Point } from "./Point";

export class PointList {
  p: Point[] = [];
  constructor() {
    console.log(`скрипт було виконано о  ${new Date().toLocaleTimeString()}`);
  }
   Belongs(x: number, y: number, r: number): boolean {
    // Проверка на принадлежность к четверти круга
    // console.log(`скрипт було виконано о  ${new Date().toLocaleTimeString()}`);
    if (x >= 0 && y >= 0 && (x * x + y * y <= r * r)) {
      return true;
    }
  
    // Проверка на принадлежность к треугольнику
    if (x <= 0 && y >= 0 && y <= x + r) {
      return true;
    }
  
    // Проверка на принадлежность к прямоугольнику
    if (x <= 0 && x >= -r && y <= 0 && y >= -r / 2) {
      return true;
    }
  
    // Если ни одно из условий не выполняется, точка вне зоны
    return false;
  }
  

  addPoint(x: number, y: number, r: number) {
    let b = this.Belongs(x, y, r);
    let p = new Point(x, y, b);
    this.p.push(p);
  }
}
