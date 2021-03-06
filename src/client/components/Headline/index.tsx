import * as React from 'react';
const { HeadlineStyled } = require('./styles');

type TextAligment = 'center' | 'left' | 'right' | 'justify';

interface IProps extends React.Props<Headline> {
  color?: string;
  textAlign?: string;
};

class Headline extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    color: '#000000',
    textAlign: 'center',
  };
  public render() {
    return (
      <HeadlineStyled textAlign={this.props.textAlign} color={this.props.color}>
        {this.props.children}
      </HeadlineStyled>
    );
  }
}

export default Headline;
