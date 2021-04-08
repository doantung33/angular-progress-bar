import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input()
  backgroundColor = '#c71585';
  @Input()
  progress = '#4CAF50';
  @Input()
  width = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
