package com.ingy.capacitor.plugins;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class CapacitorAppTrackingTransparency extends Plugin {

    @PluginMethod
    public void getStatus(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", "authorized");
        call.success(ret);
    }

    @PluginMethod
    public void requestPermission(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", "authorized");
        call.success(ret);
    }
}
