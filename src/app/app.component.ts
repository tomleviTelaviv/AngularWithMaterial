import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedRoute: string;
  shake: any;
  notification = true;
  states: any = {};
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    private elementRef: ElementRef) {
    this.states.state1 = 'shakestart';
    this.states.state2 = 'shakestart';
  }
  shakeMe(stateVar: string): void {
    this.states[stateVar] = (this.states[stateVar] === 'shakestart' ? 'shakeend' : 'shakestart');
  }

  shakeEnd(stateVar: string, event): void {
    this.states[stateVar] = 'shakeend';
  }


  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.selectedRoute = (event.url).replace('/', '');
        console.log(this.selectedRoute);
      }
    });
  }
}
