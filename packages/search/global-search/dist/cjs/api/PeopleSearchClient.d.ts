import { PersonResult } from '../model/Result';
export interface GraphqlResponse {
    errors?: GraphqlError[];
    data?: {
        AccountCentricUserSearch?: SearchResult[];
        Collaborators?: SearchResult[];
        UserSearch?: SearchResult[];
    };
}
export interface SearchResult {
    id: string;
    avatarUrl: string;
    fullName: string;
    department: string;
    title: string;
    nickname: string;
}
export interface GraphqlError {
    category: string;
    message: string;
}
export interface PeopleSearchClient {
    getRecentPeople(): Promise<PersonResult[]>;
}
export default class PeopleSearchClientImpl implements PeopleSearchClient {
    private serviceConfig;
    private cloudId;
    constructor(url: string, cloudId: string);
    private buildRecentQuery;
    private buildRequestOptions;
    getRecentPeople(): Promise<PersonResult[]>;
}
