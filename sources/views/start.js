// export default {
// 	template:"Hello World", css:"webix_shadow_medium app_start"
// };

import {JetView} from "webix-jet"
import statistics from "models/statistics";

// export default class MenuView extends JetView{
// config(){
// 	return{
// 		view:"datatable",
// 		select:true,
// 		scroll:"y",
// 		columns:true
// 	}
// }

// }

export default class StatisticsView extends JetView {
	config(){
	  return {
		view:"chart", 
		type:"bar",
		barWidth:"12",
		radius:"2",
		xAxis:{ template:"#month#", title:"Month" },
		yAxis:{ start:0, step:20, end:100, title:"Grade" },
		legend:{
			values:[
				{text:"Avg. performance", color:"#ac92ec"},
				{text:"Student", color:"#5ce1bf"},
				{text:"Avg. change", color:"#556ee6", markerType:"item"}
			],
			valign:"middle",
			align:"right",
			layout:"y"
		},
		series:[
			{
				value:"#student#",
				color:"#5ce1bf",
				tooltip:{
					template:"#student#"
				}
			},
			{
				value:"#avgperf#",
				color: "#ac92ec",
				tooltip:{
					template:"#avgperf#"
				}
			},
			{
				type:"line",
				value:"#change#",
				item:{
					borderColor:"#556ee6",
					color:"#556ee6",
					type:"r",
					radius:1
				},
				line:{
					color:"#556ee6",
					width:1
				},
				tooltip:{
					template:"#change#"
				}
			}
		]
	};
	}
	init(chart){
	  chart.parse(statistics);
	}
  }