// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/huangwenbo/Desktop/coderWhy/react小码哥/课堂/lastCode/react-my/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/about",
    "exact": true,
    "component": require('@/pages/about/index.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index/index.js').default
  },
  {
    "path": "/users",
    "routes": [
      {
        "path": "/users",
        "exact": true,
        "component": require('@/pages/users/index.js').default
      },
      {
        "path": "/users/:name",
        "exact": true,
        "component": require('@/pages/users/[name].js').default
      }
    ],
    "component": require('@/pages/users/_layout.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
