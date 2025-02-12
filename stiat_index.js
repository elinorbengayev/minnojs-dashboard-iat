/**
* @preserve minnojs-stiat-dashboard v1.0.0
* @license Apache-2.0 (2021)
*/

(function () {
	'use strict';

	var tabsComponent = {
	    controller: function(tabs){
			var tab = tabs[0].value; // set default tab
			var index = setIndex(tab);
			return { tab: tab, index: index, setIndex:setIndex};

			function setIndex(tab){ return tabs.findIndex((element) => (element.value == tab));}
	    },
		view: function(ctrl, tabs, settings, defaultSettings){
			return m('.container', [
				m('.tab', tabs.map(function(tab){
					if (tab.value == 'practice') {
						if(settings.parameters.practiceBlock == false) return null;
					}
					return m('button', {
	                    class: ctrl.tab == tab.value ? 'active' : '',
	                    onclick:function(){
							ctrl.tab = tab.value;
							ctrl.index = ctrl.setIndex(tab.value);
						}},tab.text);
				})),
				m('.div', [
					m.component(tabs[ctrl.index].component, settings, defaultSettings, tabs[ctrl.index].rowsDesc)
				])
			]);
		}
	};

	let settings = {
	    parameters : {isQualtrics:false, base_url:''},
	    category: {name: 'Black people', title: {media: { word : 'Black people'}, css: {color: '#31b404', 'font-size': '2em'}, height: 4},
	        stimulusMedia: [{word: 'Tayron'}, {word: 'Malik'},{word: 'Terrell'},{word: 'Jazamin'},{word: 'Tiara'},{word: 'Shanice'}],
	        stimulusCss : {color:'#31b404', 'font-size':'2em'}
	    },
	    attribute1: {name: 'Unpleasant', title: {media: { word : 'Unpleasant'}, css: {color: '#31b404', 'font-size': '2em'}, height: 4},
	        stimulusMedia: [{word: 'Bomb'}, {word: 'Abuse'},{word: 'Sadness'},{word: 'Pain'},{word: 'Poison'},{word: 'Grief'}],
	        stimulusCss : {color:'#31b404', 'font-size':'2em'}
	    },
	    attribute2: {name: 'Pleasant', title: {media: { word : 'Pleasant'}, css: {color: '#31b404', 'font-size': '2em'}, height: 4},
	        stimulusMedia: [{word: 'Paradise'}, {word: 'Pleasure'},{word: 'Cheer'},{word: 'Wonderful'},{word: 'Splendid'},{word: 'Love'}],
	        stimulusCss : {color:'#31b404', 'font-size':'2em'}
	    },
	    trialsByBlock : 
	    [//Each object in this array defines a block
	        {
	            instHTML : '', 
	            block : 1,
	            miniBlocks : 1, 
	            singleAttTrials : 10, 
	            sharedAttTrials : 10, 
	            categoryTrials : 0 
	        }, 
	        { 
	            instHTML : '', 
	            block : 2, 
	            miniBlocks : 2, 
	            singleAttTrials : 10, 
	            sharedAttTrials : 7, 
	            categoryTrials : 7
	        }, 
	        { 
	            instHTML : '', 
	            block : 3, 
	            miniBlocks : 2, 
	            singleAttTrials : 10, 
	            sharedAttTrials : 7, 
	            categoryTrials : 7
	        }, 
	        { 
	            instHTML : '', 
	            block : 4, 
	            miniBlocks : 2, 
	            singleAttTrials : 10, 
	            sharedAttTrials : 7, 
	            categoryTrials : 7
	        }, 
	        { 
	            instHTML : '', 
	            block : 5, 
	            miniBlocks : 2, 
	            singleAttTrials : 10, 
	            sharedAttTrials : 7, 
	            categoryTrials : 7
	        }
	    ],
	    blockOrder : 'random', //can be startRight/startLeft/random
	    switchSideBlock : 4, //By default, we switch on block 4 (i.e., after blocks 2 and 3 showed the first pairing condition).
	    text: {
	        leftKeyText:'Press "E" for',
	        rightKeyText:'Press "I" for',
	        orKeyText:'or',
	        remindErrorText : '<p style="font-size:0.6em;font-family:arial sans-serif; text-align:center;">' +
	            'If you make a mistake, a red <font-color="#ff0000"><b>X</b></font> will appear. ' +
	            'Press the other key to continue.<p/>',
	        finalText : 'You have completed this task<br/><br/>Press SPACE to continue.', 
	        instTemplatePractice : '<div><p align="center" style="font-size:20px; font-family:arial">' +
	            '<font color="#000000"><u>Part blockNum of nBlocks</u><br/><br/></p>' + 
	            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
	            'Put a left finger on the <b>E</b> key for items that belong to the category ' + 
	            '<font color="#31b404">attribute1</font>.<br/>' + 
	            'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
	            '<font color="#31b404">attribute2</font>.<br/>' + 
	            'Items will appear one at a time.<br/><br/>' + 
	            'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
	            'Press the other key to continue.<br/><br/>' + 
	            '<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
	        instTemplateCategoryRight : '<div><p align="center" style="font-size:20px; font-family:arial">' +
	            '<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
	            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
	            'Put a left finger on the <b>E</b> key for items that belong to the category ' + 
	            '<font color="#31b404">attribute1</font>.<br/>' + 
	            'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
	            '<font color="#31b404">attribute2</font> ' +
	            'and for items that belong to the category <font color="#31b404">thecategory</font>.<br/>' + 
	            'Items will appear one at a time.<br/><br/>' + 
	            'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
	            'Press the other key to continue.<br/><br/>' + 
	            '<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
	        instTemplateCategoryLeft : '<div><p align="center" style="font-size:20px; font-family:arial">' +
	            '<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
	            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
	            'Put a left finger on the <b>E</b> key for items that belong to the category ' + 
	            '<font color="#31b404">attribute1</font> ' +
	            'and for items that belong to the category <font color="#31b404">thecategory</font>.<br/>' + 
	            'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
	            '<font color="#31b404">attribute2</font>.<br/>' + 
	            'Items will appear one at a time.<br/><br/>' + 
	            'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
	            'Press the other key to continue.<br/><br/>' + 
	            '<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
	    }
	};

	var parametersComponent = {
	    controller:controller,
	    view:view
	};

	function controller(settings, defaultSettings, rows){
	    var parameters = settings.parameters;
	    return {reset:reset, clear:clear, set:set, get:get, rows: rows};
	    
	    function reset(){Object.assign(parameters, defaultSettings.parameters);}
	    function clear(){Object.assign(parameters, rows.slice(-1)[0]);}    function get(name){
	        if (name == 'isTouch')
	            if(parameters[name] == true) return 'Touch' 
	            else return 'Keyboard';
	        if (name == 'isQualtrics')
	            if (parameters[name] == true){return 'Qualtrics'}
	            else return 'Regular';
	        return parameters[name];
	    }
	    function set(name){return function(value){ 
	        if (name == 'isTouch')
	            if(value == 'Keyboard') return parameters[name] = false;
	            else return parameters[name] = true;
	        if (name == 'isQualtrics')
	            if (value == 'Regular') return parameters[name] = false;
	            else return parameters[name] = true;
	        return parameters[name] = value; 
	    }}
	}

	function view(ctrl){
	    return m('.container' , [
	        ctrl.rows.slice(0,-1).map((row) => {
	            if ((row.name === 'fullscreen' || row.name === 'showDebriefing') && ctrl.get('isQualtrics') === 'Regular') {
	                return null;
	            }
	            return m('.row top-buffer', [
	                    m('.col-auto info-buffer',[
	                        m('i.fa.fa-info-circle'),
	                        m('.card.info-box.card-header', [row.desc])
	                    ]),
	                    m('.col-3 param-buffer', row.label),
	                    row.name.includes('key') ? //case of keys parameters
	                    m('.col-8 param-buffer',
	                    m('input[type=text].form-control',{style: {width:'3rem'}, value:ctrl.get(row.name), onchange:m.withAttr('value', ctrl.set(row.name))}))                    
	                    : row.options ? //case of isTouch and isQualtrics
	                    m('.col-8 param-buffer',
	                    m('select.form-control',{value: ctrl.get(row.name), onchange:m.withAttr('value',ctrl.set(row.name)), style: {width: '8.3rem', height:'2.8rem'}},[
	                    row.options.map(function(option){return m('option', option);})
	                    ]))
	                    :
	                    m('.col-8 param-buffer',
	                    m('input[type=checkbox]', {onclick: m.withAttr('checked', ctrl.set(row.name)), checked: ctrl.get(row.name)}))
	                    ])
	        }),
	        m('.row top-buffer', [
	            m('.col-auto info-buffer',[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['If your task has any images, enter here the path to that images folder. It can be a full url, or a relative URL to the folder that will host this script'])
	            ]),
	            m('.col-3 param-buffer', 'Image\'s URL'),
	            m('.col-8 param-buffer',
	                m('input[type=text].form-control',{style: {width: '30rem'}, value:ctrl.get('base_url'), onchange:m.withAttr('value', ctrl.set('base_url'))}))
	        ]),
	        m('.row.space',[
	            m('.col',{style:{'margin-bottom':'7px'}},[
	                m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons', float: 'right'}},[
	                    m('button.btn btn-secondary', 
	                        {title:'Reset all current fields to default values', onclick: () => confirm('Are you sure you want to reset the current form?\n This action is permanent') ? ctrl.reset() : null},[
	                        m('i.fas fa-undo fa-sm'), ' Reset'
	                    ]),
	                    m('button.btn btn-danger',
	                        {title:'Clears all current values',onclick:() => confirm('Are you sure you want to clear the current form?\n This action is permanent') ? ctrl.clear() : null},[
	                        m('i.far fa-trash-alt fa-sm'), ' Clear'
	                    ]),
	                ]),
	            ]),
	        ])
	    ])
	}

	function clone(obj){
	    return JSON.parse(JSON.stringify(obj));
	}

	function checkMissingElementName(element, name_to_display, error_msg){
	    let containsImage = false;
	    
	    //check for missing titles and names
	    if(element.name.length == 0)
	        error_msg.push(name_to_display+'\'s\ name is missing');

	    if(element.title.media.image !== undefined){
	        containsImage = true;
	        if(element.title.media.image.length == 0){
	            error_msg.push(name_to_display+'\'s\ title is missing');   
	        } 
	    }
	    else {
	        if(element.title.media.word.length == 0)
	            error_msg.push(name_to_display+'\'s\ title is missing');
	    }
	    let stimulusMedia = element.stimulusMedia;
	    
	    //if there an empty stimulli list
	    if (stimulusMedia.length === 0) 
	        error_msg.push(name_to_display+'\'s stimuli list is empty, please enter at least one stimulus.');
	    
	    //check if the stimuli contains images
	    for(let i = 0; i < stimulusMedia.length ;i++)
	        if(stimulusMedia[i].image) containsImage = true;
	    

	    return containsImage
	}


	    // function checkMissingElementName(element, name_to_display){
	    //     if(settings[element].name.length == 0)
	    //         error_msg.push(name_to_display+'\'s\ name is missing');
	    
	    //     if(settings[element].title.media.image !== undefined){
	    //         containsImage = true
	    //         if(settings[element].title.media.image.length == 0){
	    //             error_msg.push(name_to_display+'\'s\ title is missing');
	    //         }
	    //     }
	    //     else{
	    //         if(settings[element].title.media.word.length == 0){
	    //             error_msg.push(name_to_display+'\'s\ title is missing');
	    //         }   
	    //     }
	    
	    //     let stimulusMedia = settings[element].stimulusMedia
	    //     for(let i = 0; i < stimulusMedia.length ;i++){
	    //         if(stimulusMedia[i].image) containsImage = true
	    //     }
	    // }

	let outputComponent = {
	    view:view$1,
	    controller:controller$1,
	};

	function controller$1(settings, defaultSettings, clearBlock){
	    let error_msg = [];

	    validityCheck(settings);
	    settings = updateMediaSettings();

	    return {error_msg, createFile, printToPage};

	    function validityCheck(settings){
	        let containsImage = false;

	        let temp1 = checkMissingElementName(settings.category, 'Category', error_msg);
	        let temp2 = checkMissingElementName(settings.attribute1, 'First Attribute', error_msg); 
	        let temp3 = checkMissingElementName(settings.attribute2, 'Second Attribute', error_msg);
	        if (temp1 || temp2 || temp3) containsImage = true;
	        else containsImage = false; 
	        
	        if(settings.parameters.base_url.length == 0 && containsImage)
	            error_msg.push('Image\'s\ url is missing and there is an image in the study');    
	        
	        //check for blocks problems
	        let currBlocks = clone(settings.trialsByBlock);
	        clearBlock = clone(clearBlock[0]); //blocks parameters with zeros as the values, used to check if the current parameters are also zeros.
	        delete clearBlock.block;
	        
	        let count = 0;
	        let temp_err_msg = [];
	        currBlocks.forEach(function(element, index){ //remove those parameters for the comparsion
	            delete element.block;
	            if(JSON.stringify(element) === JSON.stringify(clearBlock)){
	                temp_err_msg.push('All block #'+(index+1)+' parameters equals to 0, that will result in skiping this block'); 
	                count++;
	            }   
	        });
	        if (count === currBlocks.length)
	            error_msg.push('All the block\'s parameters equals to 0, that will result in not showing the task at all');    
	        else if (temp_err_msg.length !==0) error_msg = error_msg.concat(temp_err_msg);

	    }

	    function createFile(fileType){
	        return function(){
	            let output,textFileAsBlob;
	            let downloadLink = document.createElement('a');
	            if (fileType === 'JS') {
	                output = toString();
	                textFileAsBlob = new Blob([output], {type:'text/plain'});
	                downloadLink.download = 'STIAT.js'; }
	            else {
	                output = updateSettings();
	                textFileAsBlob = new Blob([JSON.stringify(output,null,4)], {type : 'application/json'});
	                downloadLink.download = 'STIAT.json'; }
	            if (window.webkitURL != null) {downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);}
	            else {
	                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	                downloadLink.style.display = 'none';
	                document.body.appendChild(downloadLink);
	            }
	            downloadLink.click();
	        };
	    }
	  
	    function printToPage(){
	        return function() {
	            let para = document.getElementById('textDiv');
	            para.style.visibility = 'visible';
	            let text_area = document.getElementById('textArea');
	            text_area.value = toString();
	        };
	    }
	    
	    function toString(){
	        return toScript(updateSettings());
	    }
	    
	    function updateMediaSettings(){
	        //update attributes to be compatible to STIAT
	        let settings_output = clone(settings);
	        settings_output.category.media = settings_output.category.stimulusMedia;
	        delete settings_output.category.stimulusMedia;
	        settings_output.attribute1.media = settings_output.attribute1.stimulusMedia;
	        delete settings_output.attribute1.stimulusMedia;
	        settings_output.attribute2.media = settings_output.attribute2.stimulusMedia;
	        delete settings_output.attribute2.stimulusMedia;

	        settings_output.category.css = settings_output.category.stimulusCss; 
	        delete settings_output.category.stimulusCss; 
	        settings_output.attribute1.css = settings_output.attribute1.stimulusCss; 
	        delete settings_output.attribute1.stimulusCss; 
	        settings_output.attribute2.css = settings_output.attribute2.stimulusCss; 
	        delete settings_output.attribute2.stimulusCss; 
	        return settings_output
	    }
	    
	    function updateSettings(){
	        let output={
	            category: settings.category,
	            attribute1: settings.attribute1,
	            attribute2: settings.attribute2,
	            base_url: settings.parameters.base_url,
	            remindError: settings.parameters.remindError,
	            trialsByBlock: settings.trialsByBlock,
	            blockOrder: settings.blockOrder,
	            switchSideBlock: settings.switchSideBlock
	        };
	        if(settings.parameters.isQualtrics){
	            output.isQualtrics=settings.parameters.isQualtrics;
	        }
	        Object.assign(output, settings.text); 
	        return output;
	    }
	    
	    function toScript(output){
	        return `define(['pipAPI' ,'${output.isQualtrics ? 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js': 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/stiat6.js'}'], function(APIConstructor, stiatExtension) {var API = new APIConstructor(); return stiatExtension(${JSON.stringify(output,null,4)});});`;
	    }
	}

	function view$1(ctrl){
	    return m('.container',[
	        m('.alert alert-danger', {role:'alert',style: {'margin-top':'20px',visibility: ctrl.error_msg.length === 0 ? 'hidden' : 'visible'}},[
	            m('h6','Some problems were found in your script, it\'s recommended to fix them before proceeding to download:'),
	            m('ul',[
	                ctrl.error_msg.map(function(err){
	                    return m('li',err);
	                })
	            ])
	        ]),
	        m('.row justify-content-md-center',[
	            m('.col-auto'),
	            m('col-auto',[
	                m('.btn-group-vertical', {style:{'data-toggle':'buttons'}},[
	                    m('button.CreateFile', {onclick: ctrl.createFile('JS')},[
	                        m('i.fas fa-file-download'), ' Download Script']),
	                    m('button.CreateJSONFile', {onclick: ctrl.createFile('JSON')},[
	                        m('i.fas fa-file-download'), ' Download JSON']),
	                    m('button.CreateJSONFile', {onclick: ctrl.printToPage()}, 'Print to Browser')
	                ])
	            ]),
	            m('.col-auto',{style:{'padding':'1.7em 0em 5em 1em',float:'left'}},[
	                m('row',[
	                    m('i.fa.fa-info-circle'),
	                    m('.card.info-box.card-header', ['Download the JavaScript file. For more details how to use it, see the “Help” page.']),
	                ]),
	                m('.row',[
	                    m('.col-auto',{style:{'padding-top':'3.45em'}},[
	                        m('i.fa.fa-info-circle'),
	                        m('.card.info-box.card-header', ['Importing this file to this tool, will load all your parameters to this tool.']),
	                    ])
	                ])
	            ]),
	        ]),
	        m('div',{id: 'textDiv', style: {visibility: 'hidden', 'padding' :'0 0 0 3.5em'}},
	            m('textarea.form-control', {id:'textArea', value:'', style: {width : '60rem', height: '25rem'}}))
	    ]);

	}

	let textComponent = {
	    controller:controller$2,
	    view:view$2
	};

	function controller$2(settings, defaultSettings, rows){
	    var textparameters;
	    var isTouch = settings.parameters.isTouch;
	    isTouch ? textparameters = settings.touch_text : textparameters = settings.text;
	    return {reset:reset, clear:clear, set:set, get:get, rows: rows.slice(0,-2), isTouch};
	    
	    function reset(){isTouch ? Object.assign(textparameters, defaultSettings.touch_text) : Object.assign(textparameters, defaultSettings.text);}
	    function clear(){isTouch ? Object.assign(textparameters, rows.slice(-1)[0]) : Object.assign(textparameters, rows.slice(-2)[0]);}
	    function get(name){return textparameters[name];}
	    function set(name){ 
	        return function(value){return textparameters[name] = value;};
	    }
	}

	function view$2(ctrl, settings){
	    return m('.container' , [
	        ctrl.rows.map(function(row) {
	            //if touch parameter is choosen, don't show the irrelevant text parametes
	            if (settings.parameters.isTouch === true && row.nameTouch === undefined) {
	                return null;
	            }
	            return m('.row top-buffer', [
	                m('.col-auto info-buffer',[
	                    m('i.fa.fa-info-circle'),
	                    m('.card.info-box.card-header', {style:{width: '510px'}},[row.desc])
	                ]),
	                m('.col-3 param-buffer', {style:{width: '30%'}},row.label),
	                m('.col-8 param-buffer', [
	                    m('textarea.form-control',{style: {width: '30rem' ,height: '5.5rem'}, value:ctrl.get(ctrl.isTouch ? row.nameTouch : row.name), onchange:m.withAttr('value', ctrl.set(ctrl.isTouch ? row.nameTouch : row.name))})
	                ])
	            ]);
	        }),
	        m('.row.space',[
	            m('.col',{style:{'margin-bottom':'7px'}},[
	                m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons', float: 'right'}},[
	                    m('button.btn btn-secondary', 
	                        {title:'Reset all current fields to default values', onclick: () => confirm('Are you sure you want to reset the current form?\n This action is permanent') ? ctrl.reset() : null},[
	                        m('i.fas fa-undo fa-sm'), ' Reset'
	                    ]),
	                    m('button.btn btn-danger',
	                        {title:'Clears all current values',onclick:() => confirm('Are you sure you want to clear the current form?\n This action is permanent') ? ctrl.clear() : null},[
	                        m('i.far fa-trash-alt fa-sm'), ' Clear'
	                    ]),
	                ]),
	            ]),
	        ]),
	    ]);
	}

	let blocksComponent = {
	    controller:controller$3,
	    view:view$3
	};

	function controller$3(settings, defaultSettings, clearBlock){
	    var blocks = settings.trialsByBlock;
	    let addFlag =  m.prop(blocks.length < 30 ? 'visible' : 'hidden');
	    let removeFlag = m.prop('hidden');
	    let chooseFlag = m.prop('hidden');
	    let choosenBlocksList = [];
	    let chooseClicked = m.prop(false);
	    return {reset:reset, clear:clear, set:set, get:get, blocks:blocks, getParameters: getParameters, 
	        setParameters:setParameters, addFlag:addFlag, removeFlag:removeFlag, 
	        chooseFlag:chooseFlag, addBlock:addBlock, removeBlocks:removeBlocks,
	        choosenBlocksList:choosenBlocksList, updateChoosenBlocks: updateChoosenBlocks, chooseBlocks:chooseBlocks};
	    
	    function reset(){
	        Object.assign(blocks, clone(defaultSettings.trialsByBlock));
	        if(blocks.length>5){
	            blocks.length=5;
	        }
	        settings.switchSideBlock = defaultSettings.switchSideBlock;
	        settings.blockOrder = defaultSettings.blockOrder;
	        choosenBlocksList.length = 0;
	        addFlag('visible');
	    }
	    function clear(){
	        blocks.forEach(element => {
	            element.instHTML = '',
	            element.miniBlocks = 0,
	            element.singleAttTrials = 0, 
	            element.sharedAttTrials = 0, 
	            element.categoryTrials = 0; 
	        });
	        settings.switchSideBlock = 0;
	        settings.blockOrder = defaultSettings.blockOrder;
	    }
	    function get(name, index){ return blocks[index][name]; }
	    function set(name, index, type){ 
	        if (type === 'text') return function(value){return blocks[index][name] = value; };
	        return function(value){return blocks[index][name] = Math.abs(Math.round(value));};
	    }
	    function getParameters(name){ return settings[name]; }
	    function setParameters(name, type){ 
	        if (type === 'select') return function(value){return settings[name] = value; };
	        return function(value){return settings[name] = Math.abs(Math.round(value));};
	    }
	    function updateChoosenBlocks(e, index){
	        if (choosenBlocksList.includes(index) && !e.target.checked){
	            var i = choosenBlocksList.indexOf(index);
	            if (i !== -1) {
	            choosenBlocksList.splice(i, 1);
	            }
	            return;
	        } 
	        if (e.target.checked) choosenBlocksList.push(index);
	    }
	    function chooseBlocks(){
	        chooseFlag('visible');
	        if(!chooseClicked()){  //show the alert only for the first time the choose button has been clicked
	            alert('To choose blocks to remove, please tik the checkbox near the wanted block, and to remove them click the \'Remove Choosen Blocks\' button below');
	            chooseClicked(true);
	        }
	    }
	    function addBlock(){
	        blocks.push(clone(clearBlock[0]));
	        blocks.slice(-1)[0]['block'] = blocks.length;
	        if (blocks.length === 30) addFlag('hidden'); //limit blocks to 30
	    }
	    function removeBlocks(){
	        if (blocks.length < 4) {
	            alert('Minimum number of blocks needs to be 3'); 
	            choosenBlocksList.length = 0;
	            return;
	        }
	        if ((blocks.length - choosenBlocksList.length) < 3){
	            alert('Minimum number of blocks needs to be 3, please choose less blocks to remove');
	            choosenBlocksList.length = 0;
	            return;
	        }
	        choosenBlocksList.sort();
	        for (let i = choosenBlocksList.length - 1; i >=0; i--) {
	            blocks.splice(choosenBlocksList[i],1);
	        }
	        for (let i = 0; i < blocks.length; i++) {
	            blocks[i]['block'] = i+1;
	        }
	        choosenBlocksList.length = 0;
	        chooseFlag('hidden');
	    }
	}

	function view$3(ctrl){
	    return m('.container' , [
	        m('.row.space top-buffer', [
	            m('.col-sm-2.space',[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['Change to \'startRight\' if you want to start with category on the right in the first block, \'startLeft\' if you want to start with category on the left in the first block or \'random\' if you want to randomize the order.']),
	                m('span', [' ', 'Blocks order'])
	            ]),
	            m('.col-md-10',
	                m('select.form-control',{value: ctrl.getParameters('blockOrder'), onchange:m.withAttr('value',ctrl.setParameters('blockOrder','select')), style: {width: '8.3rem', height:'2.7rem'}},[
	                    m('option', 'random'),
	                    m('option', 'startRight'),
	                    m('option', 'startLeft'),
	                ]))        
	        ]),
	        m('.row.space top-buffer', [
	            m('.col-sm-2.space',[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['By default, we switch on block 4 (i.e., after blocks 2 and 3 showed the first pairing condition).']),
	                m('span', [' ', 'Switch side block'])
	            ]),
	            m('.col-sm-9',
	                m('input[type=number].form-control',{value: ctrl.getParameters('switchSideBlock'), onchange:m.withAttr('value',ctrl.setParameters('switchSideBlock')), style: {width: '4em'}, min:0}))   
	        ]),
	        ctrl.blocks.map(function(block) {
	            let index = ctrl.blocks.indexOf(block);
	            return m('div',[
	                m('.row.space top-buffer', [
	                    m('.col-sm-2',[
	                        m('input[type=checkbox]', {checked : ctrl.choosenBlocksList.includes(index), style:{visibility: ctrl.chooseFlag()}, onclick: (e) => ctrl.updateChoosenBlocks(e, index)}),
	                        m('span', [' ','Block '+parseInt(index+1)])
	                    ]),
	                    m('.col-md-10',[
	                        m('.row.space', [
	                            m('.col-sm-3.space',[
	                                m('i.fa.fa-info-circle'),
	                                m('.card.info-box.card-header', ['Empty field means we will create the instructions from a deafault template. ']),
	                                m('span', [' ', 'Block\'s Instructions:'])
	                            ]),
	                            m('.col-sm-9', [
	                                m('textarea.form-control',{style: {width: '15rem' ,height: '4rem'},onchange: m.withAttr('value', ctrl.set('instHTML', index, 'text')), value: ctrl.get('instHTML', index)})
	                            ])
	                        ]),
	                        m('.row.space',[
	                            m('.col-sm-3.space',[
	                                m('i.fa.fa-info-circle'),
	                                m('.card.info-box.card-header', ['Higher number reduces repetition of same group/response. Set to 1 if you don\'t need mini blocks. 0 will break the task.']),
	                                m('span', [' ', 'Number of mini-blocks: '])
	                            ]),
	                            m('.col-sm-9', [
	                                m('input[type=number].form-control',{style:{width:'4em'},onchange: m.withAttr('value', ctrl.set('miniBlocks', index,'number')), value: ctrl.get('miniBlocks', index), min:0})
	                            ])
	                        ]),
	                        m('.row.space',[
	                            m('.col-sm-3.space',[
	                                m('i.fa.fa-info-circle'),
	                                m('.card.info-box.card-header', ['Number of trials of the attribute that does not share key with the category (in a mini block).']),
	                                m('span', [' ', 'Number of single attribute trials: '])
	                            ]),
	                            m('.col-sm-9', [
	                                m('input[type=number].form-control',{style:{width:'4em'},onchange: m.withAttr('value', ctrl.set('singleAttTrials', index,'number')), value: ctrl.get('singleAttTrials', index), min:0})
	                            ])
	                        ]),
	                        m('.row.space',[
	                            m('.col-sm-3.space',[
	                                m('i.fa.fa-info-circle'),
	                                m('.card.info-box.card-header', ['Number of trials of the attribute that shares key with the category (in a mini block).']),
	                                m('span', [' ', 'Number of shared key attribute trials: '])
	                            ]),
	                            m('.col-sm-9', [
	                                m('input[type=number].form-control',{style:{width:'4em'},onchange: m.withAttr('value', ctrl.set('sharedAttTrials', index,'number')), value: ctrl.get('sharedAttTrials', index), min:0})
	                            ])
	                        ]),
	                        m('.row.space',[
	                            m('.col-sm-3.space',[
	                                m('i.fa.fa-info-circle'),
	                                m('.card.info-box.card-header', ['Number of trials of the category (in a mini-block). If 0, the label does not appear.']),
	                                m('span', [' ', 'Number of category trials: '])
	                            ]),
	                            m('.col-sm-9', [
	                                m('input[type=number].form-control',{style:{width:'4em'}, onchange: m.withAttr('value', ctrl.set('categoryTrials', index,'number')), value: ctrl.get('categoryTrials', index), min:0})
	                            ])
	                        ])
	                    ])
	                ])
	            ]);
	                    
	        }),
	        m('.row.space justify-content-md-center',[
	            m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons'}},[
	                m('button.btn btn btn-info',{onclick: ctrl.addBlock, style:{'padding-right':'60px','padding-left':'60px' ,visibility: ctrl.addFlag()}}, [m('i.fas fa-plus')],' Add Block'),
	                m('button.btn btn btn-warning',{onclick: ctrl.chooseBlocks},[
	                    m('i.fas fa-check'), ' Choose Blocks to Remove']),
	                m('button.btn btn btn-danger',{onclick: ctrl.removeBlocks},[
	                    m('i.far fa-minus-square'), ' Remove Choosen Blocks']),
	            ])
	        ]),
	        m('.row.space',[
	            m('.col',{style:{'margin-bottom':'7px'}},[
	                m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons', float: 'right'}},[
	                    m('button.btn btn-secondary', 
	                        {title:'Reset all current fields to default values', onclick: () => confirm('Are you sure you want to reset the current form?\n This action is permanent') ? ctrl.reset() : null},[
	                        m('i.fas fa-undo fa-sm'), ' Reset'
	                    ]),
	                    m('button.btn btn-danger',
	                        {title:'Clears all current values',onclick:() => confirm('Are you sure you want to clear the current form?\n This action is permanent') ? ctrl.clear() : null},[
	                        m('i.far fa-trash-alt fa-sm'), ' Clear'
	                    ]),
	                ]),
	            ]),
	        ])
	    ]);
	}

	let elementComponent = {
	    controller:controller$4,
	    view:view$4,
	};

	function controller$4(object, settings, stimuliList){
	    let element = settings[object.key];
	    let fields = {
	        newStimulus : m.prop(''),
	        elementType: m.prop(object.key.includes('attribute') ? 'Attribute' : 'Category'),
	        titleType: m.prop(element.title.media.word === undefined ? 'image' : 'word'),
	        titleHidden: m.prop(''), //weather the category design flags will be visible
	        selectedStimuli: m.prop(''),
	        stimuliHidden: m.prop(''),
	    }; 

	    return {fields, set:set, get:get, addStimulus:addStimulus, 
	        updateSelectedStimuli:updateSelectedStimuli, removeChosenStimuli:removeChosenStimuli, removeAllStimuli:removeAllStimuli, 
	        updateTitleType:updateTitleType, resetStimuliList:resetStimuliList};
	    
	    function get(name, media, type){
	        if (name == 'title' && media == null && type == null) { //special case - return the title's value (word/image)
	            if (element.title.media.word == undefined) return element.title.media.image;
	            return element.title.media.word;
	        }
	        if (media != null && type != null) {
	            if (type == 'font-size') {
	                return parseFloat((element[name][media][type].replace("em","")));
	            }
	            return element[name][media][type];
	        }
	        else if (media == 'color') //case of stimulusCss
	            return element[name][media];
	        else if (media == 'font-size') return parseFloat((element[name][media]).substring(0,3));
	        return element[name]; 
	    }
	    function set(name, media, type){ 
	        return function(value){ 
	            if (media != null && type != null) {
	                if (type == 'font-size') {
	                    value = Math.abs(value);
	                    if (value == 0) { 
	                        alert("Font's size must be bigger then 0");
	                        return element[name][media][type]; 
	                    }
	                    return element[name][media][type] = value + "em";
	                }
	                return element[name][media][type] = value;
	            }
	            else if (media == 'color') return element[name][media] = value;
	            else if (media == 'font-size') {
	                value = Math.abs(value);
	                if (value == 0) { 
	                    alert("Font's size must be bigger then 0");
	                    return element[name][media]; 
	                }
	                return element[name][media] = value + "em";
	            }
	            return element[name] = value; 
	        }
	    }

	    function updateTitleType() { 
	        return function (type) {
	            fields.titleType(type);
	            let object = element.title.media;
	            let category = object.word !== undefined ? object.word : object.image;
	            if (type === 'word') {
	                element.title.media = {};
	                element.title.media = {word: category};
	            }
	            else {
	                element.title.media = {};
	                element.title.media = {image: category};
	            }
	        };
	    }
	    function addStimulus(event){
	        let new_stimuli = fields.newStimulus();
	        event = event.path[0].id; //button name, to know the kind of the stimulus added
	        if(new_stimuli === null || new_stimuli === '') 
	            return alert('Please fill the stimulus field');
	        element.stimulusMedia.push( (event === 'addWord') ? {word : new_stimuli} : {image : new_stimuli});
	        fields.newStimulus(''); //reset the field               
	    }
	    function updateSelectedStimuli(select){
	        let list = element.stimulusMedia.filter((val,i) => select.target.options[i].selected);
	        fields.selectedStimuli(list);
	    }

	    function removeChosenStimuli() {
	        element.stimulusMedia = element.stimulusMedia.filter((element)=>!fields.selectedStimuli().includes(element));
	        fields.selectedStimuli([]);
	    }

	    function removeAllStimuli() {element.stimulusMedia.length = 0;}
	    function resetStimuliList(){ Object.assign(element.stimulusMedia,  JSON.parse(JSON.stringify(stimuliList)));}
	}

	function view$4(ctrl) {
	    return m('.container', [
	        m('.row top-buffer', [
	            m('.col-auto info-buffer',[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['Will appear in the data and in the default feedback message'])
	            ]),
	            m('.col-3 element-buffer', ctrl.fields.elementType()+' name as will appear in the data:'),
	            m('.col-6 element-buffer', [
	                m('input[type=text].form-control',{style: {width: '18rem'}, value:ctrl.get('name'), onchange:m.withAttr('value', ctrl.set('name'))})
	            ]),
	        ]),
	        m('.row row-element-buffer', [
	            m('.col-auto info-buffer',[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['Name of the ' +ctrl.fields.elementType()+' presented in the task'])
	            ]),
	            m('.col-md-3 element-buffer', ctrl.fields.elementType()+' title as will appear to the user: '),
	            m('.col-md-4 element-buffer', [
	                m('input[type=text].form-control',{style: {width: '18rem'}, value: ctrl.get('title'), onchange:m.withAttr('value', ctrl.set('title', 'media', ctrl.fields.titleType()))})
	            ]),
	            m('.col-sm-2', ctrl.fields.elementType()+'\'s type:',
	                [
	                    m('select.custom-select',{value: ctrl.get('title','media','word') === undefined ? 'image' : 'word', onchange:m.withAttr('value',ctrl.updateTitleType())},[
	                        ctrl.fields.titleType(ctrl.get('title','media','word') === undefined ? 'image' : 'word'),
	                        ctrl.fields.titleHidden(ctrl.fields.titleType() === 'word' ? 'visible' : 'hidden'),
	                        m('option', 'word'),
	                        m('option', 'image')
	                    ])
	                ]),
	            m('.col-2',[
	                m('.row',[
	                    m('.col',[
	                        m('span', {style: {visibility:ctrl.fields.titleHidden()}}, 'Font\'s color: '),
	                        m('input[type=color]',{style: {'border-radius':'3px',visibility:ctrl.fields.titleHidden()}, value: ctrl.get('title','css','color'), onchange:m.withAttr('value', ctrl.set('title','css','color'))})
	                    ])
	                ]),m('br'),
	                m('.row',[
	                    m('.col',[
	                        m('span', {style: {visibility:ctrl.fields.titleHidden()}}, 'Font\'s size: '),
	                        m('input[type=number]', {style: {'border-radius':'4px','border':'1px solid #E2E3E2',visibility:ctrl.fields.titleHidden()}, value:ctrl.get('title','css','font-size') ,min: '0' ,onchange:m.withAttr('value', ctrl.set('title','css','font-size'))})
	                    ])
	                ])
	            ])
	        ]),
	        m('.row',[
	            m('.col-auto info-buffer',{style:{'padding-top': '1.6em'}},[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['Enter text (word) or image name (image). Set the path to the folder of images in the General Parameters page'])
	            ]),
	            m('.col',[
	                m('br'),
	                m('input[type=text].form-control', {style:{width:'15em'},placeholder:'Enter Stimulus content here', 'aria-label':'Enter Stimulus content', 'aria-describedby':'basic-addon2', value: ctrl.fields.newStimulus(), oninput: m.withAttr('value', ctrl.fields.newStimulus)}),
	                m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons'}},[

	                    m('button[type=button].btn btn-outline-secondary',{disabled:ctrl.fields.newStimulus().length===0, id:'addWord', onclick:ctrl.addStimulus},[
	                        m('i.fas fa-plus'), 'Add Word'
	                    ]),
	                    m('button[type=button].btn btn-outline-secondary', {disabled:ctrl.fields.newStimulus().length===0, id:'addImage', onclick: ctrl.addStimulus},[
	                        m('i.fas fa-plus'), 'Add Image'
	                    ])
	                ])
	            ]),
	        ]),
	        m('.row',[
	            m('.col-auto info-buffer',{style:{'padding-top': '1.6em'}},[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['To select multiple stimuli, please press the ctrl key while selecting the desired stimuli'])
	            ]),
	            m('.col',[
	                m('.form-group',[
	                    m('br'),
	                    m('span',{style:{'font-size': '20px'}},'Stimuli: '),
	                    m('select.form-control', {multiple : 'multiple', size : '8' ,style: {width: '15rem'}, onchange:(e) => ctrl.updateSelectedStimuli(e)},[
	                        ctrl.get('stimulusMedia').some(object => object.word) ? ctrl.fields.stimuliHidden('visible') : ctrl.fields.stimuliHidden('hidden'),
	                        ctrl.get('stimulusMedia').map(function(object){
	                            let value = object.word ? object.word : object.image;
	                            let option = value + (object.word ? ' [Word]' : ' [Image]');
	                            return m('option', {value:value, selected : ctrl.fields.selectedStimuli().includes(object)}, option);
	                        })
	                    ]),
	                    m('.div',{style: {visibility:ctrl.fields.stimuliHidden(), position: 'relative', top: '-170px', left: '255px', marginBottom: '-150px'}},[
	                        m('span', {style:{'text-decoration': 'underline'}} ,'Stimuli font\'s design:'),m('br'),
	                        m('label','Font\'s color: '),m('br'),
	                        m('input[type=color]', {style:{'border-radius':'3px'},value: ctrl.get('stimulusCss','color'), onchange:m.withAttr('value', ctrl.set('stimulusCss','color'))}),
	                        m('br'), m('label', 'Font\'s size:'), m('br'),
	                        m('input[type=number]', {style: {'border-radius':'4px','border':'1px solid #E2E3E2'},value:ctrl.get('stimulusCss','font-size') ,min: '0' ,onchange:m.withAttr('value', ctrl.set('stimulusCss','font-size'))})
	                    ]),
	                    m('br'),
	                    m('.btn-group-vertical', {style:{'data-toggle':'buttons'}},[
	                        m('button.btn btn btn-warning', {disabled: ctrl.fields.selectedStimuli().length===0, onclick:ctrl.removeChosenStimuli},'Remove Chosen Stimuli'),
	                        m('button.btn btn btn-warning', {onclick:ctrl.removeAllStimuli},'Remove All Stimuli'),
	                        m('button.btn btn btn-warning', {onclick: ctrl.resetStimuliList},'Reset Stimuli List'),
	                    ])
	                ]),

	                m('.row border_lines')
	            ])
	        ])
	    ]);

	}

	let categoriesComponent = {
	    controller:controller$5,
	    view:view$5
	};

	function controller$5(settings, defaultSettings, clearElement){
	    return {reset:reset, clear:clear};
	    function reset(){
	        Object.assign(settings.category1,  JSON.parse(JSON.stringify(defaultSettings.category1)));
	        Object.assign(settings.category2, JSON.parse(JSON.stringify(defaultSettings.category2)));
	    }
	    function clear(){
	        Object.assign(settings.category1, JSON.parse(JSON.stringify(clearElement[0])));
	        Object.assign(settings.category2, JSON.parse(JSON.stringify(clearElement[0])));
	    }
	}

	function view$5(ctrl,settings, defaultSettings) {
	    return m('.container', [
	        m('.row top-buffer',
	            m('col', m('h1.categoryHeadline','Category'))),
	        m.component(elementComponent, {key: 'category'} ,settings, defaultSettings.category.stimulusMedia),
	        m('.row.space',[
	            m('.col',{style:{'margin-bottom':'7px'}},[
	                m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons', float: 'right'}},[
	                    m('button.btn btn-secondary', 
	                        {title:'Reset all current fields to default values', onclick: () => confirm('Are you sure you want to reset the current form?\n This action is permanent') ? ctrl.reset() : null},[
	                        m('i.fas fa-undo fa-sm'), ' Reset'
	                    ]),
	                    m('button.btn btn-danger',
	                        {title:'Clears all current values',onclick:() => confirm('Are you sure you want to clear the current form?\n This action is permanent') ? ctrl.clear() : null},[
	                        m('i.far fa-trash-alt fa-sm'), ' Clear'
	                    ]),
	                ]),
	            ]),
	        ])
	    ]);
	}

	let attributesComponent = {
	    controller:controller$6,
	    view:view$6
	};

	function controller$6(settings, defaultSettings, clearElement){
	    let tabs = [
	        {value: 'attribute1', text: 'First Attribute'},
	        {value: 'attribute2', text: 'Second Attribute'},
	    ];
	    let curr_tab = tabs[0].value; // set default tab
	    return {reset:reset, clear:clear, tabs, curr_tab};
	    function reset(){
	        Object.assign(settings.attribute1,  JSON.parse(JSON.stringify(defaultSettings.attribute1)));
	        Object.assign(settings.attribute2,  JSON.parse(JSON.stringify(defaultSettings.attribute2)));}
	    function clear(){
	        Object.assign(settings.attribute1, clearElement[0]);
	        Object.assign(settings.attribute2, clearElement[0]);
	    }
	}

	function view$6(ctrl,settings, defaultSettings) {
	    return m('.container.space', [
	        m('.tab',{style:{width:'19.5em'}}, ctrl.tabs.map(function(tab){
	            return m('button', {
	                class: ctrl.curr_tab == tab.value ? 'active' : '',
	                onclick:function(){
	                    ctrl.curr_tab = tab.value;
	                }},tab.text);
	        })),
	        m('.div', [
	            m.component(elementComponent, {key:ctrl.curr_tab}, settings, defaultSettings[ctrl.curr_tab].stimulusMedia),
	        ]),
	        m('.row.space',[
	            m('.col',{style:{'margin-bottom':'7px'}},[
	                m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons', float: 'right'}},[
	                    m('button.btn btn-secondary', 
	                        {title:'Reset all current fields to default values', onclick: () => confirm('Are you sure you want to reset the current form?\n This action is permanent') ? ctrl.reset() : null},[
	                        m('i.fas fa-undo fa-sm'), ' Reset'
	                    ]),
	                    m('button.btn btn-danger',
	                        {title:'Clears all current values',onclick:() => confirm('Are you sure you want to clear the current form?\n This action is permanent') ? ctrl.clear() : null},[
	                        m('i.far fa-trash-alt fa-sm'), ' Clear'
	                    ]),
	                ]),
	            ]),
	        ])
	    ]);
	}

	let importComponent = {
	    controller:controller$7,
	    view:view$7
	};

	function view$7(ctrl){
	    return m('.container',[ 
	        m('br'),
	        m('.row justify-content-md-center',[
	            m('.card border-info mb-3',{style:{'max-width': '25rem'}}, [
	                m('.card-header','Upload a JSON file: ' ),
	                m('.card-body text-info',[
	                    m('p.card-title','If you saved a JSON file from a previous session, you can upload that file here to edit the parameters.'),
	                    m('input[type=file].form-control',{id:'uploadFile', style: {'text-align': 'center'}, onchange: ctrl.handleFile})
	                ])
	            ])
	        ])
	    ]);
	}

	function controller$7(settings) {
	    let fileInput = m.prop('');
	    return {fileInput:fileInput, handleFile:handleFile, updateSettings:updateSettings};

	    function handleFile(){
	        let importedFile = document.getElementById('uploadFile').files[0];
	        let reader = new FileReader();
	        reader.readAsText(importedFile); 
	        reader.onload = function() {
	            let fileContent = JSON.parse(reader.result);
	            updateSettings(fileContent);
	        };
	    }
	    function updateMediaSettings(input){
	        //update attributes to be compatible to IAT so that elementComponent can be used.
	        settings.category.stimulusMedia = input.category.media;
	        delete settings.category.media;
	        settings.attribute1.stimulusMedia = input.attribute1.media;
	        delete settings.attribute1.media;
	        settings.attribute2.stimulusMedia = input.attribute2.media;
	        delete settings.attribute2.media;

	        settings.category.stimulusCss = input.category.css;
	        delete settings.category.css;
	        settings.attribute1.stimulusCss = input.attribute1.css;
	        delete settings.attribute1.css;
	        settings.attribute2.stimulusCss = input.attribute2.css;
	        delete settings.attribute2.css;
	    }
	    function updateSettings(input) {

	        settings.category = input.category;
	        settings.attribute1 = input.attribute1;
	        settings.attribute2 = input.attribute2;
	        settings.parameters.base_url = input.base_url;
	        settings.parameters.isQualtrics = input.isQualtrics;
	        settings.text.leftKeyText = input.leftKeyText;
	        settings.text.rightKeyText = input.rightKeyText;
	        settings.text.orKeyText = input.orKeyText;
	        settings.text.remindErrorText = input.remindErrorText;
	        settings.text.finalText = input.finalText;
	        settings.text.instTemplatePractice = input.instTemplatePractice;
	        settings.text.instTemplateCategoryRight = input.instTemplateCategoryRight;
	        settings.text.instTemplateCategoryLeft = input.instTemplateCategoryLeft;
	        settings.trialsByBlock = input.trialsByBlock;
	        settings.blockOrder = input.blockOrder;
	        settings.switchSideBlock = input.switchSideBlock;

	        updateMediaSettings(input); 

	        
	    }
	}

	let links = {IAT: 'https://minnojs.github.io/minnojs-blog/qualtrics-iat/', 
		BIAT: 'https://minnojs.github.io/minnojs-blog/qualtrics-biat/',
		STIAT: 'https://minnojs.github.io/minnojs-blog/qualtrics-stiat/',
		SPF: '#'
	};

	let helpComponent = {
		view: function(ctrl, settings, defaultSettings, type){
			return m('.container', [
				m('.card card-body', 
				m('span', 'This tool creates a script for running an '+type+
				' in your online study. The script uses Project Implicit’s '+type+
				' extension, which runs on MinnoJS, a JavaScript player for online studies. ', 
				m('a',{href: 'http://projectimplicit.net/'}, 
				'Project Implicit '), 'has developed MinnoJS to program web studies. To create '+type+
				's, we programmed a general script (the “extension”) that runs an '+type+
				' based on parameters provided by another, more simple script. In this page, you can create a script that uses our '+type+
				' extension. You can read more about the basic idea of using extensions in Minno ', 
				m('a',{href: 'https://github.com/baranan/minno-tasks/blob/master/implicitmeasures.md'}, 'on this page. '), 'We run those scripts in ', 
				m('a',{href: 'https://minnojs.github.io/docsite/minnosuitedashboard/'}, 'Open Minno Suite, '), 
				'our platform for running web studies. You can install that platform on your own server, use a more simple ', 
				m('a',{href: 'https://minnojs.github.io/minnojs-blog/csv-server/'}, 'php server for Minno, '), 'or run ', 
				m('a',{href: links[type]}, 'this script directly from Qualtrics.')
				))]);}
	};

	let parametersDesc = [
	    {name: 'isQualtrics', options:['Regular','Qualtrics'],label:'Regular script or Qualtrics?', desc: ['If you want this IAT to run from Qualtrics, read ', m('a',{href: 'https://minnojs.github.io/minnojs-blog/qualtrics-iat/'}, 'this blog post '),'to see how.']},
	    {isQualtrics:false, base_url:''}
	];

	let textDesc = [
	    {name: 'leftKeyText', label:'Top-left text (about the left key)', desc: 'We use this text to remind participants what key to use for a left response.'},
	    {name: 'rightKeyText', label:'Top-right text (about the right key)', desc: 'We use this text to remind participants what key to use for a right response.'},
	    {name: 'orKeyText', label:'Or', desc: 'We show this text in the combined blocks to separate between the two categories that use the same key.'},
	    {name: 'remindErrorText', label: 'Screen\'s Bottom (error reminder)', desc: 'We use this text to remind participants what happens on error. Replace this text if you do not require participants to correct their error responses (see General Parameters page).'},
	    {name: 'finalText', label:'Text shown at the end', desc: 'Text shown at the end'},
	    {name: 'instTemplatePractice', label:'Instructions in Practice Block', desc: 'The instructions in the practice block.'},
	    {name: 'instTemplateCategoryRight', label:'Instructions in Right Category', desc: 'The instructions in the right category.'},
	    {name: 'instTemplateCategoryLeft', label:'Instructions in Left Category', desc: 'The instructions in the left category.'},
	    {textOnError:'', leftKeyText:'', rightKeyText:'', orKeyText:'', remindErrorText:'',finalText:'',
	    instTemplatePractice:'', instTemplateCategoryRight:'', instTemplateCategoryLeft:''},
	    {} //an empty element
	];

	let categoryClear = [{name: '', title: {media: {word: ''}, css: {color: '#000000', 'font-size': '0em'}, height: 4},
	    stimulusMedia: [],
	    stimulusCss : {color:'#000000', 'font-size':'0em'}}];

	let clearBlock =  
	    [
	        //Each of the following defines a block
	        {
	            instHTML : '', 
	            block : 1,
	            miniBlocks : 0, 
	            singleAttTrials : 0, 
	            sharedAttTrials : 0, 
	            categoryTrials : 0 
	        }
	    ];


	let tabs = [
	    {value: 'parameters', text: 'General parameters', component: parametersComponent, rowsDesc: parametersDesc },
	    {value: 'blocks', text: 'Blocks', component: blocksComponent, rowsDesc: clearBlock},
	    {value: 'category', text: 'Category', component: categoriesComponent, rowsDesc: categoryClear},
	    {value: 'attributes', text: 'Attributes', component: attributesComponent, rowsDesc: categoryClear},
	    {value: 'text', text: 'Texts', component: textComponent, rowsDesc: textDesc},
	    {value: 'output', text: 'Complete', component: outputComponent, rowsDesc: clearBlock},
	    {value: 'import', text: 'Import', component: importComponent},
	    {value: 'help', text: 'Help', component: helpComponent, rowsDesc:'STIAT'}
	];

	let stiat = {
	    controller: function(settings$1){ return {settings: settings$1 ? settings$1 : clone(settings)};},
	    view: function(ctrl){
	        return m('.container', 
	            m('.header.p-3 mb-2 bg-info text-white',
	                m('h1.display-4', 'Create my STIAT script')),
	            m.component(tabsComponent, tabs, ctrl.settings, settings)
	        );
	    }
	};

	m.mount(document.getElementById('dashboard'), stiat);

}());
//# sourceMappingURL=stiat_index.js.map
