class Person3 {
  private static CITY = 'Seoul';
  public hello() {
    console.log("hello~?", Person3.CITY);
  }
  public change() {
    Person3.CITY = "Suwon";
  }
}

const p3 = new Person3();
p3.hello();

const p4 = new Person3();
p4.hello();

p3.change(); // 값 변경하기

p4.hello(); // 변경된 값 다시 호출