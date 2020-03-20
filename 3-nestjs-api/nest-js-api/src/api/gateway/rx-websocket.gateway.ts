import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class RxWebsocketGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('new-connection')
  newUserConnected(client: Socket, userId: number) {
    this.server.emit(
      'new-user-connected',
      `User ${userId} has connected to our Chat!`,
    );
  }

  @SubscribeMessage('new-disconnection')
  newUserDisconnected(client: Socket, userId: number) {
    this.server.emit(
      'new-user-disconnected',
      `User ${userId} has disconnected from our Chat!`,
    );
  }

  broadcastNewMessage() {
    this.server.emit('refresh-messages', true);
  }
}
