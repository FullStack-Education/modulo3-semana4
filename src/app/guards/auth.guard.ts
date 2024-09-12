import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(router.url !== '/login'){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};
