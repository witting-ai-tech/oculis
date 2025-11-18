import { ENDPOINTS } from "../constants/api";
import { apiFetch } from "../utils";

// LIST CAMERAS
export async function getCameras(clientId, skip = 0, limit = 10) {
    const url = ENDPOINTS.LIST_CAMERAS(clientId, skip, limit);
    return apiFetch(url);
}

// GET SINGLE CAMERA
export async function getCamera(clientId, cameraId) {
  const url = ENDPOINTS.GET_CAMERA(clientId, cameraId);
  return apiFetch(url);
}

// CREATE CAMERA
export async function createCamera(clientId, data) {
  return apiFetch(ENDPOINTS.CREATE_CAMERA(clientId), {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// UPDATE CAMERA
export async function updateCamera(clientId, cameraId, data) {
  return apiFetch(ENDPOINTS.UPDATE_CAMERA(clientId, cameraId), {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

// DELETE CAMERA
export async function deleteCamera(clientId, cameraId) {
  return apiFetch(ENDPOINTS.DELETE_CAMERA(clientId, cameraId), {
    method: "DELETE",
  });
}