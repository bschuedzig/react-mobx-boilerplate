import * as React from 'react';

interface IProps {

  name?: string;
  id?: number;
}

class Details extends React.Component < IProps, {} > {

  constructor() {

    super();
    console.log('Details.ctor()');
  }

  public render() {

    const name = this.props.name || '<not set>';
    const id = this.props.id || '<not set>';

    return (
      <div>
        <div>Name: {name}</div>
        <div>id: {id}</div>
      </div>
    );
  }
}

export default Details;
