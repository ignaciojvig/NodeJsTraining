import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WebsocketService {
  constructor(private toastr: ToastrService) {}

  private socket;
  private userId: number;

  refreshMessages$: Subject<boolean> = new Subject();

  connect(userId: number) {
    this.socket = io.connect("http://localhost:3000/");
    this.userId = userId;
    this.registerEvents();
  }

  disconnect() {
    console.log("Disconnecting");
    this.socket.emit("new-disconnection", this.userId);
    this.socket.close();
  }

  registerEvents() {
    if (!this.socket) {
      throw new Error("Connection to Websocket Failed!");
    }

    this.socket.on("connect", () => {
      console.log("Websocket fully connected");
      this.socket.emit("new-connection", this.userId);
    });

    this.socket.on("new-user-connected", data => {
      this.toastr.success(data);
    });

    this.socket.on("new-user-disconnected", data => {
      this.toastr.warning(data);
    });

    this.socket.on("refresh-messages", data => {
      this.toastr.info("You have new messages");
      this.refreshMessages$.next(true);
    });
  }
}
