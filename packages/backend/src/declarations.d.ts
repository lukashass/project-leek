import { Application as ExpressFeathers } from '@feathersjs/express';
import { HookContext as FeathersHookContext } from '@feathersjs/feathers';

type PaginationOptions = { default?: number | undefined; max?: number | undefined };

type ApplicationConfiguration = {
  get(key: 'host'): string;
  get(key: 'port'): number;
  get(key: 'public'): string;
  get(key: 'paginate'): PaginationOptions;
  get(key: 'nedb'): string;
};

export interface ServiceTypes {}

// The application instance type that will be used everywhere else
export type Application = ExpressFeathers<ServiceTypes> & ApplicationConfiguration;

export type HookContext<T = any> = { app: Application } & FeathersHookContext<T>;
