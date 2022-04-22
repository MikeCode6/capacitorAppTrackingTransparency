import { WebPlugin } from '@capacitor/core';
import { CapacitorAppTrackingTransparencyPlugin, AppTrackingTransparencyResponse } from './definitions';

export class CapacitorAppTrackingTransparencyWeb extends WebPlugin implements CapacitorAppTrackingTransparencyPlugin {
  constructor() {
    super({
      name: 'CapacitorAppTrackingTransparency',
      platforms: ['web'],
    });
  }
    getStatus(): Promise<AppTrackingTransparencyResponse> {
        return new Promise(() => {
            resolve('authorized');
        });
    }
    requestPermission(): Promise<AppTrackingTransparencyResponse> {
        return new Promise(() => {
            resolve('authorized');
        });
    }
}

const CapacitorAppTrackingTransparency = new CapacitorAppTrackingTransparencyWeb();

export { CapacitorAppTrackingTransparency };

import { registerWebPlugin } from '@capacitor/core';
import { resolve } from 'path';
registerWebPlugin(CapacitorAppTrackingTransparency);
