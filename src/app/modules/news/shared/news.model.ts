export class News {
  constructor(public id: number,
              public title: string,
              public content: string,
              public subtitle : string,
              public order : number,
              public visible : boolean,
              public author : string
              ) {
  }

}
