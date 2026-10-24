import { Component, ElementRef, ViewChild, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  standalone: false
})
export class SplashScreenComponent implements OnInit, OnDestroy {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  @Output() animationCompleted = new EventEmitter<void>();

  isHidden = false;

  private lottieAnimation?: AnimationItem;
  private readonly minimumLoadingTime = 1800;
  private splashTimeout?: number;

  ngOnInit(): void {
    this.initLottieAnimation();
    this.splashTimeout = window.setTimeout(() => this.checkIfReadyToHide(), this.minimumLoadingTime);
  }

  ngOnDestroy(): void {
    this.lottieAnimation?.destroy();
    if (this.splashTimeout) {
      clearTimeout(this.splashTimeout);
    }
  }

  private initLottieAnimation(): void {
    try {
      this.lottieAnimation = lottie.loadAnimation({
        container: this.lottieContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/lotties/loader.json'
      });
    } catch (error) {
      console.warn('Error initializing Lottie animation:', error);
    }
  }

  private checkIfReadyToHide(): void {
    if (document.readyState === 'complete') {
      this.hideSplashScreen();
    } else {
      window.addEventListener('load', () => this.hideSplashScreen(), { once: true });
      setTimeout(() => this.hideSplashScreen(), 2000);
    }
  }

  private hideSplashScreen(): void {
    if (this.isHidden) return;
    this.isHidden = true;
    // Matches the CSS fade-out duration.
    setTimeout(() => this.animationCompleted.emit(), 800);
  }
}
