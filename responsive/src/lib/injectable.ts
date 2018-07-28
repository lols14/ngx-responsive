import 'reflect-metadata';

export function CustomInjectable() {
  return function (target: Function) {
    const parentTarget = Object.getPrototypeOf(target.prototype).constructor;
    const parentAnnotations = Reflect.getMetadata('design:paramtypes', parentTarget);
    Reflect.defineMetadata('design:paramtypes', parentAnnotations, target);
  }
}
