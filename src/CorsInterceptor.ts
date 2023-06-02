import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptors implements NestInterceptor {
  constructor(private readonly options: { origin: string }) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { headers } = request;
    const origin = headers.origin || headers.referer;
    const allowedOrigins = Array.isArray(this.options.origin)
      ? this.options.origin
      : [this.options.origin];

    if (allowedOrigins.indexOf(origin) !== -1) {
      headers['Access-Control-Allow-Origin'] = origin;
      headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
      headers['Access-Control-Allow-Methods'] = 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS';
      headers['Access-Control-Allow-Credentials'] = true;
    }

    return next.handle();
  }
}