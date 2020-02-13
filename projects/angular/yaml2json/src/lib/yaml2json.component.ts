import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor';
@Component({
  selector: 'lib-yaml2json',
  template: `
    <p>
      yaml2json works!
    </p>
    <div #editor></div>
  `,
  styles: []
})
export class Yaml2jsonComponent implements OnInit {
  @ViewChild('editor', { static: true }) editorContent: ElementRef;
  container: HTMLElement;

  constructor() {}

  ngOnInit(): void {
    this.container = this.editorContent.nativeElement;
    monaco.editor.create(this.container, {
      value: `const foo = () => 0;`,
      language: 'javascript',
      theme: 'vs-dark'
    });
  }
}
