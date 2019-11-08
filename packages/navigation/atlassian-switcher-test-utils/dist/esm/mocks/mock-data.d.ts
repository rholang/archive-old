export interface MockData {
    AVAILABLE_PRODUCTS_DATA: object;
    RECENT_CONTAINERS_DATA: object;
    CUSTOM_LINKS_DATA: object;
    USER_PERMISSION_DATA: {
        manage: any;
        'add-products': any;
    };
    XFLOW_SETTINGS: object;
}
declare const ORIGINAL_MOCK_DATA: MockData;
export default ORIGINAL_MOCK_DATA;
