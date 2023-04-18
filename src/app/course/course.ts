export class Course {
  name: string;
  professor: string;
  credicts: number;

  public constructor(name: string, professor: string, credicts: number) {
    this.name = name;
    this.professor = professor;
    this.credicts = credicts;
  }
}
