import { Component, OnInit } from '@angular/core';
import { Yaml2jsonService } from 'projects/angular/yaml2json/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yaml2json-showcase';
  jsonStr: string;
  yamlStr: string;
  constructor(private yamlService: Yaml2jsonService) {}

  ngOnInit(): void {
  }

  convertJson2Yaml($event) {
    console.log($event);
    this.yamlStr = this.yamlService.json2yaml($event);
  }

  convertYaml2Json($event) {
    console.log(String.raw`${$event}`);
    this.jsonStr = JSON.stringify(this.yamlService.yaml2json($event), null, 2);
  }
}
