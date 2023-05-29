function importWebsiteHeader(selected) {
   var tabsData = {
      'learn.html':'Learn',
      'ide.html':'Karel IDE',
   }
   var tabHtml = '';
   for (key in tabsData) {
      var className = (selected == key) ? "selectedtab" : "tab";
      var text = tabsData[key];
      tabHtml += '<a class='+className+' href="'+key+'" rel="nofollow">'+text+'</a>';
   }
   var html = '<div id="headerBackground">\
      <div id="header">        \
         <div class = "inner">\
            <a id="logo" href="learn.html" rel="nofollow"></a>  \
            <div id = "tabs"> ' + tabHtml + '\
               <span id = "social">\
               <iframe src="http://www.facebook.com/plugins/like.php?href=stanfordkarel.com&amp;layout=button_count&amp;show_faces=false&amp;width=90&amp;action=like&amp;colorscheme=light&amp;height=35" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; height:22px;" allowTransparency="true"></iframe>\
               </span>\
               <a class="smallLink" href="javascript:ReferenceDialog.createReferenceDialog()" rel="nofollow">Reference</a>\
            </div>\
         </div>\
      </div>\
   </div>';
   document.write(html);
}

function importCss() {
   var html = '<link rel="stylesheet" href="css/style.css" type="text/css" />';
   html += '<link rel="stylesheet" href="boxy/stylesheets/boxy.css" type="text/css" />';
   document.write(html);
}

/**
    * Function: Create Image Button
    * -------------
    * Makes a button with an image that lives in src. 
    * Returns the button
    */
   function createImageButton(parent, src, id, tooltip, specialClass) {
      var button = document.createElement('button');
      var buttonImage = document.createElement('img');
      buttonImage.setAttribute('src', src);
      buttonImage.setAttribute('height', 30);
      buttonImage.setAttribute('width', 30);
      button.appendChild(buttonImage);
      button.title = tooltip;
      button.id = id;
      button.className = 'interactor';
      if(specialClass){
         button.className = specialClass;
      }
      parent.appendChild(button);
      return button;
   }

   /**
    * Create Text Button
    * -------------
    * Makes a button with the given label 
    * Returns the button
    */
   function createTextButton(parent, label, id) {
      var button = document.createElement('button');
      button.innerHTML = label;
      button.id = id;
      parent.appendChild(button);
      return button;
   }

   function addText(parent, text) {
      parent.innerHTML += text;
   }

   function addSpace(parent) {
      addText(parent, '&nbsp;');
   }
   
   function addWorldDropDown(parent, specialId) {
      var worldDiv = document.createElement('div');
      if (specialId) {
         worldDiv.id = specialId
      } else {
         worldDiv.id = 'worldDiv'
      }
      addText(worldDiv, 'World: '); 
      var worldSelector = document.createElement('select');
      
      worldSelector.id = 'worldSelector';
      worldSelector.setAttribute('name', 'world');
      worldSelector.setAttribute('size', 0);
      worldDiv.appendChild(worldSelector);
      parent.appendChild(worldDiv);

      for(var i = 0; i < WORLDS.length; i++ ) {
         worldName = WORLDS[i];
         var optionElem = document.createElement('option');
         optionElem.setAttribute('value', i);
         optionElem.innerHTML = worldName;
         if (worldName == INITIAL_WORLD) {
            optionElem.setAttribute('selected', 'yes');
         }
         worldSelector.appendChild(optionElem);
      }
      return worldSelector;
   }
   
function importEditor(id, parentId) {
   var code = document.createElement('div');
   code.innerHTML = STARTER_CODE;
   code.id        = id;
   var editorDiv = document.getElementById(parentId);
   editorDiv.appendChild(code); 
   var editor = ace.edit(id);
   editor.setTheme('ace/theme/jeremys');
   var JavaScriptMode = require("ace/mode/javascript").Mode;
   editor.getSession().setMode(new JavaScriptMode());
   editor.setReadOnly(false);
   // this line turns off automatic error detection
   editor.getSession().setUseWorker(false);
   code.style.fontSize='16px';
   window._editor = editor;
   return editor; 
}

function importButtonBar() {
   var buttonBar = document.getElementById('buttonBarInner');
   // var playButton = createImageButton(buttonBar, 'images/uploadButton.png', 'uploadButton', 'Share');
   //addSpace(buttonBar);
   var playButton = createImageButton(buttonBar, 'images/playButton.png', 'playButton', 'Run');
   //addSpace(buttonBar);
   var stopButton = createImageButton(buttonBar, 'images/stopButton.png', 'stopButton', 'Reset');
   //addSpace(buttonBar);
   var worldSelector = addWorldDropDown(buttonBar, 'programWorldDrop');
}

function importScripts(list) {
   var html = '';
   for (var i = 0; i < list.length; i++) {
      html += list[i];
   }
   document.write(html);
}

function importJsLibraries() {
   var scripts = [
      '<script src="./lib/jquery.js" charset="utf-8"></script>',
      '<script src="./lib/browser_detect.js" charset="utf-8"></script>',
      '<script src="./lib/util.js" charset="utf-8"></script>',
      '<script src="./lib/tabs.js" charset="utf-8"></script>',
      '<script src="./codeMirror/js/codemirror.js" charset="utf-8"></script>',
      '<script src="./ace/ace-uncompressed.js" charset="utf-8"></script>',
      '<script src="./ace/theme-jeremys.js" charset="utf-8"></script>',
      '<script src="./ace/mode-javascript.js" charset="utf-8"></script>',
      '<script src="./lib/curvycorners.js" charset="utf-8"></script>',
	  '<script src="./lib/jquery.js" charset="utf-8"></script>',
      //'<script src="http://cdn.jquerytools.org/1.2.5/jquery.tools.min.js" charset="utf-8"></script>',
      '<script src="./boxy/jquery.boxy.js" charset="utf-8"></script>',
   ]
   importScripts(scripts);
}


function importKarelIde() {
   var scripts = [
		'<script src="./js/ide/karelImages.js" charset="utf-8"></script>',
		'<script src="./js/ide/karelSingleton.js" charset="utf-8"></script>',
		'<script src="./js/ide/karelConstants.js" charset="utf-8"></script>',
		'<script src="./js/ide/action.js" charset="utf-8"></script>',
		'<script src="./js/ide/beepers.js" charset="utf-8"></script>',
		'<script src="./js/ide/walls.js" charset="utf-8"></script>',
		'<script src="./js/ide/squareColors.js" charset="utf-8"></script>',
		'<script src="./js/ide/canvasModel.js" charset="utf-8"></script>',
		'<script src="./js/ide/karelModel.js" charset="utf-8"></script>',
		'<script src="./js/ide/karelView.js" charset="utf-8"></script>',
		'<script src="./js/ide/karel.js" charset="utf-8"></script>',
		'<script src="./js/ide/karelCompiledEngine.js" charset="utf-8"></script>',
		'<script src="./js/ide/karelEvalEngine.js" charset="utf-8"></script>',
		'<script src="./js/ide/karelIde.js" charset="utf-8"></script>',
		'<script src="./js/html/starterCode.js" charset="utf-8"></script>',
		'<!--<script src="./js/ide/mainIdeController.js" charset="utf-8"></script>-->',
	]
	importScripts(scripts);
		
}

function importCompiler() {
   var scripts = [ 
      '<script src="js/compiler/karelCompiler.js" charset="utf-8"></script>',
      '<script src="js/compiler/scanner/TokenScanner.js" charset="utf-8"></script>',
      '<script src="js/compiler/parser/Parser.js" charset="utf-8"></script>',
      '<script src="js/compiler/parser/XParser.js" charset="utf-8"></script>',
      '<script src="js/compiler/vm/VM.js" charset="utf-8"></script>',
      '<script src="js/compiler/vm/XVM.js" charset="utf-8"></script>',
      '<script src="js/compiler/karel/KarelParser.js" charset="utf-8"></script>',
      '<script src="js/compiler/karel/KarelVM.js" charset="utf-8"></script>'
   ]
   importScripts(scripts);	
}

function importLearnEngine() {
   var scripts = [

		'<script src="./js/learn/makeAbsoluteDiv.js" charset="utf-8"></script>',
		'<script src="./js/learn/unitProgress.js" charset="utf-8"></script>',
		'<script src="./js/learn/progressModel.js" charset="utf-8"></script>',
		'<script src="./js/learn/lessonsModel.js" charset="utf-8"></script>',
		'<script src="./js/learn/homeScreen.js" charset="utf-8"></script>',
		'<script src="./js/learn/textElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/textButton.js" charset="utf-8"></script>',
		'<script src="./js/learn/unitBox.js" charset="utf-8"></script>',
		'<script src="./js/learn/imageElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/unitTestElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/textBox.js" charset="utf-8"></script>',
		'<script src="./js/learn/videoElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/karelCommandButton.js" charset="utf-8"></script>',
		'<script src="./js/learn/karelEditorElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/karelStaticCanvasElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/karelCanvasElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/karelIdeMessage.js" charset="utf-8"></script>',
		'<script src="./js/learn/karelIdeButtons.js" charset="utf-8"></script>',
		'<script src="./js/learn/karelIdeElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/programElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/imageButton.js" charset="utf-8"></script>',
		'<script src="./js/learn/content.js" charset="utf-8"></script>',
		'<script src="./js/learn/centerArea.js" charset="utf-8"></script>',
		'<script src="./js/learn/titleElement.js" charset="utf-8"></script>',
		'<script src="./js/learn/header.js" charset="utf-8"></script>',
		'<script src="./js/learn/progressBox.js" charset="utf-8"></script>',
		'<script src="./js/learn/progressBar.js" charset="utf-8"></script>',
		'<script src="./js/learn/karelLearnEngine.js" charset="utf-8"></script>',
	]
	importScripts(scripts);	
}

function importController() {
   var scripts = [
		'<script src="./js/server/server.js" charset="utf-8"></script>',
	]
	importScripts(scripts);
}

function importReference() {
   var scripts = [
		'<script src="./js/dialog/referenceDialog.js" charset="utf-8"></script>',
		'<script src="./js/dialog/deployDialog.js" charset="utf-8"></script>',
	]
	importScripts(scripts);	
}

function importJs() {
   importJsLibraries();
   importController();
   importCompiler();
   importKarelIde();
   importLearnEngine();
   importReference();
}
