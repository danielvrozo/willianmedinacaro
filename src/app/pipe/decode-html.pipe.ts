import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'decodeHtml'
})

export class DecodeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
  
    transform(html: string): any {
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}