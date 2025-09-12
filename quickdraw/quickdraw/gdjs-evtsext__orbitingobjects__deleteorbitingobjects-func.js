
if (typeof gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects !== "undefined") {
  gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects = {};
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDCenterObjectObjects1= [];
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDCenterObjectObjects2= [];
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects1= [];
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects2= [];


gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595DeleteOrbitingObjects_9546GDOrbitingObjectObjects1Objects = Hashtable.newFrom({"OrbitingObject": gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects1});
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("CenterObject"), gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDCenterObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("OrbitingObject"), gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.mapOfGDgdjs_9546evtsExt_9595_9595OrbitingObjects_9595_9595DeleteOrbitingObjects_9546GDOrbitingObjectObjects1Objects, (gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDCenterObjectObjects1.length !== 0 ? gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDCenterObjectObjects1[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.func = function(runtimeScene, CenterObject, OrbitingObject, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDCenterObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDCenterObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects2.length = 0;

gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDCenterObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDCenterObjectObjects2.length = 0;
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects1.length = 0;
gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.GDOrbitingObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__OrbitingObjects__DeleteOrbitingObjects.registeredGdjsCallbacks = [];