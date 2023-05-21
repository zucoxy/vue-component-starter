import type { App } from 'vue';

// @ts-ignore
import { version } from '../package.json';
import * as components from './components';

export * from './components';

function install(app: App) {
  for (const key in components) {
    // @ts-ignore
    app.component(key, components[key]);
  }
}

export default { install, version };
