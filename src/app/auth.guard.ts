import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const data = localStorage.getItem("token");
  if(data){
    return true;
  }
  else {
    return false;
  }


};
