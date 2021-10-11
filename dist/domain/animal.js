"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
void fly();
void run();
void bark();
var Dog = /** @class */ (function () {
  function Dog() {}
  Dog.prototype.fly = function () {};
  Dog.prototype.run = function () {
    console.log("Dog is running");
  };
  Dog.prototype.bark = function () {
    console.log("Dog is barking");
  };
  __decorate([Override], Dog.prototype, "void", void 0);
  __decorate([Override], Dog.prototype, "void", void 0);
  __decorate([Override], Dog.prototype, "void", void 0);
  return Dog;
})();
var Bird = /** @class */ (function () {
  function Bird() {}
  Bird.prototype.bark = function () {};
  Bird.prototype.run = function () {
    console.log("Bird is running");
  };
  Bird.prototype.fly = function () {
    console.log("Bird is flying");
  };
  return Bird;
})();
