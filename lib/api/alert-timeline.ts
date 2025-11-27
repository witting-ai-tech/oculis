import { api, ENDPOINTS } from "../constants/api";

export async function getAlertsData(){
    const url = ENDPOINTS.LIST_ALERTS("671c6d5fb2f4a95c7baf2143");
    const response = await api.get(url);
    console.log(response);
    return response.data;
}
export async function getAlertByID(alertId:string){
    //const url = ENDPOINTS.
}
export async function updateAlert(client_id:string, alert_id:string, status:string){
    const url = ENDPOINTS.UPDATE_ALERT(client_id, alert_id, status);
    const response = await api.put(url, {status});
    return response.data;
}
export async function escalateAlert(client_id:string, alert_id:string, payload:Record<string, any>){
    const url = ENDPOINTS.ESCALATE_ALERT(client_id, alert_id);
    const response =await api.post(url, payload);
    return response.data;
}
