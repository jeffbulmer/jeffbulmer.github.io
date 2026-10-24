import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ParticlesService } from './services/particles/particles.service';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  appContentVisible = false;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private particlesService: ParticlesService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Jeff Bulmer | Software Developer');
    this.metaService.addTags([
      { name: 'keywords', content: 'Jeff Bulmer, software developer, portfolio' },
      { name: 'description', content: 'Personal site of Jeff Bulmer, software developer.' },
    ]);

    setTimeout(() => this.particlesService.init(), 100);
  }

  ngOnDestroy(): void {
    this.particlesService.destroy();
  }

  onSplashAnimationCompleted(): void {
    this.appContentVisible = true;
    this.loadingService.startAnimations();
  }
}
