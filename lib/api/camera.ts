import { ENDPOINTS } from "../constants/api";
import { apiFetch } from "../utils";

export interface CameraPayload {
  name?: string;
  channel?: number;
  ingest?: any;
  [key: string]: any;
}

export async function getCameras(
  clientId: string,
  skip: number = 0,
  limit: number = 10
) {
  const url = ENDPOINTS.LIST_CAMERAS(clientId, skip, limit);
  return apiFetch(url);
}

export async function getCamera(
  clientId: string,
  cameraId: string
) {
  const url = ENDPOINTS.GET_CAMERA(clientId, cameraId);
  return apiFetch(url);
}

export async function createCamera(
  clientId: string,
  data: CameraPayload
) {
  return apiFetch(ENDPOINTS.CREATE_CAMERA(clientId), {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateCamera(
  clientId: string,
  cameraId: string,
  data: CameraPayload
) {
  return apiFetch(ENDPOINTS.UPDATE_CAMERA(clientId, cameraId), {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteCamera(
  clientId: string,
  cameraId: string
) {
  return apiFetch(ENDPOINTS.DELETE_CAMERA(clientId, cameraId), {
    method: "DELETE",
  });
}
