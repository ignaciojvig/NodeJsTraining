import { Test, TestingModule } from '@nestjs/testing';
import { RxWebsocketGateway } from './rx-websocket.gateway';

describe('RxWebsocketGateway', () => {
  let gateway: RxWebsocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RxWebsocketGateway],
    }).compile();

    gateway = module.get<RxWebsocketGateway>(RxWebsocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
