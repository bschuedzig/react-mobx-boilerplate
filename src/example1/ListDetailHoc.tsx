import * as React from 'react';

import { observer } from 'mobx-react';

import List from 'example1/List';
import Details from 'example1/Details';
import { Route } from 'react-router-dom';
import * as ReactRouter from 'react-router-dom';

import { Store } from 'model';

interface IProps extends ReactRouter.RouteComponentProps<any> {

}

@observer
class ListDetailHoc extends React.Component<IProps, {}> {

  private selectUser = (id: string) => {

    // Fetch user by id
    console.log('ListDetailHoc.selectUser');
    Store.selectAsync(+id);

  }

  public handleMatchParams(props?: IProps) {

    props = props || this.props;
    const params = props.match.params;

    if (params.id != null) {
      this.selectUser(params.id);
    }
  }

  public componentWillMount() {

    this.handleMatchParams();
  }

  public componentWillReceiveProps(newProps: IProps) {

    this.handleMatchParams(newProps);
  }

  public render() {

    // we need to consume the dependent variables in the render method
    // without the following lines the render() method would not be reavaluated on change
    // if though they are used in the <Route> call
    const name = Store.selected == null ? null : Store.selected.name;
    const id = Store.selected == null ? null : Store.selected.id;

    return (
      <div>
        <div id="col1">
          <List />
        </div>

        <div id="col2">
          <Details name={name} id={id} />
        </div>
      </div>
    );
  }
}

export default ListDetailHoc;
