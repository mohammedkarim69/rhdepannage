import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  // private urlMailApi = 'https://mailthis.to/codeninja';
  private urlMailApi = 'https://formsubmit.co/guillaume.cometto@gmail.com'

  sendEmail(input: any)  {
    // console.log(input);
    let object = {
      name:input.value.lastnameFormControl,
      email:input.value.emailFormControl,
      comment:input.value.messageFormControl,
    }
    console.log(object);
    
    return this.http.post(this.urlMailApi, input.value, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              console.log(response);
              
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}
