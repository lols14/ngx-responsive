import 'reflect-metadata';

export function CustomInjectable() {
  return function (child: Function) {
    const parent = Object.getPrototypeOf(child.prototype).constructor,
      parentParamTypes = Reflect.getMetadata('design:paramtypes', parent);

    Reflect.defineMetadata('design:paramtypes', parentParamTypes, child);
  };
}



