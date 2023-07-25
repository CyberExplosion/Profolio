import { Component, Input, OnInit } from '@angular/core';
import { TechLogoPath } from '../tech-list';
import { INavAnchor } from '../nav-configs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonIcons, ICommonIcons } from '../my-commonIcons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})

export class ProjectCardComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) { }

  techLogoPath = TechLogoPath;
  isInViewport = false;
  alreadyViewed = false;
  lastScrollPosition = 0;

  @Input() imgPath?: String;
  @Input() title?: String;
  @Input() techList?: String[];
  @Input() description?: String;

  @Input() mainBtnInfo?: INavAnchor;
  @Input() sideBtnInfo?: INavAnchor;


  safeSvgIcons: {[key: string]: SafeHtml} = {}
  commonIconDict: ICommonIcons = CommonIcons;

  transform (html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit (): void {
    for (const key in CommonIcons) {
      if (Object.prototype.hasOwnProperty.call(CommonIcons, key)) {
        const element = CommonIcons[key];
        this.safeSvgIcons![key] = this.transform(element);
      }
    }
  }
}