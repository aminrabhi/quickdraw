gdjs.start_32sceneCode = {};
gdjs.start_32sceneCode.localVariables = [];
gdjs.start_32sceneCode.GDipad_9595dev_9595buttonObjects1= [];
gdjs.start_32sceneCode.GDipad_9595dev_9595buttonObjects2= [];
gdjs.start_32sceneCode.GDtitle_9595textObjects1= [];
gdjs.start_32sceneCode.GDtitle_9595textObjects2= [];
gdjs.start_32sceneCode.GDplay_9595buttonObjects1= [];
gdjs.start_32sceneCode.GDplay_9595buttonObjects2= [];
gdjs.start_32sceneCode.GDplay_9595textObjects1= [];
gdjs.start_32sceneCode.GDplay_9595textObjects2= [];
gdjs.start_32sceneCode.GDquit_9595buttonObjects1= [];
gdjs.start_32sceneCode.GDquit_9595buttonObjects2= [];
gdjs.start_32sceneCode.GDquit_9595textObjects1= [];
gdjs.start_32sceneCode.GDquit_9595textObjects2= [];
gdjs.start_32sceneCode.GDDiscordObjects1= [];
gdjs.start_32sceneCode.GDDiscordObjects2= [];
gdjs.start_32sceneCode.GDhow_9595to_9595playObjects1= [];
gdjs.start_32sceneCode.GDhow_9595to_9595playObjects2= [];
gdjs.start_32sceneCode.GDbackgroundObjects1= [];
gdjs.start_32sceneCode.GDbackgroundObjects2= [];
gdjs.start_32sceneCode.GDsplash_9595textObjects1= [];
gdjs.start_32sceneCode.GDsplash_9595textObjects2= [];


gdjs.start_32sceneCode.mapOfGDgdjs_9546start_959532sceneCode_9546GDipad_95959595dev_95959595buttonObjects1Objects = Hashtable.newFrom({"ipad_dev_button": gdjs.start_32sceneCode.GDipad_9595dev_9595buttonObjects1});
gdjs.start_32sceneCode.mapOfGDgdjs_9546start_959532sceneCode_9546GDplay_95959595buttonObjects1Objects = Hashtable.newFrom({"play_button": gdjs.start_32sceneCode.GDplay_9595buttonObjects1});
gdjs.start_32sceneCode.mapOfGDgdjs_9546start_959532sceneCode_9546GDquit_95959595buttonObjects1Objects = Hashtable.newFrom({"quit_button": gdjs.start_32sceneCode.GDquit_9595buttonObjects1});
gdjs.start_32sceneCode.mapOfGDgdjs_9546start_959532sceneCode_9546GDDiscordObjects1Objects = Hashtable.newFrom({"Discord": gdjs.start_32sceneCode.GDDiscordObjects1});
gdjs.start_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ipad_dev_button"), gdjs.start_32sceneCode.GDipad_9595dev_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.start_32sceneCode.mapOfGDgdjs_9546start_959532sceneCode_9546GDipad_95959595dev_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Desert of Doom", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.start_32sceneCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.start_32sceneCode.mapOfGDgdjs_9546start_959532sceneCode_9546GDplay_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Desert of Doom", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit_button"), gdjs.start_32sceneCode.GDquit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.start_32sceneCode.mapOfGDgdjs_9546start_959532sceneCode_9546GDquit_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Discord"), gdjs.start_32sceneCode.GDDiscordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.start_32sceneCode.mapOfGDgdjs_9546start_959532sceneCode_9546GDDiscordObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://discord.gg/rfm78Dsy8E", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.start_32sceneCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i].getVariableNumber(gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.start_32sceneCode.GDplay_9595buttonObjects1[k] = gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.start_32sceneCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.start_32sceneCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i].getVariableNumber(gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.start_32sceneCode.GDplay_9595buttonObjects1[k] = gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.start_32sceneCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.start_32sceneCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i].getVariableNumber(gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.start_32sceneCode.GDplay_9595buttonObjects1[k] = gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.start_32sceneCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.start_32sceneCode.GDplay_9595buttonObjects1[i].setAnimationFrame(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit_button"), gdjs.start_32sceneCode.GDquit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i].getVariableNumber(gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.start_32sceneCode.GDquit_9595buttonObjects1[k] = gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.start_32sceneCode.GDquit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit_button"), gdjs.start_32sceneCode.GDquit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i].getVariableNumber(gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.start_32sceneCode.GDquit_9595buttonObjects1[k] = gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.start_32sceneCode.GDquit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit_button"), gdjs.start_32sceneCode.GDquit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i].getVariableNumber(gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.start_32sceneCode.GDquit_9595buttonObjects1[k] = gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.start_32sceneCode.GDquit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.start_32sceneCode.GDquit_9595buttonObjects1[i].setAnimationFrame(3);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.start_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.start_32sceneCode.GDipad_9595dev_9595buttonObjects1.length = 0;
gdjs.start_32sceneCode.GDipad_9595dev_9595buttonObjects2.length = 0;
gdjs.start_32sceneCode.GDtitle_9595textObjects1.length = 0;
gdjs.start_32sceneCode.GDtitle_9595textObjects2.length = 0;
gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length = 0;
gdjs.start_32sceneCode.GDplay_9595buttonObjects2.length = 0;
gdjs.start_32sceneCode.GDplay_9595textObjects1.length = 0;
gdjs.start_32sceneCode.GDplay_9595textObjects2.length = 0;
gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length = 0;
gdjs.start_32sceneCode.GDquit_9595buttonObjects2.length = 0;
gdjs.start_32sceneCode.GDquit_9595textObjects1.length = 0;
gdjs.start_32sceneCode.GDquit_9595textObjects2.length = 0;
gdjs.start_32sceneCode.GDDiscordObjects1.length = 0;
gdjs.start_32sceneCode.GDDiscordObjects2.length = 0;
gdjs.start_32sceneCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.start_32sceneCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.start_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.start_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.start_32sceneCode.GDsplash_9595textObjects1.length = 0;
gdjs.start_32sceneCode.GDsplash_9595textObjects2.length = 0;

gdjs.start_32sceneCode.eventsList0(runtimeScene);
gdjs.start_32sceneCode.GDipad_9595dev_9595buttonObjects1.length = 0;
gdjs.start_32sceneCode.GDipad_9595dev_9595buttonObjects2.length = 0;
gdjs.start_32sceneCode.GDtitle_9595textObjects1.length = 0;
gdjs.start_32sceneCode.GDtitle_9595textObjects2.length = 0;
gdjs.start_32sceneCode.GDplay_9595buttonObjects1.length = 0;
gdjs.start_32sceneCode.GDplay_9595buttonObjects2.length = 0;
gdjs.start_32sceneCode.GDplay_9595textObjects1.length = 0;
gdjs.start_32sceneCode.GDplay_9595textObjects2.length = 0;
gdjs.start_32sceneCode.GDquit_9595buttonObjects1.length = 0;
gdjs.start_32sceneCode.GDquit_9595buttonObjects2.length = 0;
gdjs.start_32sceneCode.GDquit_9595textObjects1.length = 0;
gdjs.start_32sceneCode.GDquit_9595textObjects2.length = 0;
gdjs.start_32sceneCode.GDDiscordObjects1.length = 0;
gdjs.start_32sceneCode.GDDiscordObjects2.length = 0;
gdjs.start_32sceneCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.start_32sceneCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.start_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.start_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.start_32sceneCode.GDsplash_9595textObjects1.length = 0;
gdjs.start_32sceneCode.GDsplash_9595textObjects2.length = 0;


return;

}

gdjs['start_32sceneCode'] = gdjs.start_32sceneCode;
