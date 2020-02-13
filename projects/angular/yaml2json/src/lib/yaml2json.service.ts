import { Injectable } from '@angular/core';
import * as jsyaml from 'js-yaml';


@Injectable({
  providedIn: 'root'
})
export class Yaml2jsonService {
  constructor() {}

  json2yaml(str: string): string {
    const jsonObj = JSON.parse(str);
    if (jsonObj) {
      return jsyaml.dump(jsonObj);
    }
    return '';
  }

  yaml2json(yamlObj: string): string {
    console.log(yamlObj);
    if (yamlObj) {
      return jsyaml.load(yamlObj);
    }
    return '';
  }
}
