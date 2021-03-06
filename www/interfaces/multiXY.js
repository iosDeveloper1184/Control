interfaceString = "loadedInterfaceName = \"MultiTouchXY\";\
\
interfaceOrientation = \"portrait\";\
\
whRatio = 2 / 3;\
infoText = \"This is a demo of the MultiTouchXY widget. It starts by keeping track of 5 touches but you can add more by pressing the add touch button. If an OSC destination is selected it will output to the following address pattern : <br><br> /multi/touchNumber xValue yValue<br><br>If it is outputting MIDI the touches will start at CC 0. Even CC numbers will be the X values for each touch; odd willrepresent the Y values. For example, touch 3 will output a value between 0 - 127 based on its X value on CC 4, the y value will be on CC 5. <br><br>There is also a momentary mode for the MultiTouchXY widget where the positions are not retained; whenever a touch is released the corresponding square vanishes.\";\
\
function removeTouch() {\
	var multi = window.multi;\
	var touchToKill = multi.children.pop();   /* remove last child and map to variable */\
	multi.container.removeChild(touchToKill); /* remove from web renderer */\
}\
window.removeTouch = removeTouch;\
\
pages = [[\
{\
    \"name\": \"multi\",\
    \"type\": \"MultiTouchXY\",\
    \"x\": .0,\
    \"y\": .0,\
    \"width\": 1,\
    \"height\": .8,\
    \"color\": \"#555555\",\
    \"stroke\": \"#aaaaaa\",\
    \"mode\": \"momentary\",\
    \"protocol\": \"OSC\",\
    \"midiType\": \"cc\",\
    \"midiNumber\": 5,\
    \"maxTouches\": 5,\
    \"isMomentary\": false,\
    \"requiresTouchDown\": false,\
},\
\
{\
    \"name\": \"addButton\",\
    \"type\": \"Button\",\
    \"x\": .2,\
    \"y\": .825,\
    \"width\": .2,\
    \"height\": .15 * whRatio,\
    \"mode\": \"contact\",\
    \"color\": \"#0000aa\",\
    \"stroke\": \"#aaaaaa\",\
    \"isLocal\": true,\
    \"ontouchstart\": \"multi.addTouch(multi.x + 20, multi.y + 20, multi.children.length);\",\
	\"label\": \"touch +\",\
},\
\
{\
    \"name\": \"removeButton\",\
    \"type\": \"Button\",\
	\"bounds\": [.0, .825, .2, .15 * whRatio],\
    \"mode\": \"contact\",\
    \"color\": \"#0000aa\",\
    \"stroke\": \"#aaaaaa\",\
    \"isLocal\": true,\
    \"ontouchstart\": \"window.removeTouch();\",\
	\"label\": \"touch -\",\
},\
\
\
{\
    \"name\": \"tabButton\",\
    \"type\": \"Button\",\
    \"x\": .8,\
    \"y\": .825,\
    \"width\": .2,\
    \"height\": .15 * whRatio,\
    \"mode\": \"toggle\",\
    \"color\": \"#333333\",\
    \"stroke\": \"#aaaaaa\",\
    \"isLocal\": true,\
	\"ontouchstart\": \"if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }\",\
},\
{\
    \"name\": \"tabButtonLabel\",\
    \"type\": \"Label\",\
    \"x\": .8,\
    \"y\": .825,\
    \"width\": .2,\
    \"height\": .15 * whRatio,\
    \"mode\": \"contact\",\
    \"isLocal\": true,\
    \"value\": \"menu\",\
},\
{\
    \"name\": \"infoButton\",\
    \"type\": \"Button\",\
    \"x\": .6,\
    \"y\": .825,\
    \"width\": .2,\
    \"height\": .15 * whRatio,\
    \"mode\": \"contact\",\
    \"color\": \"#333333\",\
    \"stroke\": \"#aaaaaa\",\
    \"midiType\": \"noteon\",\
    \"isLocal\": true,\
    \"ontouchstart\": \"control.changePage(1);\",\
},\
{\
    \"name\": \"infoButtonLabel\",\
    \"type\": \"Label\",\
    \"x\": .6,\
    \"y\": .825,\
    \"width\": .2,\
    \"height\": .15 * whRatio,\
    \"color\": \"#fff\",\
    \"value\": \"info\",\
},\
\
],\
[\
{\
    \"name\": \"infoText\",\
    \"type\": \"Label\",\
    \"x\": .1,\
    \"y\": .1,\
    \"width\": .8,\
    \"height\": .7,\
    \"value\": infoText,\
    \"verticalCenter\": false,\
    \"align\": \"left\",\
},\
{\
    \"name\": \"backButton\",\
    \"type\": \"Button\",\
    \"x\": .8,\
    \"y\": .9,\
    \"width\": .19,\
    \"height\": .09,\
    \"mode\": \"contact\",\
    \"color\": \"#333333\",\
    \"stroke\": \"#aaaaaa\",\
    \"isLocal\": true,\
    \"ontouchstart\": \"control.changePage(0);\",\
},\
{\
    \"name\": \"infoButtonLabel\",\
    \"type\": \"Label\",\
    \"x\": .8,\
    \"y\": .9,\
    \"width\": .19,\
    \"height\": .09,\
    \"color\": \"#fff\",\
    \"value\": \"back\",\
},\
\
],\
\
];";