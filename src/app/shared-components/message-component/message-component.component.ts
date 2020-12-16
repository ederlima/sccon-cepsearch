import { MessageServiceService } from './../services/message-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.scss']
})
export class MessageComponentComponent implements OnInit {

  constructor( private messageService: MessageServiceService ) {

  }
  public get show(): boolean {
    return this.messageService.messageOpen;
  }
  public get title(): string {
    return this.messageService.getTitle;
  }
  public get message(): string {
    return this.messageService.getMessage;
  }
  public closeMessage(): void {
    this.messageService.closeMessage();
  }
  ngOnInit(): void {

  }

}
