# Capacitor App Tracking Transparency plugin by MikeCode6

# Available methods:

- `getStatus()`
- `requestPermission()`

# Usage example:

1. In your component or service (e.g. `tracking.service.ts`)

```ts
...
import { AppTrackingTransparencyStatus } from 'capacitor-app-tracking-transparency/src';
import { Plugins } from '@capacitor/core';

const { CapacitorAppTrackingTransparency } = Plugins;
@Injectable({
    providedIn: 'root'
  })
  export class TrackingService {
    constructor() {

    }
    async initTracking() {
            console.log('initTracking: requesting permission');
            const status = await CapacitorAppTrackingTransparency.getStatus();
            console.log('initTracking: status ' + status.value);
            if (status.value === AppTrackingTransparencyStatus.unrequested) {
                const new_status = await CapacitorAppTrackingTransparency.requestPermission();
               
                console.log('initTracking: statusReq ' + new_status);
            }
      }
  }