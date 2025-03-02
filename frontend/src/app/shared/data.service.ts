import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [];
  constructor() { }

  getData(): string[] {
    return this.data;
  }

  addData(newData: string) {
    this.data.push(newData);
  }
}
