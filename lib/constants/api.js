const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const ENDPOINTS = {
  LIST_CAMERAS: (clientId, skip = 0, limit = 10) =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras?skip=${skip}&limit=${limit}`,

  GET_CAMERA: (clientId, cameraId) =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras/${cameraId}`,

  CREATE_CAMERA: (clientId) =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras`,

  UPDATE_CAMERA: (clientId, cameraId) =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras/${cameraId}`,

  DELETE_CAMERA: (clientId, cameraId) =>
    `${API_BASE}/api/v1/clients/${clientId}/cameras/${cameraId}`,
};
