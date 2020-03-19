import {
  SubscribeMessage,
  WebSocketGateway,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class RxWebsocketGateway {
  @WebSocketServer() server;

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    return 'User successfully connected';
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    this.server.emit('A new user has connected');
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    this.server.emit('An user has disconnected');
  }
}
