interface Person8 {
  name: string;
  age?: number;
  gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male',
};

p81.gender = 'female'