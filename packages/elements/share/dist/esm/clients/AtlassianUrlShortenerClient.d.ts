import { ProductId } from '../types';
export interface ShortenRequest {
    path: string;
    cloudId: string;
    product: 'jira' | 'confluence';
}
export interface ShortenResponse {
    shortUrl: string;
}
export interface UrlShortenerClient {
    isSupportedProduct(product: ProductId): boolean;
    shorten(fullUrl: string, cloudId: string, product: ProductId): Promise<ShortenResponse>;
}
export declare class AtlassianUrlShortenerClient implements UrlShortenerClient {
    isSupportedProduct(product: ProductId): boolean;
    shorten(fullLink: string, cloudId: string, productId: ProductId): Promise<ShortenResponse>;
}
