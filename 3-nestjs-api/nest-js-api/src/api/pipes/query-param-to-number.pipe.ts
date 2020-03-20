import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class QueryParamToNumberPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException(
        `Param ${metadata.data} cannot be undefined!`,
      );
    }

    const parsedParam = parseInt(value, 10);

    if (isNaN(parsedParam)) {
      throw new BadRequestException(
        `The param ${metadata.data} must be an Integer`,
      );
    }

    return parsedParam;
  }
}
