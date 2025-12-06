"use client";

import { Column } from "@/types/table";
import { incidentAlert, IncidentAlert } from "./tables";
import { formatDate, snakeToTitle } from "@/lib/utils";
import { Pill } from "./pillConfig";
import { DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { CheckCircle, ClockSnooze, Eye, User01 } from "@untitledui/icons";


const ICONS = {
  edit: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
    <path d="M6.74998 12.1642H12.75M0.75 12.1642H1.86636C2.19248 12.1642 2.35554 12.1642 2.50899 12.1274C2.64504 12.0947 2.7751 12.0408 2.8944 11.9677C3.02895 11.8853 3.14425 11.77 3.37486 11.5394L11.75 3.16421C12.3023 2.61193 12.3023 1.7165 11.75 1.16421C11.1977 0.611929 10.3023 0.611929 9.75002 1.16421L1.37484 9.53937C1.14424 9.76998 1.02894 9.88528 0.94648 10.0198C0.873375 10.1391 0.819503 10.2692 0.78684 10.4052C0.75 10.5587 0.75 10.7217 0.75 11.0479V12.1642Z" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  delete: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
    <path d="M9.41667 3.41667V2.88333C9.41667 2.1366 9.41667 1.76323 9.27134 1.47801C9.14351 1.22713 8.93954 1.02316 8.68865 0.895325C8.40344 0.75 8.03007 0.75 7.28333 0.75H6.21667C5.46993 0.75 5.09656 0.75 4.81135 0.895325C4.56046 1.02316 4.35649 1.22713 4.22866 1.47801C4.08333 1.76323 4.08333 2.1366 4.08333 2.88333V3.41667M5.41667 7.08333V10.4167M8.08333 7.08333V10.4167M0.75 3.41667H12.75M11.4167 3.41667V10.8833C11.4167 12.0034 11.4167 12.5635 11.1987 12.9913C11.0069 13.3676 10.701 13.6736 10.3246 13.8653C9.89682 14.0833 9.33677 14.0833 8.21667 14.0833H5.28333C4.16323 14.0833 3.60318 14.0833 3.17535 13.8653C2.79903 13.6736 2.49307 13.3676 2.30132 12.9913C2.08333 12.5635 2.08333 12.0034 2.08333 10.8833V3.41667" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  copy: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M4.75 4.75V2.88333C4.75 2.1366 4.75 1.76323 4.89532 1.47801C5.02316 1.22713 5.22713 1.02316 5.47801 0.895325C5.76323 0.75 6.1366 0.75 6.88333 0.75H11.95C12.6967 0.75 13.0701 0.75 13.3553 0.895325C13.6062 1.02316 13.8102 1.22713 13.938 1.47801C14.0833 1.76323 14.0833 2.1366 14.0833 2.88333V7.95C14.0833 8.69674 14.0833 9.07011 13.938 9.35532C13.8102 9.6062 13.6062 9.81018 13.3553 9.93801C13.0701 10.0833 12.6967 10.0833 11.95 10.0833H10.0833M2.88333 14.0833H7.95C8.69674 14.0833 9.07011 14.0833 9.35532 13.938C9.6062 13.8102 9.81018 13.6062 9.93801 13.3553C10.0833 13.0701 10.0833 12.6967 10.0833 11.95V6.88333C10.0833 6.1366 10.0833 5.76323 9.93801 5.47801C9.81018 5.22713 9.6062 5.02316 9.35532 4.89532C9.07011 4.75 8.69674 4.75 7.95 4.75H2.88333C2.1366 4.75 1.76323 4.75 1.47801 4.89532C1.22713 5.02316 1.02316 5.22713 0.895325 5.47801C0.75 5.76323 0.75 6.1366 0.75 6.88333V11.95C0.75 12.6967 0.75 13.0701 0.895325 13.3553C1.02316 13.6062 1.22713 13.8102 1.47801 13.938C1.76323 14.0833 2.1366 14.0833 2.88333 14.0833Z" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  view: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
    <path d="M0.925915 5.89212C0.835124 5.74836 0.789728 5.67648 0.764316 5.56561C0.745228 5.48233 0.745228 5.351 0.764316 5.26772C0.789728 5.15685 0.835124 5.08497 0.925915 4.94121C1.67619 3.75323 3.90943 0.75 7.31277 0.75C10.7161 0.75 12.9494 3.75323 13.6996 4.94121C13.7904 5.08497 13.8358 5.15685 13.8612 5.26772C13.8803 5.351 13.8803 5.48233 13.8612 5.56561C13.8358 5.67648 13.7904 5.74836 13.6996 5.89212C12.9494 7.08011 10.7161 10.0833 7.31277 10.0833C3.90943 10.0833 1.67619 7.08011 0.925915 5.89212Z" stroke="#717680" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.31277 7.41667C8.41734 7.41667 9.31277 6.52124 9.31277 5.41667C9.31277 4.3121 8.41734 3.41667 7.31277 3.41667C6.2082 3.41667 5.31277 4.3121 5.31277 5.41667C5.31277 6.52124 6.2082 7.41667 7.31277 7.41667Z" stroke="#717680" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>,
}

// ============================================================================
// ALL ALERTS TABLE COLUMNS
// ============================================================================

export const getAllAlertsColumns =(
    updateAlert : (alert_id:string, client_id:string, payload:{}) => void,
    setOverlay :() => void,
    setAlerts:(item : any) => void
):Column<IncidentAlert>[]=> [
      { title: "Alert Type", key: "alert_type", width: "25%",
        render: (incidentAlert: IncidentAlert)=>{
          return(
            <span>{snakeToTitle(incidentAlert.alert_type)}</span>
          )
        }
       },
      { title: "Severity",
        key: "severity",
        render: (incidentAlert) => {   
          return (
           <Pill label={snakeToTitle(incidentAlert.severity)} className="border-none"/>
          );
        },
      },
      { title: "Worker", key: "worker", width:"15%",
        render:(incidentAlert)=>{
          return (incidentAlert.worker?.name || "Unknown")
        }
      },
      { title: "Time Detected", key: "timeDetected",
        render:(incidentAlert)=>{
            return (formatDate(incidentAlert.detected_at));
        }
      },
      { title: "Status",
        key: "status",
        render: (incidentAlert) => {
          return (
            <Pill label={snakeToTitle(incidentAlert.status)}/>
          );
        },
      },
      { title: "Assigned to", key: "assignedTo",
        render:(incidentAlert)=>{
          return(incidentAlert.escalation_history?.[0]?.recipients?.[0]?.name || "Unassigned")
        }
       },
      { title: "Actions",
        key: "action",
        render: (incidentAlert) => {
          return (
            <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger >
                <div className="rounded-md border-2 hover:border-[#9e77ed] w-fit p-1">
                  <EllipsisVertical size={20} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuItem className="" inset={undefined} onClick={(e: any) => {
                              e.stopPropagation();
                              setOverlay();
                          } }><Eye/> View Details</DropdownMenuItem>
                
                {/* <DropdownMenuItem className="" inset={undefined}
                onClick={async (e:any) => {
                  e.stopPropagation();
                  try{
                     updateAlert(incidentAlert.client_id,
                          incidentAlert._id,
                          {
                              title: "No Helmet Violation - Verified",
                              severity: "critical",
                              status: "acknowledged",
                              metadata: {
                                  reviewed_by: "Supervisor",
                                  note: "On-site inspection requested"
                              }
                          }
                      )
                    setAlerts((prev:any) => prev.map((a:any)=>
                      a._id === incidentAlert._id? {...a, status:"acknowledged"} :a
                    ));
                  }catch(err){
                    console.error("Acknowlegde Failed: ", err)
                  }
                }}
                ><CheckCircle/> Acknowledge</DropdownMenuItem>
                 */}
                {/* <DropdownMenuItem
                  //onClick={() => setEscalateTarget(_id)} // open escalate modal
                ><Share01/> Escalate to</DropdownMenuItem>
                 */}
                <DropdownMenuItem className="" inset={undefined}>
                    <ClockSnooze/> Snooze
                </DropdownMenuItem>

                <DropdownMenuItem className="" inset={undefined}
                onClick={async (e:any) => {
                  e.stopPropagation();
                   try{
                       updateAlert(incidentAlert.client_id,  
                          incidentAlert._id,
                          {
                            title: "No Helmet Violation - Verified",
                            severity: "critical",
                            status: "dismissed",
                            metadata: {
                              reviewed_by: "Supervisor",
                              note: "On-site inspection requested"
                            }
                          }
                          )
                    setAlerts((prev:any) => prev.map((a:any)=>
                      a._id === incidentAlert._id? {...a, status:"dismissed"} :a
                    ));
                  }catch(err){
                    console.error("Dismissed Failed: ", err)
                  }
                }}
                ><User01/> Dismiss</DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
           
          );
        },
      },
    ];