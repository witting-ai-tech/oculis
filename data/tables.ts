import React from "react";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================


export interface IncidentAlert  {
  _id: string;
  client_id: string;
  site_id: string;
  factory_id: string;
  camera_id: string;
  alert_type: string;
  title: string;
  severity: string;
  status: string;
  detected_at: string;
  worker: {
    id: string;
    name: string;
    shift: string;
    badge_id: string;
  };
  location: {
    area: string;
    floor: string;
    camera_label: string;
  };
  media: {
    image_url: string;
    clip_url: string;
  };
  bbox: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  metadata: {
    reviewed_by: string;
    note: string;
  };
  escalation_history: {
    timestamp: string;
    recipients: {
      id: string | number;
      name: string;
      role: string;
    }[];
    note: string;
    by: {
      id: string;
      name: string;
    };
  }[];
  is_deleted: boolean,
  created_at: string,
  updated_at: string,
  deleted_at: string | null,
  created_by: string | null,
  updated_by: string |null,
  deleted_by: string | null
};

// ============================================================================
// DUMMY DATA
// ============================================================================
export const incidentAlert : IncidentAlert[]=[
    {
    "_id": "6921dcce25c80d9ce80222f1",
    "client_id": "671c6d5fb2f4a95c7baf2143",
    "site_id": "671c6e01b2f4a95c7baf220a",
    "factory_id": "671c6e45b2f4a95c7baf22fa",
    "camera_id": "671c6e98b2f4a95c7baf2302",
    "alert_type": "fall_incident",
    "title": "No Helmet Violation - Verified",
    "severity": "critical",
    "status": "in_progress",
    "worker": {
        "id": "W-123",
        "name": "Arjun Singh",
        "shift": "A",
        "badge_id": "B-009"
    },
    "location": {
        "area": "Assembly Line",
        "floor": "Floor 2",
        "camera_label": "CAM-F2-07"
    },
    "detected_at": "2025-11-10T11:02:54Z",
    "media": {
        "image_url": "https://cdn.example.com/frame_11.png",
        "clip_url": "https://cdn.example.com/clip_11.mp4"
    },
    "bbox": {
        "x": 115,
        "y": 220,
        "w": 64,
        "h": 130
    },
    "metadata": {
        "reviewed_by": "Supervisor",
        "note": "On-site inspection requested"
    },
    "escalation_history": [
        {
            "timestamp": "2025-11-28T00:07:42+00:00",
            "recipients": [
                {
                    "id": 2,
                    "name": "Olivia Rhye",
                    "role": "admin"
                }
            ],
            "note": "Escalated via dashboard",
            "by": {
                "id": "dashboard-user",
                "name": "Admin User"
            }
        },
        {
            "timestamp": "2025-11-28T00:10:37+00:00",
            "recipients": [
                {
                    "id": 2,
                    "name": "Olivia Rhye",
                    "role": "admin"
                }
            ],
            "note": "Escalated via Alert Center",
            "by": {
                "id": "dashboard-user",
                "name": "Admin User"
            }
        },
        {
            "timestamp": "2025-11-28T00:12:59+00:00",
            "recipients": [
                {
                    "id": "U45",
                    "name": "Olivia Rhye",
                    "role": "safety_officer"
                },
                {
                    "id": "U99",
                    "name": "Factory Manager",
                    "role": "manager"
                }
            ],
            "note": "Immediate PPE violation during active shift",
            "by": {
                "id": "U11",
                "name": "AI Monitoring System"
            }
        }
    ],
    "is_deleted": false,
    "created_at": "2025-11-22T15:54:54Z",
    "updated_at": "2025-11-29T19:04:33Z",
    "deleted_at": null,
    "created_by": null,
    "updated_by": null,
    "deleted_by": null
}
]