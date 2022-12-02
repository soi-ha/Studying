abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setNamed(name: string) : void;
}

new AbstractPerson()