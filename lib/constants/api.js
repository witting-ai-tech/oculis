export const ENDPOINTS = {
  // CAMERAS
  LIST_CAMERAS: (clientId, skip = 0, limit = 10) =>
    `/api/v1/clients/${clientId}/cameras?skip=${skip}&limit=${limit}`,

  GET_CAMERA: (clientId, cameraId) =>
    `/api/v1/clients/${clientId}/cameras/${cameraId}`,

  CREATE_CAMERA: (clientId) =>
    `/api/v1/clients/${clientId}/cameras`,

  UPDATE_CAMERA: (clientId, cameraId) =>
    `/api/v1/clients/${clientId}/cameras/${cameraId}`,

  DELETE_CAMERA: (clientId, cameraId) =>
    `/api/v1/clients/${clientId}/cameras/${cameraId}`,
};
