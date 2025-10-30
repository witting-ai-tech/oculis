"use client";
import Hnavbar from "@/components/Hnavbar";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import CustomLayout from "@/components/CustomLayout";
import { EllipsisVertical } from "lucide-react";
import MultiLineChart from "@/components/charts/MultiLineChart";
import StackedBarChart from "@/components/charts/StackedBarChart";
import DashCard from "@/components/DashCard";
import { dashConfig, overall_chartData, ppe_chartData, fall_chartData} from "@/data/dashData";

export default function Home() {
  const router = useRouter();
  const init = useRef(true);
  
  //state for dashboard config, active tab, time rangem chart data
  const [currentTab, setCurrentTab] = useState(0);
  const [config, setConfig] = useState([]);

  const chartDataMap ={
    OverAll : overall_chartData,
    PpeViolation: ppe_chartData,
    FallIncident:fall_chartData,
    AccessBreach: overall_chartData, //replace with access_chartData
    StaffMonitoring:overall_chartData //replace with staff_chartData
  }

  //load saved tab index
  useEffect(() => {
    const saved = localStorage.getItem("currentTab");
    if (saved !== null) setCurrentTab(parseInt(saved, 10));
  }, []);
  //persist tab index
  useEffect(() => {
    localStorage.setItem("currentTab", currentTab);
  }, [currentTab]);

  //reset tab on route change
  useEffect(() => {
    if (init.current) {
      init.current = false;
      return;
    }
    setCurrentTab(0);
  }, [router.asPath]);

  //fetch dashboard config
  useEffect(()=>{
    //axios
    //   .get("/api/dashboard/config")
    //   .tehn((res)=>setConfig(res.data.dashConfig))
    //   .catch(console.error);
    setConfig(dashConfig);
  },[]);

  //update active flags when current tab changes
  useEffect(()=>{
    if(config.length ===0) return;

    setConfig(prevConfig => prevConfig.map((tab, index)=>(
      {...tab, active:index ===currentTab}
    )));
  },[currentTab, config.length]);

  const handleTabChange = (newTabIndex) =>{
    setCurrentTab(newTabIndex);
  }

    //fetch both carts for the active tabs via API
  // const fetchCharts = useCallback(()=>{
  //   const tab = config[currentTab];
   
  //   if(!tab) return;

  //   setLoadingCharts(true);
  //   axios
  //     .get(`/api/tabs/${tab.id}/charts`, {params:{timeRange}})
  //     .then((res)=>{
  //       setChartData((prev)=> ({...prev, [tab.id]:res.data.charts}))
  //     })
  //     .catch(console.error)
  //     .finally(()=> setLoadingCharts(false));
  // }, [config, currentTab, timeRange]);

  //useEffect(fetchCharts, [fetchCharts]);

   //render loading state if config not loaded
  if(config.length === 0) return <div>Loading dashboard Configuration...</div>;

  const enabledTabs = config.filter(tab=>tab.enable);
  const currentTabConfig = config[currentTab];
  if(!currentTabConfig || !currentTabConfig.enable){
    return <div> Tab not Available...</div>
  }
  
  const {cardsInfo, incidentData} = currentTabConfig.content;

  const rawChartData = currentTabConfig.active 
    ? chartDataMap[currentTabConfig.id] || {charts:[]}
    : {charts:[]};
  const charts = rawChartData.charts;

  return (
    <CustomLayout>
      <section className="inter pl-12 xl:pl-16 pr-6 xl:pr-8 pb-8">
        <Hnavbar
          setCurrentTab={handleTabChange}
          currentTab={currentTab}
          menu={enabledTabs}
          config={config}
        />

        {/* topcards*/}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsInfo.map((card, index) => (
            <DashCard key={index} card={card} type="dash" />
          ))}
        </div>

        {/*dashtab cards*/}
        {incidentData?.length >0 &&(
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {incidentData.map((card, index) => (
              <DashCard key={index} card={card} type="tab" />
            ))}
          </div>
        )}

        {/*chart Sections*/}
        {currentTabConfig.active && (
        <div className="grid grid-cols-1 min-[1025px]:grid-cols-2 mt-8 gap-8">
          {charts.map((sec, idx) => (
            <div key={idx} className="w-full shadow-card p-4">
              <div className="flex flex-row justify-between items-center p-2">
                <h2 className="py-2 text-[#181d27] font-semibold">{sec.title}</h2>
                <EllipsisVertical className="text-[#a4a7ae]" size={20} />
              </div>
              <div className="mt-2">
                {sec.type=== "line" && (
                  <MultiLineChart
                    data={sec.data}
                    xKey="day"
                    height={400}
                    series={sec.series}
                    tickFormatter={(v) => String(v).slice(0, 3)}
                  />
                )}
                {sec.type==="bar" && (
                  <StackedBarChart
                    data={sec.data}
                    xKey="day"
                    height={400}
                    series={sec.series}
                    xTickFormatter={(v) => String(v).slice(0, 3)}
                    showYAxis
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        )}

      </section>
    </CustomLayout>
  );
}
