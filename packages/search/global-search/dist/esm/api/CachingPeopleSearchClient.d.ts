import { PersonResult } from '../model/Result';
import PeopleSearchClientImpl from './PeopleSearchClient';
export declare class CachingPeopleSearchClient extends PeopleSearchClientImpl {
    prefetchPeople: Promise<PersonResult[]> | undefined;
    constructor(url: string, cloudId: string);
    getRecentPeople(): Promise<PersonResult[]>;
}
