import { Component, HostListener } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ChatService } from "./chat.service";
import { Observable } from "rxjs";
import { WebsocketService } from "./websocket.service";

export interface ChatMessage {
  message: string;
  userId: number;
  timestamp: Date;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  messageFormControl: FormControl = new FormControl("", Validators.required);
  userId = 1;
  messageList: ChatMessage[] = [];

  @HostListener("window:beforeunload", ["$event"])
  beforeUnloadHandler(event) {
    this.websocketService.disconnect();
  }

  constructor(
    private readonly chatService: ChatService,
    private readonly websocketService: WebsocketService
  ) {
    this.websocketService.connect(this.userId);
  }

  ngOnInit() {
    this.getRecentMessages();
    this.autoReloadMessages();
  }

  autoReloadMessages() {
    this.websocketService.refreshMessages$.subscribe(() => {
      this.getRecentMessages();
    });
  }

  getRecentMessages() {
    this.chatService.getMostRecentMessages().subscribe((x: ChatMessage[]) => {
      this.messageList = x;
    });
  }

  sendMessage() {
    this.chatService
      .sendMessage({
        message: this.messageFormControl.value,
        userId: this.userId,
        timestamp: new Date()
      })
      .subscribe(() => {
        this.messageFormControl.patchValue("");
      });
  }
}
