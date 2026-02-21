import { Component, signal, WritableSignal, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgStyle } from "@angular/common";

interface MyStyle {
  backgroundColor: string,
  color: string,
  fontSize: string,
  padding: string,
  borderRadius: string
}


interface MyFourCardsStyle {
  backgroundColor: string,
  color: string,
  fontSize: string,
  padding: string,
  borderRadius: string
}



@Component({
  selector: 'app-basic-directive',
  imports: [MatButtonModule, NgClass, NgStyle],
  templateUrl: './basic-directive.html',
  styleUrl: './basic-directive.css',
})
export class BasicDirective {

  // using to the ngClass
  isActiveNgClass: WritableSignal<boolean> = signal<boolean>(false);

  onChangeNgClassStyle() {
    this.isActiveNgClass.update((current: Boolean) => !current);
  }

  // using to the class
  isActiveClass: WritableSignal<boolean> = signal<boolean>(false);

  onChangeClassStyle() {
    this.isActiveClass.update((current: boolean) => !current);
  }

  // using ngStyle

  myApplyStyle: WritableSignal<MyStyle> = signal<MyStyle>({
    backgroundColor: 'green',
    color: 'white',
    fontSize: '20px',
    padding: '10px',
    borderRadius: '15px'
  });

  onChangeNgStyle() {
    this.myApplyStyle.set({
      backgroundColor: 'pink',
      color: 'green',
      fontSize: '18px',
      padding: '10px',
      borderRadius: '7px'
    });
  }

  // style
  MyFourCardsStyle: WritableSignal<MyFourCardsStyle> = signal<MyFourCardsStyle>({
    backgroundColor: 'yellow',
    color: 'black',
    fontSize: '18px',
    padding: '10px',
    borderRadius: '7px'
  });

  myFourCardsChangeStyle() {
    this.MyFourCardsStyle.set({
      backgroundColor: 'gray',
      color: 'white',
      fontSize: '21px',
      padding: '14px',
      borderRadius: '7px'
    })
  }
}


