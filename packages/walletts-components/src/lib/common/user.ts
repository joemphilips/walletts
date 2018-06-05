import { User } from 'walletts-core';

/** add context to the raw user data */
export interface UserUIData extends User {
  readonly isMe: boolean;
}
