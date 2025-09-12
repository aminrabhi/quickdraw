
if (typeof gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects !== "undefined") {
  gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects = {};
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex2 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex4 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex5 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachObjects2 = [];

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachObjects4 = [];

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachObjects5 = [];

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary2 = null;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary4 = null;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary5 = null;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTotalCount2 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTotalCount4 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTotalCount5 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects1= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects2= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects7= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects1= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects2= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6= [];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects7= [];


gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects3Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3});
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects3Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3});
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects2, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects3Objects, (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[0] : null), eventsFunctionContext);
}{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[i].getVariables().get("LinkedObjectQuantity")).setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects3Objects));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects6Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6});
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects6Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6});
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects6Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6});
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6);

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects6Objects, (( gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[0].getX()), (( gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[0].getY()), eventsFunctionContext.getArgument("OrbitLayer"));
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[0] : null), (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[i].setZOrder(eventsFunctionContext.getArgument("OrbitZvalue"));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects6Objects, (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[0] : null), eventsFunctionContext);
}{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[i].getVariables().get("LinkedObjectQuantity")).setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects6Objects));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects5Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5});
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[i].getVariables().get("OrbitOrder")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[0].getVariables()).get("OrbitingObjects").getChild("OrderCounter"))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[i].getVariables().get("OrbitingObjects").getChild("OrderCounter")).add(1);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[i].setAngle((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[0].getVariables()).get("OrbitingObjects").getChild("RotationAngle"))));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5[i].getVariables().get("LinkedObjectQuantity")) < eventsFunctionContext.getArgument("OrbitQuantity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5[k] = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5.length = k;
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4[i].getVariables().get("OrbitingObjects").getChild("OrderCounter")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4);

for (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex5 = 0;gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex5 < gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4.length;++gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex5) {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5);

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length = 0;


gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary5 = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4[gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex5];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.push(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects5Objects, (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3[i].getVariables().get("OrbitAngle")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3[i].getVariables().get("OrbitOrder"))) * (360 / eventsFunctionContext.getArgument("OrbitQuantity")) + eventsFunctionContext.getArgument("StartingOffset"));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects2, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[i].getVariables().get("LinkedObjectQuantity")) < eventsFunctionContext.getArgument("OrbitQuantity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[k] = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects6Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6});
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects6Objects, (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[i].getVariables().get("OrbitOrder")) > eventsFunctionContext.getArgument("OrbitQuantity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[k] = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4);

for (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex5 = 0;gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex5 < gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4.length;++gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex5) {
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length = 0;


gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary5 = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4[gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex5];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.push(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList5(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("ResetObjectsAfterDeletion");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3[i].getVariables().get("OrbitAngle")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3[i].getVariables().get("OrbitOrder"))) * (360 / eventsFunctionContext.getArgument("OrbitQuantity")) + eventsFunctionContext.getArgument("StartingOffset"));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects2, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[i].getVariables().get("LinkedObjectQuantity")) > eventsFunctionContext.getArgument("OrbitQuantity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[k] = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects4Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4});
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle")).add(eventsFunctionContext.getArgument("OrbitSpeed") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle")) > 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[k] = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle")).setNumber(gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle"))), 360));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].putAroundObject((gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5[0] : null), eventsFunctionContext.getArgument("OrbitDistance"), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle"))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[i].rotate(eventsFunctionContext.getArgument("ObjectRotationSpeed"), runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5[i].getVariables().get("OrbitingObjects").getChild("RotationAngle")).setNumber((( gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5[0].getAngle()));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3);

for (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex4 = 0;gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex4 < gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3.length;++gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex4) {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects2, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4);

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4.length = 0;


gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary4 = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3[gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex4];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4.push(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateOrbitingObjects_9546GDOrbitingObjectObjects4Objects, (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList8(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList9(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects1);

for (gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex2 = 0;gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex2 < gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects1.length;++gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex2) {
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects2.length = 0;


gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary2 = gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects1[gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachIndex2];
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects2.push(gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList10(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.func = function(runtimeScene, CenterObject, OrbitingObject, OrbitQuantity, OrbitSpeed, OrbitDistance, ObjectRotationSpeed, OrbitLayer, OrbitZvalue, StartingOffset, ResetObjectsAfterDeletion, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"CenterObject": CenterObject
, "OrbitingObject": OrbitingObject
},
  _objectArraysMap: {
"CenterObject": gdjs.objectsListsToArray(CenterObject)
, "OrbitingObject": gdjs.objectsListsToArray(OrbitingObject)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OrbitingObjects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OrbitingObjects"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "OrbitQuantity") return OrbitQuantity;
if (argName === "OrbitSpeed") return OrbitSpeed;
if (argName === "OrbitDistance") return OrbitDistance;
if (argName === "ObjectRotationSpeed") return ObjectRotationSpeed;
if (argName === "OrbitLayer") return OrbitLayer;
if (argName === "OrbitZvalue") return OrbitZvalue;
if (argName === "StartingOffset") return StartingOffset;
if (argName === "ResetObjectsAfterDeletion") return ResetObjectsAfterDeletion;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects7.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects7.length = 0;

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.eventsList11(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects3.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects4.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects5.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects6.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDCenterObjectObjects7.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects3.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects4.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects5.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects6.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.GDOrbitingObjectObjects7.length = 0;


return;
}

gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.registeredGdjsCallbacks = [];