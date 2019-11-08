"use strict";
// import {
//   RequestServiceOptions,
//   ServiceConfig,
//   utils as serviceUtils,
// } from '@atlaskit/util-service-support';
Object.defineProperty(exports, "__esModule", { value: true });
// interface PRSResponseItem {
//   name: string;
//   account_id: string;
//   account_status: string;
// }
/**
 * Supports the Atlassian Profile retrieval service.
 *
 * Uses:
 *   https://statlas.prod.atl-paas.net/swagger-ui-2.2.6/index.html?url=https://profile-retrieval-service.prod.atl-paas.net:443/api/swagger.yaml#!/default/getUsersByIds
 */
// export class ProfileRetrievalClient implements MentionNameClient {
//   private static lookupLimit = 90;
//   private config: ServiceConfig;
//   constructor(config: ServiceConfig) {
//     this.config = config;
//   }
//   getLookupLimit() {
//     return ProfileRetrievalClient.lookupLimit;
//   }
//   lookupMentionNames(ids: string[]): Promise<MentionNameResponse> {
//     if (ids.length > ProfileRetrievalClient.lookupLimit) {
//       return Promise.reject(`Exceeded service request limit of ${ProfileRetrievalClient.lookupLimit}. Supplied ${ids.length} ids.`);
//     }
//     const requestOptions: RequestServiceOptions = {
//       path: '/users/bulk',
//       queryParams: {
//         'id': ids,
//         expand: ['NAME'],
//       },
//     };
//     return serviceUtils.requestService<PRSResponseItem[]>(this.config, requestOptions).then(serviceData => {
//       return serviceData.reduce(() => {
//       }, {} as MentionNameResponse);
//     });
//   }
// }
//# sourceMappingURL=MentionNameClient.js.map