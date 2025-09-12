gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDipad_9595dev_9595buttonObjects1= [];
gdjs.Game_32OverCode.GDipad_9595dev_9595buttonObjects2= [];
gdjs.Game_32OverCode.GDgameover_9595textObjects1= [];
gdjs.Game_32OverCode.GDgameover_9595textObjects2= [];
gdjs.Game_32OverCode.GDplay_9595buttonObjects1= [];
gdjs.Game_32OverCode.GDplay_9595buttonObjects2= [];
gdjs.Game_32OverCode.GDplay_9595textObjects1= [];
gdjs.Game_32OverCode.GDplay_9595textObjects2= [];
gdjs.Game_32OverCode.GDquit_9595buttonObjects1= [];
gdjs.Game_32OverCode.GDquit_9595buttonObjects2= [];
gdjs.Game_32OverCode.GDquit_9595textObjects1= [];
gdjs.Game_32OverCode.GDquit_9595textObjects2= [];
gdjs.Game_32OverCode.GDDiscordObjects1= [];
gdjs.Game_32OverCode.GDDiscordObjects2= [];
gdjs.Game_32OverCode.GDhow_9595to_9595playObjects1= [];
gdjs.Game_32OverCode.GDhow_9595to_9595playObjects2= [];
gdjs.Game_32OverCode.GDbackgroundObjects1= [];
gdjs.Game_32OverCode.GDbackgroundObjects2= [];
gdjs.Game_32OverCode.GDtitle_9595text3Objects1= [];
gdjs.Game_32OverCode.GDtitle_9595text3Objects2= [];


gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDipad_95959595dev_95959595buttonObjects1Objects = Hashtable.newFrom({"ipad_dev_button": gdjs.Game_32OverCode.GDipad_9595dev_9595buttonObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDplay_95959595buttonObjects1Objects = Hashtable.newFrom({"play_button": gdjs.Game_32OverCode.GDplay_9595buttonObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDquit_95959595buttonObjects1Objects = Hashtable.newFrom({"quit_button": gdjs.Game_32OverCode.GDquit_9595buttonObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDDiscordObjects1Objects = Hashtable.newFrom({"Discord": gdjs.Game_32OverCode.GDDiscordObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ipad_dev_button"), gdjs.Game_32OverCode.GDipad_9595dev_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDipad_95959595dev_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Desert of Doom", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.Game_32OverCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDplay_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit_button"), gdjs.Game_32OverCode.GDquit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDquit_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Discord"), gdjs.Game_32OverCode.GDDiscordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDDiscordObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://discord.gg/rfm78Dsy8E", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.Game_32OverCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i].getVariableNumber(gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDplay_9595buttonObjects1[k] = gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.Game_32OverCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i].getVariableNumber(gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDplay_9595buttonObjects1[k] = gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_button"), gdjs.Game_32OverCode.GDplay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i].getVariableNumber(gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDplay_9595buttonObjects1[k] = gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDplay_9595buttonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDplay_9595buttonObjects1[i].setAnimationFrame(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit_button"), gdjs.Game_32OverCode.GDquit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i].getVariableNumber(gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDquit_9595buttonObjects1[k] = gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDquit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit_button"), gdjs.Game_32OverCode.GDquit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i].getVariableNumber(gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDquit_9595buttonObjects1[k] = gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDquit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit_button"), gdjs.Game_32OverCode.GDquit_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i].getVariableNumber(gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDquit_9595buttonObjects1[k] = gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDquit_9595buttonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDquit_9595buttonObjects1[i].setAnimationFrame(3);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDipad_9595dev_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDipad_9595dev_9595buttonObjects2.length = 0;
gdjs.Game_32OverCode.GDgameover_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDgameover_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDplay_9595buttonObjects2.length = 0;
gdjs.Game_32OverCode.GDplay_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDplay_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDquit_9595buttonObjects2.length = 0;
gdjs.Game_32OverCode.GDquit_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDquit_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDDiscordObjects1.length = 0;
gdjs.Game_32OverCode.GDDiscordObjects2.length = 0;
gdjs.Game_32OverCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Game_32OverCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDtitle_9595text3Objects1.length = 0;
gdjs.Game_32OverCode.GDtitle_9595text3Objects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDipad_9595dev_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDipad_9595dev_9595buttonObjects2.length = 0;
gdjs.Game_32OverCode.GDgameover_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDgameover_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDplay_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDplay_9595buttonObjects2.length = 0;
gdjs.Game_32OverCode.GDplay_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDplay_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDquit_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDquit_9595buttonObjects2.length = 0;
gdjs.Game_32OverCode.GDquit_9595textObjects1.length = 0;
gdjs.Game_32OverCode.GDquit_9595textObjects2.length = 0;
gdjs.Game_32OverCode.GDDiscordObjects1.length = 0;
gdjs.Game_32OverCode.GDDiscordObjects2.length = 0;
gdjs.Game_32OverCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Game_32OverCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDtitle_9595text3Objects1.length = 0;
gdjs.Game_32OverCode.GDtitle_9595text3Objects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
