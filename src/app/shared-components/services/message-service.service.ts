import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private _messageOpen = false;
  private _title: string = '';
  private _message: string = '';

  public get getTitle(): string {
    return this._title;
  }
  public get getMessage(): string {
    return this._message;
  }
  public get messageOpen(): boolean {
    return this._messageOpen;
  }
  public showMessage(title: string, message: string): void {
    this._title = title;
    this._message = message;
    this._messageOpen = true;
  }
  public closeMessage(): void {
    this._messageOpen = false;
  }
  constructor() { }
}
