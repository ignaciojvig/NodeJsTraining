import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { isArray } from 'util';

@Catch()
export class ExceptionFilterHandler implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const argumentsObj = host.switchToHttp();

    const request = argumentsObj.getRequest<Request>();
    const response = argumentsObj.getResponse<Response>();

    let status;
    let message;
    let type;

    if (exception instanceof HttpException) {
      status = exception.getStatus();

      const exceptionObj = exception.getResponse() as any;

      if (isArray(exceptionObj.message)) {
        message =
          'Errors were found in your request, please address to them: ' +
          exceptionObj.message.join(', ');
      } else {
        message = exception.message;
      }

      type = exceptionObj.error;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = exception.message;
      type = exception.name;
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      type: type,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
