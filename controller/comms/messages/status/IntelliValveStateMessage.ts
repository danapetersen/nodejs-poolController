﻿import { Inbound } from "../Messages";
import { state } from "../../../State";
import { sys, ControllerType } from "../../../Equipment";
export class IntelliValveStateMessage {
    public static process(msg: Inbound) {
        if (sys.controllerType === ControllerType.Unknown) return;
        // We only want to process the messages that are coming from IntelliValve.
        if (msg.source !== 12) return;
        switch (msg.action) {
            case 82: // This is hail from the valve that says it is not bound yet.
                break;
        }
        state.emitEquipmentChanges();
    }
}