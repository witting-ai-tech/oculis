import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE as string;

export const ENDPOINTS = {
  LIST_CAMERAS: (clientId: string, skip: number = 0, limit: number = 10): string =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras?skip=${skip}&limit=${limit}`,

  GET_CAMERA: (clientId: string, cameraId: string): string =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras/${cameraId}`,

  CREATE_CAMERA: (clientId: string): string =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras`,

  UPDATE_CAMERA: (clientId: string, cameraId: string): string =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras/${cameraId}`,

  DELETE_CAMERA: (clientId: string, cameraId: string): string =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras/${cameraId}`,

  LIST_ALERTS: (client_id: string): string=>
    `${API_BASE}/api/v1/clients/${client_id}/alerts/`,

  UPDATE_ALERT:(client_id:string, alert_id:string, status:string): string =>
    `${API_BASE}/api/v1/clients/${client_id}/alerts/${alert_id}?status=${status}`,

  ESCALATE_ALERT:(client_id:string, alert_id:string):string=>
    `${API_BASE}/api/v1/clients/${client_id}/alerts/${alert_id}/escalate`
};

export const api = axios.create({
  baseURL: API_BASE,
  headers:{
    "Content-Type": "application/json",
  }
})

