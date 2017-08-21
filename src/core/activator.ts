export default class Activator {

  static createInstance<T>(type: { new(): T; }): T {
    return new type()
  }
}