import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChatMessage } from "./app.component";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  baseUrl = "http://localhost:3000/chat";

  constructor(private readonly httpClient: HttpClient) {}

  configHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
  }

  getMostRecentMessages() {
    return this.httpClient.get(
      this.baseUrl + "?pageSize=10&pageIndex=0",
      this.configHeaders()
    );
  }

  sendMessage(newMessage: ChatMessage) {
    return this.httpClient.post(this.baseUrl, newMessage, this.configHeaders());
  }
}
