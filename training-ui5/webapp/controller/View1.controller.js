sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("trainingui5.controller.View1", {
            onInit: function () {
                console.log("init reached");
            },
            onBeforeRendering: function () {
                console.log("before reached");
            },
            onAfterRendering: function () {
                console.log("after reached");
            },
            onDestroy: function () {
                console.log("destroy reached");
            },
            onPress: function () {
                new MessageBox.show(this.getView().byId("inputId").getValue());
            },
        });
    });
