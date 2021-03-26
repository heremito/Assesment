import {JetView} from "webix-jet";
import {data} from "models/records";

export default class DataView extends JetView{
	config(){
		return { view:"datatable", autoConfig:true, css:"webix_shadow_medium" };
	}
	init(view){
		view.sync(data);
		data.waitData.then(() => {
            view.select(view.getFirstId());
        });
	}
}

// export class ListB extends JetView {
// 	config(){
// 		var config = {
// 			view:"datatable",
// 			editable:true
// 		};

// 		switch(this.app.config.size){
// 			case "small":
// 				config.columns = [
// 					{ id:"id" },
// 					{ id:"title", fillspace:true }
// 				];
// 				break;
// 			default:
// 				config.autoConfig = true;
// 				break;
// 		}

// 		return config;
// 	}
// 	init(view){
// 		view.parse(data);
// 	}
// }

// export class StartView extends JetView {
// 	config(){
// 		switch(this.app.config.size){
// 			case "small":
// 				return {
// 					view:"tabview", tabbar:{ optionWidth:100 }, cells:[
// 						{ body: { rows:[ ListB ]}, header:"Table 1" },
// 						{ body: { rows:[ ListA ]}, header:"Table 2" }
// 					]
// 				};
// 			case "wide":
// 				return {
// 					type:"space", cols:[
// 						ListA,
// 						ListB
// 					]
// 				};
// 		}
// 	}
// }



// const app = new JetApp({
// 	start:		"/start",
// 	views:{
// 		start: StartView
// 	}
// });

// const promised = () => {
// 	var t = webix.promise.defer();
// 	setTimeout(function(){
// 		t.resolve({ template:"Resolved by promise" });
// 	}, 1000);
// 	return t;
// };

// const app = new JetApp({
// 	id:			"windows",
// 	start:		"/top/data",
// 	views:{
// 		top:		DataView,
// 		promised:	ListB,

// 	}
// });

// export default app;
