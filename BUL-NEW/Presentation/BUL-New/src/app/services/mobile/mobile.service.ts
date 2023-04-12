import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  public static maxMobileWidth: string = '(max-width: 639px)';
  public static isMobile: boolean = true;

  constructor() {}

  public static updateIsMobile(isMobile: boolean): void {
    MobileService.isMobile = isMobile;
  }
}
