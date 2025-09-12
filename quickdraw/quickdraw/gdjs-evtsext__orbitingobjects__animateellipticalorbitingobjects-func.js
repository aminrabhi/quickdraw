
if (typeof gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects !== "undefined") {
  gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects = {};
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex2 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex4 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex5 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachObjects2 = [];

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachObjects4 = [];

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachObjects5 = [];

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary2 = null;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary4 = null;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary5 = null;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTotalCount2 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTotalCount4 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTotalCount5 = 0;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects1= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects2= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects7= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects1= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects2= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6= [];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects7= [];


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects3Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3});
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects3Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3});
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects2, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects3Objects, (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[0] : null), eventsFunctionContext);
}{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[i].getVariables().get("LinkedObjectQuantity")).setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects3Objects));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects6Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6});
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects6Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6});
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects6Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6});
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6);

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects6Objects, (( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getX()), (( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getY()), (( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? "" :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getLayer()));
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[0] : null), (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0] : null));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects6Objects, (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0] : null), eventsFunctionContext);
}{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[i].getVariables().get("LinkedObjectQuantity")).setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects6Objects));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects5Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5});
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].getVariables().get("OrbitOrder")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getVariables()).get("OrbitingObjects").getChild("OrderCounter"))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[i].getVariables().get("OrbitingObjects").getChild("OrderCounter")).add(1);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].setAngle((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getVariables()).get("OrbitingObjects").getChild("RotationAngle"))));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[i].getVariables().get("LinkedObjectQuantity")) < eventsFunctionContext.getArgument("OrbitQuantity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[k] = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length = k;
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4[i].getVariables().get("OrbitingObjects").getChild("OrderCounter")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4);

for (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex5 = 0;gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex5 < gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4.length;++gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex5) {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5);

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length = 0;


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary5 = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4[gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex5];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.push(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects5Objects, (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3[i].getVariables().get("OrbitAngle")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3[i].getVariables().get("OrbitOrder"))) * (360 / eventsFunctionContext.getArgument("OrbitQuantity")) + eventsFunctionContext.getArgument("StartingOffset"));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects2, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[i].getVariables().get("LinkedObjectQuantity")) < eventsFunctionContext.getArgument("OrbitQuantity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[k] = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects6Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6});
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects6Objects, (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].getVariables().get("OrbitOrder")) > eventsFunctionContext.getArgument("OrbitQuantity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[k] = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4);

for (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex5 = 0;gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex5 < gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4.length;++gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex5) {
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length = 0;


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary5 = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4[gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex5];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.push(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList5(runtimeScene, eventsFunctionContext);} //Subevents end.
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
gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3[i].getVariables().get("OrbitAngle")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3[i].getVariables().get("OrbitOrder"))) * (360 / eventsFunctionContext.getArgument("OrbitQuantity")) + eventsFunctionContext.getArgument("StartingOffset"));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects2, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[i].getVariables().get("LinkedObjectQuantity")) > eventsFunctionContext.getArgument("OrbitQuantity") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[k] = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects4Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4});
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (("" + eventsFunctionContext.getArgument("ForegroundSide")) == "");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (("" + eventsFunctionContext.getArgument("ForegroundSide")) == "Bottom");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].setZOrder((( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getZOrder()) + ((gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].getAABBCenterY()) - (( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getAABBCenterY())));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("ForegroundSide") == "Top");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].setZOrder((( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getZOrder()) + ((( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getAABBCenterY()) - (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].getAABBCenterY())));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("ForegroundSide") == "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].setZOrder((( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getZOrder()) + ((( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6[0].getAABBCenterX()) - (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6[i].getAABBCenterX())));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("ForegroundSide") == "Right");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].setZOrder((( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[0].getZOrder()) + ((gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].getAABBCenterX()) - (( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[0].getAABBCenterX())));
}
}}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle")).add(eventsFunctionContext.getArgument("OrbitSpeed") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle")) > 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[k] = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle")).setNumber(gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle"))), 360));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].setCenterPositionInScene((( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[0].getAABBCenterX()) + gdjs.evtTools.common.getXFromAngleAndDistance((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle"))), eventsFunctionContext.getArgument("HorizontalDistance")),(( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[0].getAABBCenterY()) + gdjs.evtTools.common.getYFromAngleAndDistance((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].getVariables().get("OrbitAngle"))), eventsFunctionContext.getArgument("VerticalDistance")));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[i].rotate(eventsFunctionContext.getArgument("ObjectRotationSpeed"), runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[i].returnVariable(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5[i].getVariables().get("OrbitingObjects").getChild("RotationAngle")).setNumber((( gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5[0].getAngle()));
}
}}

}


{


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList8(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3);

for (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex4 = 0;gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex4 < gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3.length;++gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex4) {
gdjs.copyArray(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects2, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4);

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4.length = 0;


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary4 = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3[gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex4];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4.push(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595AnimateEllipticalOrbitingObjects_9546GDOrbitingObjectObjects4Objects, (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4.length !== 0 ? gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList9(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList10(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects1);

for (gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex2 = 0;gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex2 < gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects1.length;++gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex2) {
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects2.length = 0;


gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary2 = gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects1[gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachIndex2];
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects2.push(gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList11(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.func = function(runtimeScene, CenterObject, OrbitingObject, OrbitQuantity, OrbitSpeed, VerticalDistance, ObjectRotationSpeed, StartingOffset, ResetObjectsAfterDeletion, HorizontalDistance, ForegroundSide, parentEventsFunctionContext) {
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
if (argName === "VerticalDistance") return VerticalDistance;
if (argName === "ObjectRotationSpeed") return ObjectRotationSpeed;
if (argName === "StartingOffset") return StartingOffset;
if (argName === "ResetObjectsAfterDeletion") return ResetObjectsAfterDeletion;
if (argName === "HorizontalDistance") return HorizontalDistance;
if (argName === "ForegroundSide") return ForegroundSide;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects7.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects7.length = 0;

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.eventsList12(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects3.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects4.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects5.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects6.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDCenterObjectObjects7.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects3.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects4.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects5.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects6.length = 0;
gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.GDOrbitingObjectObjects7.length = 0;


return;
}

gdjs.evtsExt__OrbitingObjects__AnimateEllipticalOrbitingObjects.registeredGdjsCallbacks = [];