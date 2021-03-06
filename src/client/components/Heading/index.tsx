import * as React from 'react';
const H1 = require('./styles').H1;

type TextAligment = 'center' | 'left' | 'right' | 'justify';

interface IProps extends React.Props<Heading> {
  color?: string;
  textAlign?: string;
};

class Heading extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    color: '#007acc',
    textAlign: 'center',
  };
  public render() {
    return (
      <H1 textAlign={this.props.textAlign} color={this.props.color}>
        {this.props.children}
      </H1>
    );
  }
}

export default Heading;
