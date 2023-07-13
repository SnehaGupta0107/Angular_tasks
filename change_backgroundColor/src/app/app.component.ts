import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 
  ngOnInit() {
  }
  
  color = '#ffffff';
  title = "Change";
  @ViewChild('color') setColor!: ElementRef;
  public colorize() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id! },
        func: updateBackgroundColor,
        args: [this.setColor.nativeElement.value]
      });
    });
  }
}

const updateBackgroundColor = (color: string) => document.body.style.backgroundColor = color;

