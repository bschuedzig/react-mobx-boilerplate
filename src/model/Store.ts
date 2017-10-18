import { observable } from 'mobx';
import { action } from 'mobx';

import { User } from 'model';


class Store {

  @observable public users: User[] = [];

  constructor() {

    for (let x = 0; x < 5; x++) {
      this.users.push(User.create('John' + x, x));
    }
  }

  @observable public selected?: User;

  @action public reset() {

    this.selected = null;
  }

  private setSelected = (id: number) => {

    return action(() => {
      // tslint:ignore-next-line
      const selected = this.users.find((x) => x.id === id);
      this.selected = selected;
    });

  }

  public selectAsync = (id: number) => {

    this.reset();
    window.setTimeout(this.setSelected(id), 1000);
  }

}


export default new Store();
