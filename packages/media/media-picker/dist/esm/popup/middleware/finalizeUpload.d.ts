import { Store, Middleware } from 'redux';
import { FinalizeUploadAction } from '../actions/finalizeUpload';
import { State } from '../domain';
export default function (): Middleware;
export declare function finalizeUpload(store: Store<State>, { file, uploadId, source, replaceFileId }: FinalizeUploadAction): Promise<void>;
