export class Player {
  constructor(public id: number,
              public name: string,
              public age: number,
              public blade:string,
              public rubber: string,
              public teams: number[],
              public strength: string
              ) {
  }

  getTeams() : string{
    return this.teams.toString();
  }
}
