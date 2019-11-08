import MentionResource, { AbstractMentionResource, isResolvingMentionProvider, } from './api/MentionResource';
import PresenceResource, { AbstractPresenceResource, } from './api/PresenceResource';
import { DefaultMentionNameResolver, } from './api/MentionNameResolver';
import { isSpecialMention, MentionNameStatus, } from './types';
import { ELEMENTS_CHANNEL } from './_constants';
import ContextMentionResource from './api/ContextMentionResource';
export { 
// Classes
ContextMentionResource, MentionResource, PresenceResource, AbstractMentionResource, AbstractPresenceResource, DefaultMentionNameResolver, MentionNameStatus, 
// Functions
isSpecialMention, isResolvingMentionProvider, 
// Constants
ELEMENTS_CHANNEL, };
//# sourceMappingURL=resource.js.map