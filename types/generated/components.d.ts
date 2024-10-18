import type { Schema, Attribute } from '@strapi/strapi';

export interface TestTestcomponent extends Schema.Component {
  collectionName: 'components_test_testcomponents';
  info: {
    displayName: 'testcomponent';
    icon: 'alien';
  };
  attributes: {
    justatest: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.testcomponent': TestTestcomponent;
    }
  }
}
