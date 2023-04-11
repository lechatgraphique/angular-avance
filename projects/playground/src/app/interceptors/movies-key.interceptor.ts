import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const params = 'api_key=9fcfd84b49752709e1ee2080f0448675&language=fr-FR';

    const requestWithParams = request.clone({
      url:request.url + (request.url.includes('?') ? `&${params}` : `?${params}`)
    });

    return next.handle(requestWithParams);
  }
}
