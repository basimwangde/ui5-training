sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
        MessageBox,
        JSONModel,
        Dialog,
        Text) {
        "use strict";
        var userData = {
            results: [
                {
                    "username": "basimwangde",
                    "firstName": "Basim",
                    "lastName": "Wangde",
                    "gender": "Male",
                    "active": "X"
                },
                {
                    "username": "dhirajsarang",
                    "firstName": "Dhiraj",
                    "lastName": "Sarang",
                    "gender": "Male",
                    "active": ""
                },
                {
                    "username": "rutikPatil",
                    "firstName": "Rutik",
                    "lastName": "Patil",
                    "gender": "Male",
                    "active": "X"
                }]
        }
        return Controller.extend("trainingui5.controller.View1", {
            onInit: function () {
                console.log("init reached");
            },
            onBeforeRendering: function () {
                console.log("before reached");
            },
            onAfterRendering: function () {
                console.log("after reached");
                console.table(userData);
                //step 1 define a model ->JSON/OData/Resource
                var oModel = new JSONModel();
                //step 2 set the data in the model;
                oModel.setData(userData);
                //step 3 set the model to the view
                this.getView().setModel(oModel);

                // //namedModels
                // this.getView().setModel(oModel, "userModel");

                // // //test
                // console.table(this.getView().getModel("userModel").getData())
            },
            onDestroy: function () {
                console.log("destroy reached");
            },
            onPress: function () {
                new MessageBox.show(this.getView().byId("inputId").getValue());
            },
            onLineItemPress: function (oEvent) {
                //step 1 get the row data which was clicked
                var bindedPath = oEvent.getSource().getBindingContext().getPath();
                //step 2 get the data from the model py passing the bindedPath;
                var data = this.getView().getModel().getObject(bindedPath);

                ///Dialog
                if (!this.oDialog) {
                    this.oDialog = new Dialog({
                        id: "idDialog",
                        title: "Display User Details",
                        content: new Text({
                            text: "{username}"
                        }),
                        endButton: new sap.m.Button({
                            text: "Cancel",
                            press: function () {
                                this.oDialog.close();
                            }.bind(this)
                        })
                    });
                }
                //step 2
                //set the binding context to the Dialog
                this.oDialog.setBindingContext(oEvent.getSource().getBindingContext());
                //step 3 add dialog as a dependent in the view
                this.getView().addDependent(this.oDialog);
                this.oDialog.open();
            }
        });
    });
