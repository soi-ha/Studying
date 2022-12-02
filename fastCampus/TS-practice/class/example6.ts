abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setNamed(name: string) : void;
}

// new AbstractPerson()

class People extends AbstractPerson {
  setNamed(name: string): void {
    this._name = name;
  }
}

const p = new People();
p.setNamed("Mark");