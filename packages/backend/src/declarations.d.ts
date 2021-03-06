import { Application as ExpressFeathers } from '@feathersjs/express';
import { HookContext as FeathersHookContext } from '@feathersjs/feathers';
import { AbstractEntity } from '@leek/commons';

// A mapping of service names to types. Will be extended in service files.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ServiceTypes {}

export type PaginationOptions = { default?: number; max?: number };

export type SpotifyConfig = {
  key: string;
  secret: string;
  scope: string[];
};

export type OAuthConfig = {
  spotify: SpotifyConfig;
};

export type JwtConfig = {
  header: {
    typ: string;
  };
  audience: string;
  issuer: string;
  algorithm: string;
  expiresIn: string;
};

export type AuthenticationConfig = {
  entity: string;
  service: string;
  secret: string;
  authStrategies: string[];
  jwtOptions: JwtConfig;
  oauth: OAuthConfig;
};

// The application instance type that will be used everywhere else
export interface Application extends ExpressFeathers<ServiceTypes> {
  get(key: 'host'): string;
  get(key: 'port'): number;
  get(key: 'public'): string;
  get(key: 'paginate'): PaginationOptions;
  get(key: 'nedb'): string;
  get(key: 'authentication'): AuthenticationConfig;
}

export interface HookContext<T = AbstractEntity> extends FeathersHookContext<T> {
  app: Application;
}
