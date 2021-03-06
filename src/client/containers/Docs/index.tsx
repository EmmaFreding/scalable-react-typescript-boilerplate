import * as React from 'react';
import { Article, Headline, LoadingIndicator, Box, Section } from 'components';
import * as DocsActionCreators from './actions';
import { selectError, selectIsLoading, selectMarkdownContent } from './selectors';
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;
const { StyledHr } = require('./styles');

interface IAppProps extends React.Props<any> {
  error?: string;
  docs?: string;
  isLoading: boolean;
  actions: any;
};

const mapStateToProps = (state) => ({
  error: selectError(state),
  markdownContent: selectMarkdownContent(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    DocsActionCreators,
    dispatch,
  ),
});

class Docs extends React.Component<any, any> {
  public componentDidMount() {
    this.props.actions.loadMarkdown();
  }
  public render() {
    const {
      markdownContent,
      isLoading,
      error,
    } = this.props;
    return (
      <Section
        alignItems="center"
        flexDirection="column"
        pad="medium"
        full={{ vertical: true }}
        backgroundColor="#f5f5f5"
      >
        <Headline>
          Documentation
          <StyledHr />
        </Headline>
        {error &&
          <Box
            backgroundColor="#ff324d"
            size={{ horizontal: 'medium' }}
            pad="small"
            alignItems="center"
          >
            <p style={{ color: 'white' }}>{error.message}</p>
          </Box>
        }
        <LoadingIndicator isLoading={isLoading} />
        {typeof markdownContent === 'string' &&
          <Article content={markdownContent} />
        }
      </Section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Docs);
