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
};