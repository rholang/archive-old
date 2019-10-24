import * as React from 'react';
import {
  objectData,
  personData,
  containerData,
  makeAutocompleteData,
} from './utils/mockData';
import {
  QuickSearch,
  ResultItemGroup,
  ContainerResult,
  ContainerResultProps,
  PersonResult,
  PersonResultProps,
  ObjectResult,
  ObjectResultProps,
} from '@atlaskit/quick-search';
import algoliasearch from 'algoliasearch';
import Page24Icon from '@atlaskit/icon';


const data: DataShape[] = [
  {
    title: '',
    items: objectData(5)
  }
];

type DataShape = {
  title: string;
  items: (ContainerResultProps | PersonResultProps | ObjectResultProps)[];
};

type ResultShape = {
  anchor: string,
  content: string,
  hierarchy: {
    lvl0: string,
    lvl1: string,
    lvl2: string,
    lvl3: string,
    lvl4: string,
    lvl5: string,
  }
  url: string,
  objectID: string
};

var client = algoliasearch('NSSP00E9NN', '865b2e3bf9dc5bc41e5456eb49b9a471');
var index = client.initIndex('rholang-website');

const availableResultTypes: { [key: string]: React.ComponentClass<any> } = {
  person: PersonResult,
  object: ObjectResult,
  container: ContainerResult,
};

const mapResultsDataToComponents = (resultData: DataShape[]) => {
  if (!resultData || !resultData.length) {
    return 'Nothin` to see here';
  }

  return resultData.map((group: DataShape) => (
    <ResultItemGroup title={group.title} key={group.title}>
      {group.items.map(props => {
        const Result: React.ComponentClass = availableResultTypes[props.type!];
        return Result ? <Result key={props.resultId} {...props} /> : null;
      })}
    </ResultItemGroup>
  ));
};
const mockAutocompleteData = makeAutocompleteData();

// a little fake store for holding the query after a component unmounts
type Store = {
  query?: string;
};
const store: Store = {};

type Props = {
  fakeNetworkLatency?: number;
  isAutocompleteEnabled?: boolean;
};

type State = {
  query: string;
  results: DataShape[];
  isLoading: boolean;
  autocompleteText: string;
};

export default class BasicQuickSearch extends React.Component<Props, State> {

  static defaultProps = {
    fakeNetworkLatency: 0,
    isAutocompleteEnabled: false,
  };

  state = {
    query: store.query || '',
    results: data,
    isLoading: false,
    autocompleteText: '',
  };

  searchTimeoutId: any;

  searchData(query: string) {
    index.search({ query: query }, (err,  {hits}) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(hits);


      const algoliaData = hits as ResultShape[]
      const results = this.resultShapeTransformer(algoliaData)
      this.setState({
        results
      });
    });
  };

  resultShapeTransformer(resultData:ResultShape[]): DataShape[]  {
    const objects: ObjectResultProps[] = [];

    resultData.map(element => {
      if (element.hierarchy.lvl0 && element.hierarchy.lvl4 != ''){
        return objects.push({
          resultId: element.objectID,
          type: 'object',
          name: element.hierarchy.lvl0,
          containerName: element.hierarchy.lvl4,
          avatarUrl: "iconUrl",
          href: element.url,
          objectKey: element.objectID
        })
      }
    })

    const dataShape:DataShape[] = [{
      title :'Results',
      items: objects
    }]

    return dataShape;
  }


  setQuery(query: string) {
    store.query = query;
    this.setState({
      query,
    });
  }

  search = (query: string) => {
    if (this.searchTimeoutId) {
      clearTimeout(this.searchTimeoutId);
    }
    this.setState({
      isLoading: true,
    });
    this.setQuery(query);
    this.searchData(query);
    this.searchTimeoutId = window.setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, this.props.fakeNetworkLatency);
  };

  autocomplete = (query: string) => {
    const tokens = query.split(' ');
    const lastToken = tokens.slice(-1)[0];
    if (lastToken.length === 0) {
      this.setState({
        autocompleteText: query,
      });
      return;
    }
    const restTokens = tokens.slice(0, -1);
    const autocompleteList = mockAutocompleteData
      .filter(token => token.startsWith(lastToken))
      .map(token => restTokens.concat([token]).join(' '));
    this.setState({
      autocompleteText: autocompleteList[0],
    });
  };

  onSearchInput = ({ target }: React.FormEvent<HTMLInputElement>) => {
    const query = (target as HTMLInputElement).value;
    this.search(query);
    if (this.props.isAutocompleteEnabled) {
      this.autocomplete(query);
    }
  };

  render() {
    return (
      <QuickSearch
        isLoading={this.state.isLoading}
        onSearchInput={this.onSearchInput}
        onSearchSubmit={() => console.log('onSearchSubmit', this.state.query)}
        value={this.state.query}
        autocompleteText={
          this.props.isAutocompleteEnabled
            ? this.state.autocompleteText
            : undefined
        }
      >
        <div style={{ paddingLeft: '10px' }}>
          {mapResultsDataToComponents(this.state.results)}
        </div>
      </QuickSearch>
    );
  }
}
