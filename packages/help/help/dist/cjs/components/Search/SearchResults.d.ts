import { ArticleItem } from '../../model/Article';
export interface Props {
    searchResult?: ArticleItem[];
}
export declare const SearchResults: (props: Props) => JSX.Element;
export default SearchResults;
