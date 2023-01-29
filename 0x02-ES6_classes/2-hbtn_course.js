/**
 * Implement a class named HolbertonCourse
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name == 'string') {
      this._name = name;
    } else {
      throw new TypeError(`Name must be a string`);
    }
    if (typeof length == 'number') {
      this._length = length;
    } else {
      throw new TypeError(`Length must be a Number`);
    }
    if (Array.isArray(students) && students.every((student) => typeof student === "string")) {
      this._students = students;
    } else {
      throw new TypeError(`Students must be an array of strings`);
    }
  }

  throwTypeException(var_name, type) {
    throw new TypeError(`${var_name} must be a ${type}`);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name == 'string') {
      this._name = name;
    } else {
      this.throwTypeException("Name", "string");
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length == 'number') {
      this._length = length;
    } else {
      this.throwTypeException("Length", "number");
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(typeof students)) {
      for (const student of students) {
        if (typeof(student) != 'string') {
          this.throwTypeException("Students", "array of array");
        }
      }
      this._students = students;
    } else {
      this.throwTypeException("Students", "array");
    }
  }
}
