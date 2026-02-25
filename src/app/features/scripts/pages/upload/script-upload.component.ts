import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-script-upload',
  templateUrl: './script-upload.component.html',
  styleUrls: ['./script-upload.component.css']
})
export class ScriptUploadComponent implements OnInit {
  isDragging = false;
  uploading = false;
  processResult: any = null;

  constructor(private scriptService: ScriptService) { }

  ngOnInit(): void { }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.handleFile(file);
    }
  }

  handleFile(file: File) {
    this.uploading = true;
    this.processResult = null;
    this.scriptService.uploadScript(file).subscribe(result => {
      this.processResult = result;
      this.uploading = false;
    });
  }
}
