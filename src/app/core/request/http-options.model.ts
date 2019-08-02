// HttpClient have request: http.request(method, url, options)
// This model for type checking of options;
// See more: https://angular.io/api/common/http/HttpClient#request (in overloads tab)
import {
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

export interface HttpOptionsModel {
  body?: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType: 'arraybuffer' | 'blob' | 'text' | 'json';
  withCredentials?: boolean;
}
