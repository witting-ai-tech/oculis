import { ENDPOINTS } from "../constants/api";
import { apiFetch } from "../utils";

export async function getAlertsData() {
    const url = ENDPOINTS.LIST_ALERTS("671c6d5fb2f4a95c7baf2143");
    return apiFetch(url);
}

export async function getAlertByID(client_id:string, alertId:string){
    const url = ENDPOINTS.GET_ALERT_BYID(client_id, alertId);
    return apiFetch(url);
}
export async function updateAlert(client_id:string, alert_id:string, payload:Record<string, any>){
    const url = ENDPOINTS.UPDATE_ALERT(client_id, alert_id);
    return apiFetch(url, {
        method:"PUT",
        payload:payload
    });
}
export async function escalateAlert(client_id:string, alert_id:string, payload:Record<string, any>){
    const url = ENDPOINTS.ESCALATE_ALERT(client_id, alert_id);
    return apiFetch(url, {
        method:"POST",
        payload:payload
    });
}

export type DetailedAlert = {
  id: string;
  clientId: string;
  siteId: string;
  factoryId: string;
  cameraId: string;
  alertType: string;
  title: string;
  severity: string;
  status: string;
  detectedAt: string;
  worker: {
    id: string;
    name: string;
    shift: string;
    badgeId: string;
  };
  location: {
    area: string;
    floor: string;
    cameraLabel: string;
  };
  media: {
    imageUrl: string;
    clipUrl: string;
  };
  bbox: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  metadata: {
    reviewedBy: string;
    note: string;
  };
  escalationHistory: {
    timestamp: string;
    recipients: {
      id: string;
      name: string;
      role: string;
    }[];
    note: string;
    by: {
      id: string;
      name: string;
    };
  }[];
};

