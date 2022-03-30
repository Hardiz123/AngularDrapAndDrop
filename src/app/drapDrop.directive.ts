import { Directive, EventEmitter, HostBinding, HostListener, Output } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { FileInterface } from "./fileInterface";

@Directive({
    selector: '[appDrag]',
  })
export class DrapDropDirective {

    @Output() fileDropped = new EventEmitter<FileInterface>();

    @HostBinding('style.background') private background = '#eee';

    constructor(private sanitizer: DomSanitizer) { }
    
    @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#999';
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#eee';
    }

    @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#eee';
        
        let imageFile: FileInterface;
        const file = event?.dataTransfer?.files[0];
        
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file!));
        imageFile = { file: file!, url: url };

        if (imageFile) {
            this.fileDropped.emit(imageFile);
        }
    }


}
