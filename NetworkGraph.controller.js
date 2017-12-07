sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	var oPageController = Controller.extend("sap.suite.ui.commons.sample.NetworkGraph.NetworkGraph", {
		onInit: function () {
			var oModel = new JSONModel(jQuery.sap.getModulePath("sap.suite.ui.commons.sample.NetworkGraph", "/graphv1.json"));
			this.getView().setModel(oModel);

			this._oModelSettings = new JSONModel({
				source: "atomicCircle",
				orientation: "TopBottom",
				arrowPosition: "End",
				arrowOrientation: "None",
				nodeSpacing: 40,
				nodePlacement:"Simple",
				mergeEdges: true
			});

			this.getView().setModel(this._oModelSettings, "settings");
		},
		mergeChanged: function (oEvent) {
			this._oModelSettings.setProperty("/mergeEdges", !!Number(oEvent.getSource().getProperty("selectedKey")));
		},
		spacingChanged: function(oEvent) {
			this._oModelSettings.setProperty("/nodeSpacing", Number(oEvent.getSource().getProperty("selectedKey")));
		}
	});
	return oPageController;
});