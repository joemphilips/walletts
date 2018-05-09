import { Component } from './interfaces';
import { Counter } from './components/counter';
import { Speaker } from './components/speaker';

export interface RouteValue {
  readonly component: Component<any, any>;
  readonly scope: string;
}
export interface Routes {
  readonly [index: string]: RouteValue;
}

export const routes: Routes = {
  '/': { component: Counter, scope: 'counter' },
  '/p2': { component: Speaker, scope: 'speaker' }
};

export const initialRoute = '/';
