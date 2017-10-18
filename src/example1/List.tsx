import * as React from 'react';
import { Store } from 'model';
import { NavLink } from 'react-router-dom';

interface IProps {
  userSelected?: (id: number) => void;
}

class List extends React.Component<IProps, {}> {

  private handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {

    const dataset = (ev.target as any).dataset;
    const id = dataset.id;

    const userSelected = this.props.userSelected || (() => {});
    userSelected(id);
  }

  public render() {

    return (
      <div>
        { Store.users.map((user) =>
          <NavLink key={user.id} to={'/example1/' + user.id}><div>Item {user.id}</div></NavLink>
        )}
      </div>
    );
  }
}

export default List;
