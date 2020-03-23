export default class Repository<T> {
  entities: T[] = [];

  save(enitity: T) {
    const withId = {
      ...enitity,
      id: this.entities.length + 1
    }
    this.entities.push(withId);
  }

  find(): T[] {
    return this.entities;
  }
}