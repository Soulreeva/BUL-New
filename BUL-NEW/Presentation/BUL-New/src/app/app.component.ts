import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { MobileService } from './services/mobile/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly _destroying$ = new Subject<void>();

  public title = 'BUL-New';

  constructor(private breakpointObserver: BreakpointObserver) {}

  private identifyIfMobile(): void {
    const isMobile: boolean = this.breakpointObserver.isMatched(MobileService.maxMobileWidth);
    MobileService.updateIsMobile(isMobile);
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.identifyIfMobile();
  }

  public ngOnInit(): void {
    this.identifyIfMobile();
  }

  public get isMobile(): boolean {
    return MobileService.isMobile;
  }
}
