import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [Input,EventEmitter,Output],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Input() public bowl : any;

  @Output() public LaserLight = new EventEmitter();
  
  public SendMessage()
  {
    this.LaserLight.emit("Hello from child");
  }

}
