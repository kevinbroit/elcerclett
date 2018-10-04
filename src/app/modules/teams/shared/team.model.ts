export class Player {
  constructor(
    public id : number,
    public name: string,
    public desc: string,
    public thumbnail: string,
    public image_small: string,
    public image_medium: string,
    public image_large: string
    ) {
  }
}

export class Team {
  constructor(
        public id : number,
    public players: Player[],
    public name: string
              ) {
  }
}
