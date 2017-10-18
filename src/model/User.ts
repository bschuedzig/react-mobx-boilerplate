import { observable, action } from 'mobx';

class User {

  @observable public id: number;

  @observable public name: string;

  @action public static create(name: string, id: number): User {

    const instance = new User();
    instance.name = name;
    instance.id = id;
    return instance;
  }
}

export default User;
