/**
* @preserve minnojs-biat-dashboard v1.0.0
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
	    parameters : {isTouch:false, isQualtrics:false, practiceBlock:true, 
	        showStimuliWithInst:true, remindError:true, base_url:''},
	    blocks: {nMiniBlocks: 1, nTrialsPerMiniBlock:16, nPracticeBlockTrials: 8, nCategoryAttributeBlocks: 4,
	        focalAttribute: 'attribute1', firstFocalAttribute : 'random', focalCategoryOrder: 'random'},
	    practiceCategory1 : {
	        name : 'Mammals',
	        title : {
	            media : {word : 'Mammals'},
	            css : {color:'#31b404','font-size':'1.8em'},
	            height : 4,
	            startStimulus : {
	                media : {word : 'Dogs, Horses, Cows, Lions'},
	                css : {color:'#31b404','font-size':'1em'},
	                height : 2
	            }
	        },
	        stimulusMedia : [
	            {word : 'Dogs'},
	            {word : 'Horses'},
	            {word : 'Lions'},
	            {word : 'Cows'}
	        ],
	        stimulusCss : {color:'#31b404','font-size':'2em'}},
	    practiceCategory2 : {
	        name : 'Birds',
	        title : {
	            media : {word : 'Birds'},
	            css : {color:'#31b404','font-size':'1.8em'},
	            height : 4,
	            startStimulus : {
	                media : {word : 'Pigeons, Swans, Crows, Ravens'},
	                css : {color:'#31b404','font-size':'1em'},
	                height : 2
	            }
	        },
	        stimulusMedia : [
	            {word : 'Pigeons'},
	            {word : 'Swans'},
	            {word : 'Crows'},
	            {word : 'Ravens'}
	        ],
	        stimulusCss : {color:'#31b404','font-size':'2em'}
	    },
	    categories : [  //As many categories you need.
	        {
	            name : 'Black people',
	            title : {
	                media : {word : 'Black people'}, 
	                css : {color:'#31b404','font-size':'1.8em'}, 
	                height : 4, 
	                startStimulus : { 
	                    media : {word : 'Tyron, Malik, Terrell, Jazmin, Tiara, Shanice'}, 
	                    css : {color:'#31b404','font-size':'1em'}, 
	                    height : 2
	                }
	            }, 
	            stimulusMedia : [ 
	                {word: 'Tyron'},
	                {word: 'Malik'},
	                {word: 'Terrell'},
	                {word: 'Jazmin'},
	                {word: 'Tiara'},
	                {word: 'Shanice'}
	            ], 
	            stimulusCss : {color:'#31b404','font-size':'2em'}
	        },	
	        {
	            name : 'White people', 
	            title : {
	                media : {word : 'White people'}, 
	                css : {color:'#31b404','font-size':'1.8em'}, 
	                height : 4,
	                startStimulus : {
	                    media : {word : 'Jake, Connor, Bradley, Alison, Emma, Emily'}, 
	                    css : {color:'#31b404','font-size':'1em'}, 
	                    height : 2
	                }
	            }, 
	            stimulusMedia : [ 
	                {word: 'Jake'},
	                {word: 'Connor'},
	                {word: 'Bradley'},
	                {word: 'Allison'},
	                {word: 'Emma'},
	                {word: 'Emily'}
	            ], 
	            //Stimulus css
	            stimulusCss : {color:'#31b404','font-size':'2em'}
	        }
	    ],
	    attribute1 : 
	    {
	        name : 'Pleasant', 
	        title : {
	            media : {word : 'Pleasant'}, 
	            css : {color:'#0000FF','font-size':'1.8em'}, 
	            height : 4,
	            startStimulus : {
	                media : {word : 'Joy, Love, Happy, Good'}, 
	                css : {color:'#0000FF','font-size':'1em'}, 
	                height : 2
	            }
	        }, 
	        stimulusMedia : [ 
	            {word : 'Joy'}, 
	            {word : 'Love'}, 
	            {word : 'Happy'}, 
	            {word : 'Good'}
	        ], 
	        stimulusCss : {color:'#0000FF','font-size':'2em'}
	    },	
	    attribute2 : 
	    {
	        name : 'Unpleasant', 
	        title : {
	            media : {word : 'Unpleasant'}, 
	            css : {color:'#0000FF','font-size':'1.8em'}, 
	            height : 4,
	            startStimulus : {
	                media : {word : 'Horrible, Evil, Nasty, Bad'}, 
	                css : {color:'#0000FF','font-size':'1em'}, 
	                height : 2
	            }
	        }, 
	        stimulusMedia : [ 
	            {word : 'Horrible'}, 
	            {word : 'Nasty'}, 
	            {word : 'Bad'}, 
	            {word : 'Evil'}
	        ], 
	        stimulusCss : {color:'#0000FF','font-size':'2em'} 
	    },
	    text: {
	        leftKeyText:'"E" for all else',
	        rightKeyText:'"I" if item belongs', 
	        orText:'or',
	        remindErrorText : '<p style="font-size:0.6em;font-family:arial sans-serif; text-align:center;">' +
	        'If you make a mistake, a red <font-color="#ff0000"><b>X</b></font> will appear. ' +
	        'Press the other key to continue.<p/>',
	        finalText : 'Press space to continue to the next task', 
	        instTemplate: '<div><p style="font-size:20px; font-family:arial sans-serif; text-align:center;"><br/>' +
	        '<font-color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
	        '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
	        'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
	        '<font-color="#0000FF">focalAtt</font>, ' +
	        'and for items that belong to the category <font-color="#31b404">focalCat</font>.<br/>' +
	        'Put a left finger on the <b>E</b> key for items that do not belong to these categories.<br/><br/>' + 
	        'If you make a mistake, a red <font-color="#ff0000"><b>X</b></font> will appear. ' +
	        'Press the other key to continue.<br/><br/>' + 
	        '<p style="text-align:center;">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
	    },
	    touch_text : {
	        rightKeyTextTouch : 'Left for all else', 
	        leftKeyTextTouch : 'Right if item belongs',
	        remindErrorTextTouch : '<p style="font-size:1.4em; font-family:arial sans-serif; text-align:center;">' +
	        'If you make a mistake, a red <font-color="#ff0000"><b>X</b></font> will appear. ' +
	        'Touch the other side to continue.<p/>',
	        finalTouchText: 'Touch the bottom green area to continue to the next task',
	        instTemplateTouch: '<div><p style="text-align:center;"" ' +
	        '<br/><font-color="#000000"><u>Part blockNum of nBlocks </u><br/></p>' +
	        '<p style="text-align:left;" style="margin-left:5px"> ' +
	        'Put a right finger on the <b>right</b> green area for items that belong to the category ' + 
	        '<font-color="#0000FF">focalAtt</font>, ' +
	        'and for items that belong to the category <font-color="#31b404">focalCat</font>.<br/>' +
	        'Put a left finger on the <b>left</b> green area for items that do not belong to these categories.<br/>' + 
	        'If you make a mistake, a red <font-color="#ff0000"><b>X</b></font> will appear. ' +
	        'Press the other key to continue.<br/>' + 
	        '<p style="text-align:center;">Touch the <b>lower </b> green area to start.</font></p></div>',

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

	let blocksComponent = {
	    controller:controller$1,
	    view:view$1
	};

	function controller$1(settings, defaultSettings, rows){
	    let blocks = settings.blocks;
	    return {reset:reset, clear:clear, set:set, get:get, rows: rows};
	    
	    function reset(){Object.assign(blocks, defaultSettings.blocks);}
	    function clear(){Object.assign(blocks, rows.slice(-1)[0]);}
	    function get(name){return blocks[name]; }
	    function set(name, type){ 
	        if (type === 'number') return function(value){ return blocks[name] = Math.abs(Math.round(value));};
	        return function(value){ return blocks[name] = value; };
	    }
	}
	function view$1(ctrl, settings){
	    return m('.container' , [
	        //create numbers inputs
	        ctrl.rows.slice(0,4).map(function(row) {
	        //if user chooses not to have a prcatice block set it's parameter to 0
	            if (row.name === 'nPracticeBlockTrials' && settings.parameters.practiceBlock === false) {
	                settings.blocks.nPracticeBlockTrials = '0';
	                return null;
	            }
	            return m('.row top-buffer', [
	                m('.col-auto info-buffer',[
	                    m('i.fa.fa-info-circle'),
	                    m('.card.info-box.card-header', [row.desc])
	                ]),
	                m('.col-3 param-buffer', row.label),
	                m('.col-8 param-buffer',
	                    m('input[type=number].form-control',{style:{width:'4em'},onchange: m.withAttr('value', ctrl.set(row.name, 'number')), value: ctrl.get(row.name), min:0}))
	            ]);
	        }),
	        //create select inputs
	        ctrl.rows.slice(4,-1).map(function(row) {
	            return m('.row top-buffer', [
	                m('.col-auto info-buffer',[
	                    m('i.fa.fa-info-circle'),
	                    m('.card.info-box.card-header', [row.desc])
	                ]),
	                m('.col-3 param-buffer', row.label),
	                m('.col-8 param-buffer',
	                    m('select.form-control',{value: ctrl.get(row.name), onchange:m.withAttr('value',ctrl.set(row.name)), style: {width: '8.3rem'}},[
	                        row.options.map(function(option){return m('option', option);})
	                    ]))
	            ]);
	        }),
	        m('.row top-buffer',[
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

	let elementComponent = {
	    controller: controller$3,
	    view: view$3,
	};

	function controller$3(object, settings,stimuliList, startStimulusList ,index){
	    let element = settings[object.key];
	    if (Array.isArray(element)) element = element[index]; //in case of 'categories' in BIAT
	    let fields = {
	        newStimulus : m.prop(''),
	        elementType: m.prop(object.key.toLowerCase().includes('categor') ? 'Category' : 'Attribute'),
	        titleType: m.prop(element.title.media.word === undefined ? 'image' : 'word'),
	        titleHidden: m.prop(this.titleType === 'word'? 'hidden': 'visible'), //weather the category design flags will be visible
	        selectedStimuli: m.prop(''),
	        stimuliHidden: m.prop('visible'),
	        startStimulus: m.prop(settings.parameters.showStimuliWithInst === false ? 'hidden' : 'visible'),
	        newStartStimulus: m.prop(''), //startStimulus
	        startStimuliHidden: m.prop(this.startStimulus),
	        selectedStartStimuli: m.prop(''),
	    };
	    return {fields, set:set, get:get, addStimulus:addStimulus, 
	        updateSelectedStimuli:updateSelectedStimuli,removeChosenStimuli:removeChosenStimuli, removeAllStimuli:removeAllStimuli, 
	        updateTitleType:updateTitleType, removeChosenStartStimuli:removeChosenStartStimuli,
	        resetStimuliList:resetStimuliList};
	    
	    function get(name, media, type, startStimulus){
	        if (name === 'title' && media === 'startStimulus' && type === 'media') { //in case of getting startStimulus stimuli list
	            if (element.title.startStimulus.media.word !== undefined)
	            {
	                if (element.title.startStimulus.media.word === '') return [];
	                return element.title.startStimulus.media.word.split(', ');
	            }
	            else {
	                if (element.title.startStimulus.media.image === '') return [];
	                return [element.title.startStimulus.media.image];
	            }
	        }
	        if (name === 'title' && media == null && type == null) //special case - return the title's value (word/image)
	        { 
	            if (element.title.media.word === undefined) return element.title.media.image;
	            return element.title.media.word;
	        }
	        if (media !=null && type!=null) 
	        {
	            if (type === 'font-size')
	                return parseFloat((element[name][media][type].replace('em','')));
	            else if (startStimulus != null) 
	            {
	                if (startStimulus === 'font-size')
	                    return parseFloat((element[name][media][type][startStimulus].replace('em','')));
	                return element[name][media][type][startStimulus];
	            }
	            return element[name][media][type];
	        }
	        else if (media === 'color') //case of stimulusCss
	            return element[name][media];
	        else if (media === 'font-size') return parseFloat((element[name][media]).substring(0,3));
	        return element[name]; 
	    }
	    function set(name, media, type, startStimulus){
	        return function(value)
	        { 
	            if (media !=null && type!=null) 
	            {
	                if (type === 'font-size')
	                {
	                    value = Math.abs(value);
	                    if (value === 0)
	                    { 
	                        alert('Font\'s size must be bigger then 0');
	                        return element[name][media][type]; 
	                    }
	                    return element[name][media][type] = value + 'em';
	                }
	                else if (startStimulus !=null) { //in case of startStimulus
	                    if(startStimulus === 'font-size')
	                    {
	                        value = Math.abs(value);
	                        if (value === 0)
	                        { 
	                            alert('Font\'s size must be bigger then 0');
	                            return element[name][media][type][startStimulus]; 
	                        }
	                        return element[name][media][type][startStimulus] = value + 'em';
	                    }
	                    return element[name][media][type][startStimulus] = value;
	                }
	                return element[name][media][type] = value; 
	            }
	            else if (media === 'color') return element[name][media] = value;
	            else if (media === 'font-size')
	            {
	                value = Math.abs(value);
	                if (value === 0)
	                { 
	                    alert('Font\'s size must be bigger then 0');
	                    return element[name][media]; 
	                }
	                return element[name][media] = value + 'em';
	            }
	            return element[name]= value; 
	        };
	    }
	    function updateTitleType() { 
	        return function (type) {
	            fields.titleType(type);
	            let object = element.title.media;
	            let category;
	            object.word !== undefined ? category = object.word : category = object.image;
	            if (type === 'word')
	            {
	                element.title.media = {};
	                element.title.media = {word: category};
	            }
	            else 
	            {
	                element.title.media = {};
	                element.title.media = {image: category};
	            }
	        };
	    }
	    function addStimulus(event, startStimulus = false)
	    {
	        let new_stimuli = !startStimulus ? fields.newStimulus() : fields.newStartStimulus();
	        event = event.path[0].id; //get the button name, to know the kind of the stimulus added
	        if(new_stimuli == null || new_stimuli === '') alert('Please fill the stimulus field');
	        else {
	            if (event === 'addWord') {
	                if (!startStimulus) element.stimulusMedia.push({word : new_stimuli});
	                else {
	                    let mediaStr;
	                    if (element.title.startStimulus.media.word === undefined) {
	                        removeAllStimuli(event, true);
	                        mediaStr = new_stimuli;
	                    }
	                    else if (element.title.startStimulus.media.word === '')
	                        mediaStr = element.title.startStimulus.media.word + new_stimuli;
	                    else mediaStr = element.title.startStimulus.media.word +', '+new_stimuli;
	                    element.title.startStimulus.media = {word : mediaStr};}
	            }
	            else {
	                if (!startStimulus) element.stimulusMedia.push({image : new_stimuli});
	                else {
	                    removeAllStimuli(event, true);
	                    element.title.startStimulus.media = {image: new_stimuli};
	                }
	            }
	            if (!startStimulus) fields.newStimulus(''); //reset the field
	            else fields.newStartStimulus('');
	        }        
	    }

	    function updateSelectedStimuli(select, startStimulus = false){
	        let list =[];
	        if (startStimulus === false ) {
	            list = element.stimulusMedia.filter((val,i) => select.target.options[i].selected);
	            fields.selectedStimuli(list);
	        }
	        else {
	            for (let i = 0; i < select.target.options.length; i++) {
	                if (select.target.options[i].selected) list.push(select.target.options[i].value);
	            }
	            fields.selectedStartStimuli(list);
	        }
	    }
	    function removeChosenStimuli() {
	        element.stimulusMedia = element.stimulusMedia.filter((element)=>!fields.selectedStimuli().includes(element));
	        fields.selectedStimuli([]);
	    }
	    function removeChosenStartStimuli(e) {
	        let selected = fields.selectedStartStimuli();
	        let stimuli = element.title.startStimulus.media;
	        if (stimuli.word === undefined) { //in case of a single image
	            removeAllStimuli(e, true);
	            fields.selectedStartStimuli([]);
	            return; 
	        }
	        else stimuli = element.title.startStimulus.media.word.split(', ');
	        let new_str = '';
	        for (let i = 0 ; i < stimuli.length; i++) {
	            if (selected.includes(stimuli[i])){
	                if (stimuli.length === 1) new_str = '';
	                else if (i === stimuli.length - 1) new_str = new_str.slice(0,-2);
	                continue;
	            }
	            if (stimuli.length === 1) new_str = stimuli[i];
	            else if (i === stimuli.length - 1) new_str = new_str + stimuli[i];
	            else new_str = new_str + stimuli[i] + ', ';
	        }
	        element.title.startStimulus.media.word = new_str;
	        fields.selectedStartStimuli([]);
	    }
	    function removeAllStimuli(e,startStimulus = false) {
	        if (!startStimulus) element.stimulusMedia.length = 0;
	        else {
	            if (element.title.startStimulus.media.word !== undefined)
	                element.title.startStimulus.media.word = '';
	            else element.title.startStimulus.media.image = '';
	        }
	    }
	    function resetStimuliList(e,flag = false){
	        flag ? element.title.startStimulus = clone(startStimulusList) : element.stimulusMedia = clone(stimuliList);
	    }
	}

	function view$3(ctrl) {
	    return m('.container',[
	        m('.row top-buffer', [
	            m('.col-auto info-buffer',[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['Will appear in the data and in the default feedback message'])
	            ]),
	            m('.col-3 element-buffer', ctrl.fields.elementType()+' name as will appear in the data:'),
	            m('.col-6 element-buffer',
	                m('input[type=text].form-control',{style: {width: '16rem', height: '2.5rem'}, value:ctrl.get('name'), onchange:m.withAttr('value', ctrl.set('name'))})),
	        ]),
	        m('.row row-element-buffer', [
	            m('.col-auto info-buffer',[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['Name of the ' +ctrl.fields.elementType()+' presented in the task'])
	            ]),
	            m('.col-md-3 element-buffer', ctrl.fields.elementType()+' title as will appear to the user: '),
	            m('.col-md-4 element-buffer',
	                m('input[type=text].form-control',{style: {width: '16rem', height: '2.5rem'}, value: ctrl.get('title'), onchange:m.withAttr('value', ctrl.set('title', 'media', ctrl.fields.titleType()))})),
	            // m('.col-sm-2',ctrl.fields.elementType()+'\'s type:   ',[
	            //     m('select.custom-select',{value: ctrl.get('title','media','word') === undefined || ctrl.get('title','media','word') === '' ? 'image' : 'word', onchange:m.withAttr('value',ctrl.updateTitleType())},[
	            //         ctrl.fields.titleType(ctrl.get('title','media','word') === undefined || ctrl.get('title','media','word') === '' ? 'image' : 'word'),
	            //         ctrl.fields.titleHidden(ctrl.fields.titleType() === 'word' ? 'visible' : 'hidden'),
	            //         m('option', 'word'),
	            //         m('option', 'image')
	            //     ])
	            // ]),
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
	                        m('input[type=color]',{style: {'border-radius':'3px', visibility:ctrl.fields.titleHidden()}, value: ctrl.get('title','css','color'), onchange:m.withAttr('value', ctrl.set('title','css','color'))})
	                    ])
	                ]), m('br'),
	                m('.row',[
	                    m('.col',[
	                        m('span', {style: {visibility:ctrl.fields.titleHidden()}}, 'Font\'s size: '),
	                        m('input[type=number]', {style: {'border-radius':'4px','border':'1px solid #E2E3E2', visibility:ctrl.fields.titleHidden()}, value:ctrl.get('title','css','font-size') ,min: '0' ,onchange:m.withAttr('value', ctrl.set('title','css','font-size'))})
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
	                m('input[type=text].form-control', {style:{width:'15em'}, placeholder:'Enter Stimulus content here', 'aria-label':'Enter Stimulus content', 'aria-describedby':'basic-addon2', value: ctrl.fields.newStimulus(), oninput: m.withAttr('value', ctrl.fields.newStimulus)}),
	                m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons'}},[
	                    m('button[type=button].btn btn-outline-secondary',{disabled:ctrl.fields.newStimulus().length === 0, id:'addWord', onclick:ctrl.addStimulus},[
	                        m('i.fas fa-plus'), 'Add Word'
	                    ]),
	                    m('button[type=button].btn btn-outline-secondary', {disabled:ctrl.fields.newStimulus().length === 0, id:'addImage', onclick: ctrl.addStimulus},[
	                        m('i.fas fa-plus'), 'Add Image'
	                    ])
	                ])
	            ]),
	            ///startStimulus
	            m('.col-auto info-buffer',{style: {'padding-top': '1.6em', visibility:ctrl.fields.startStimulus()}},[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['Here You can enter only one type of stimuli (image or words), if you enter an image you can only enter one and with it\'s file extension.']),
	            ]),
	            m('.col',{style: {visibility: ctrl.fields.startStimulus()}}, [
	                m('br'),
	                m('input[type=text].form-control', {style:{width:'15em'},placeholder:'Enter Stimulus content here', 'aria-label':'Enter Stimulus content', 'aria-describedby':'basic-addon2', value: ctrl.fields.newStartStimulus(), oninput: m.withAttr('value', ctrl.fields.newStartStimulus)}),
	                m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons'}},[
	                    m('button[type=button].btn btn-outline-secondary',{disabled:ctrl.fields.newStartStimulus().length === 0, id:'addWord', onclick: (e) => ctrl.addStimulus(e,true)},[
	                        m('i.fas fa-plus'), 'Add Word'
	                    ]),
	                    m('button[type=button].btn btn-outline-secondary', {disabled:ctrl.fields.newStartStimulus().length === 0, id:'addImage', onclick: (e) => ctrl.addStimulus(e,true)},[
	                        m('i.fas fa-plus'), 'Add Image'
	                    ])
	                ])
	            ]),
	        ]),
	        m('.row',[
	            m('.col-auto info-buffer',{style: {'padding-top': '1.6em'}},[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['To select multiple stimuli, please press the ctrl key while selecting the desired stimuli'])
	            ]),
	            m('.col',[
	                m('.form-group',[
	                    m('br'),
	                    m('span',{style:{'font-size': '20px'}},'Stimuli: '),
	                    m('select.form-control', {multiple : 'multiple', size : '8' ,style: {width: '15rem'}, onchange: (e) => ctrl.updateSelectedStimuli(e)},[
	                        ctrl.get('stimulusMedia').some(object => object.word) ? ctrl.fields.stimuliHidden('visible') : ctrl.fields.stimuliHidden('hidden'),
	                        ctrl.get('stimulusMedia').map(function(object){
	                            let value = object.word ? object.word : object.image;
	                            let option = value + (object.word ? ' [Word]' : ' [Image]');
	                            return m('option', {value:value, selected : ctrl.fields.selectedStimuli().includes(object)}, option);
	                        })
	                    ]),
	                    m('div',{style: {visibility:ctrl.fields.stimuliHidden(), position: 'relative', top: '-170px', left: '255px', marginBottom: '-150px'}},[
	                        m('span',{style:{'text-decoration': 'underline'}}, 'Stimuli font\'s design'),m('br'),
	                        m('label','Font\'s color: '),m('br'),
	                        m('input[type=color]', {style:{'border-radius':'3px'},value: ctrl.get('stimulusCss','color'), onchange:m.withAttr('value', ctrl.set('stimulusCss','color'))}),
	                        m('br'), m('label', 'Font\'s size:'), m('br'),
	                        m('input[type=number]', {style: {'border-radius':'4px','border':'1px solid #E2E3E2'}, value:ctrl.get('stimulusCss','font-size') ,min: '0' ,onchange:m.withAttr('value', ctrl.set('stimulusCss','font-size'))})
	                    ]),
	                    m('br'),
	                    m('.btn-group-vertical', {style:{'data-toggle':'buttons'}},[
	                        m('button.btn btn btn-warning', {disabled: ctrl.fields.selectedStimuli().length===0, onclick:ctrl.removeChosenStimuli}, 'Remove Chosen Stimuli'),
	                        m('button.btn btn btn-warning', {onclick:ctrl.removeAllStimuli},'Remove All Stimuli'),
	                        m('button.btn btn btn-warning', {onclick:(e) => ctrl.resetStimuliList(e)}, 'Reset Stimuli List'),
	                    ])
	                ]),
	            ]),
	            ///startStimulus
	            m('.col-auto info-buffer',{style: {'padding-top': '1.6em', visibility:ctrl.fields.startStimulus()}},[
	                m('i.fa.fa-info-circle'),
	                m('.card.info-box.card-header', ['To select multiple stimuli, please press the ctrl key while selecting the desired stimuli'])
	            ]),
	            m('.col',{style: {visibility:ctrl.fields.startStimulus()}},[
	                m('.form-group',[   
	                    m('br'), 
	                    m('span',{style:{'font-size': '20px'}},'Stimuli Presented with Instructions: '),
	                    m('select.form-control', {multiple : 'multiple', size : '8' ,style: {width: '15rem'}, onchange: (e) => ctrl.updateSelectedStimuli(e, true)},[
	                        ctrl.fields.startStimulus() === 'hidden' ||
	                        ctrl.get('title','startStimulus','media').some(object => object.includes('.')) || 
	                        ctrl.get('title','startStimulus','media').length === 0 ? ctrl.fields.startStimuliHidden('hidden') : ctrl.fields.startStimuliHidden('visible'),
	                        ctrl.get('title','startStimulus','media').map(function(object){
	                            let type = object.includes('.') ? ' [Image]' : ' [Word]';
	                            let option = object + type;
	                            return m('option', {value:object, selected : ctrl.fields.selectedStartStimuli().includes(object)} ,option);
	                        })
	                    ]),
	                    m('div',{style: {visibility:ctrl.fields.startStimuliHidden(), position: 'relative', top: '-170px', left: '255px', marginBottom: '-150px'}},[
	                        m('span',{style:{'text-decoration': 'underline'}},'Stimuli font\'s design:'),m('br'),
	                        m('label','Font\'s color: '),m('br'),
	                        m('input[type=color]', {style:{'border-radius':'3px'},value: ctrl.get('title','startStimulus','css','color'), onchange:m.withAttr('value', ctrl.set('title','startStimulus','css','color'))}),
	                        m('br'), m('label', 'Font\'s size:'), m('br'),
	                        m('input[type=number]', {style: {'border-radius':'4px','border':'1px solid #E2E3E2'}, value:ctrl.get('title','startStimulus','css','font-size') ,min: '0' ,onchange:m.withAttr('value', ctrl.set('title','startStimulus','css','font-size'))})
	                    ]),
	                    m('br'),
	                    m('.btn-group-vertical', {style:{'data-toggle':'buttons'}},[
	                        m('button.btn btn btn-warning', {disabled: ctrl.fields.selectedStartStimuli().length === 0, onclick: (e) => ctrl.removeChosenStartStimuli(e)}, 'Remove Chosen Stimuli'),
	                        m('button.btn btn btn-warning', {onclick: (e) => ctrl.removeAllStimuli(e,true)}, 'Remove All Stimuli'),
	                        m('button.btn btn btn-warning', {onclick:(e) => ctrl.resetStimuliList(e,true)}, 'Reset Stimuli List'),
	                    ])
	                ])
	            ])
	        ]),
	        m('.row border_lines')
	    ]);
	}

	let prCategoriesComponent = {
	    controller:controller$4,
	    view:view$4
	};

	function controller$4(settings, defaultSettings, clearElement){

	    return {reset:reset, clear:clear};
	    function reset(){
	        Object.assign(settings.practiceCategory1, JSON.parse(JSON.stringify(defaultSettings.practiceCategory1)));
	        Object.assign(settings.practiceCategory2, JSON.parse(JSON.stringify(defaultSettings.practiceCategory2)));
	    }
	    function clear(){
	        Object.assign(settings.practiceCategory1, clearElement[0]);
	        Object.assign(settings.practiceCategory2, clearElement[0]);
	    }
	}

	function view$4(ctrl, settings, defaultSettings) {
	    return m('.container', [
	        m('.row top-buffer',[
	            m('col', m('h1.categoryHeadline','First Practice Category'))]),
	        m.component(elementComponent, {key: 'practiceCategory1'} ,settings,
	            defaultSettings.practiceCategory1.stimulusMedia, defaultSettings.practiceCategory1.title.startStimulus),
	        m('h1.categoryHeadline','Second Practice Category'),
	        m('.row top-buffer'),
	        m.component(elementComponent, {key:'practiceCategory2'}, settings,
	            defaultSettings.practiceCategory2.stimulusMedia, defaultSettings.practiceCategory2.title.startStimulus),
	        m('.row top-buffer',[
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

	let categoriesComponent = {
	    controller:controller$5,
	    view:view$5
	};

	function controller$5(settings, defaultSettings, clearElement){
	    let categories = settings.categories;
	    for (let i=0; i < categories.length; i++){
	        categories[i].key = Math.random();
	    }
	    let headlines = ['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth'];
	    let keys = Array.from(Array(8)).map(x=>Math.random());
	    let addFlag =  m.prop('visible');
	    let removeFlag = m.prop('hidden');
	    let chooseFlag = m.prop('hidden');
	    let firstFlag = m.prop('false'); //to know if the first&second original categories() were choosen to remove. For reset actions.
	    let secondFlag = m.prop('false');
	    let choosenCategoriesList = [];
	    let chooseClicked = m.prop(false);
	    
	    return {addFlag:addFlag, removeFlag, chooseFlag ,firstFlag, secondFlag, categories: categories, headlines: headlines, 
	        reset:reset, clear:clear, addCategory:addCategory, choosenCategoriesList:choosenCategoriesList, 
	        updateChoosenBlocks:updateChoosenBlocks, removeCategories:removeCategories, keys, chooseCategories: chooseCategories};
	    
	    function reset(){
	        Object.assign(settings.categories[0], clone(defaultSettings.categories[0]));
	        Object.assign(settings.categories[1], clone(defaultSettings.categories[1]));
	        if(categories.length > 2) categories.length = 2;
	        addFlag('visible');
	        firstFlag('false');
	        secondFlag('false');
	    }
	    function clear(){
	        settings.categories.forEach(element => Object.assign(element, clone(clearElement[0])));
	    }
	    function addCategory() {
	        categories.push(clone(clearElement[0]));
	        let last = categories.length - 1;
	        categories[last].key = Math.random();
	        if (categories.length === 8) addFlag('hidden');
	    }
	    function updateChoosenBlocks(e, index){
	        //if clicked the checkbox to uncheck the item
	        if (choosenCategoriesList.includes(index) && !e.target.checked){
	            var i = choosenCategoriesList.indexOf(index);
	            if (i !== -1) {
	            choosenCategoriesList.splice(i, 1);
	            }
	            return;
	        } 
	        if (e.target.checked) choosenCategoriesList.push(index);
	    }
	    function chooseCategories(){
	        chooseFlag('visible');
	        if (!chooseClicked()) { //show the alert only for the first time the choose button has been clicked
	            alert('To choose categories to remove, please tik the checkbox near the wanted category, and to remove them click the \'Remove Choosen Categories\' button below');
	            chooseClicked(true);
	        }
	    }
	    function removeCategories(){

	        if (categories.length < 2) {
	            alert('Minimum number of blocks needs to be 2'); 
	            choosenCategoriesList.length = 0;
	            return;
	        }
	        if ((categories.length - choosenCategoriesList.length) < 2){
	            alert('Minimum number of blocks needs to be 2, please choose less categories to remove');
	            choosenCategoriesList.length = 0;
	            return;
	        }
	        choosenCategoriesList.sort();
	        for (let i = choosenCategoriesList.length - 1; i >=0; i--) {
	            if (choosenCategoriesList[i] === 0) firstFlag('true');
	            if (choosenCategoriesList[i] === 1) secondFlag('true');

	            categories.splice(choosenCategoriesList[i],1);
	        }
	        choosenCategoriesList.length = 0;
	        chooseFlag('hidden');
	        addFlag(categories.length < 8 ? 'visible' : 'hidden');
	    }
	}

	function view$5(ctrl,settings, defaultSettings, clearElement) {
	    return m('.container',{id:'categories'} ,[
	        //filter to remove the first element
	        ctrl.categories.map(function(category, index){
	            let stimulusMedia;
	            let startStimulus;
	            let key = category.key;
	            if ((index === 0 && ctrl.firstFlag() == 'false') || (index === 1 && ctrl.secondFlag() == 'false')){
	                stimulusMedia = defaultSettings.categories[index].stimulusMedia;
	                startStimulus = defaultSettings.categories[index].title.startStimulus;
	            }
	            else {
	                stimulusMedia = clearElement[0].stimulusMedia;
	                startStimulus = clearElement[0].title.startStimulus;
	            }
	            return m('div',{key: key},[
	                m('input[type=checkbox]', {checked : ctrl.choosenCategoriesList.includes(index), style:{visibility: ctrl.chooseFlag()}, onclick: (e) => ctrl.updateChoosenBlocks(e, index)}),           
	                m('h1.categoryHeadline', ctrl.headlines[index] + ' Category'),
	                m('.row top-buffer'),
	                m.component(elementComponent, {key:'categories'}, settings, stimulusMedia, startStimulus, index),
	            ]);
	        }),
	        m('.row.space justify-content-md-center',[
	            m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons'}},[
	                m('button.btn btn btn-info',{onclick: ctrl.addCategory, style:{'padding-right':'60px','padding-left':'60px' ,visibility: ctrl.addFlag()}}, [m('i.fas fa-plus')],' Add Category'),
	                m('button.btn btn btn-warning',{onclick: ctrl.chooseCategories},[
	                    m('i.fas fa-check'), ' Choose Blocks to Remove']),
	                m('button.btn btn btn-danger',{onclick: ctrl.removeCategories},[
	                    m('i.far fa-minus-square'), ' Remove Choosen Blocks']),
	            ])
	        ]),
	        m('.row top-buffer',[
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

	let attributesComponent = {
	    controller:controller$6,
	    view:view$6
	};

	function controller$6(settings, defaultSettings, clearElement){
	    return {reset:reset, clear:clear};
	    function reset(){
	        Object.assign(settings.attribute1, JSON.parse(JSON.stringify(defaultSettings.attribute1)));
	        Object.assign(settings.attribute2,  JSON.parse(JSON.stringify(defaultSettings.attribute2)));}
	    function clear(){
	        Object.assign(settings.attribute1, clearElement[0]);
	        Object.assign(settings.attribute2, clearElement[0]);
	    }
	}

	function view$6(ctrl,settings, defaultSettings) {
	    return m('.container', [
	        m('.row top-buffer',[
	        m('h1.categoryHeadline','First Attribute')]),
	        m.component(elementComponent,{key: 'attribute1'} ,settings,
	            defaultSettings.attribute1.stimulusMedia, defaultSettings.attribute1.title.startStimulus),
	        m('h1.categoryHeadline','Second Attribute'),
	        m('.row top-buffer'),
	        m.component(elementComponent,{key:'attribute2'}, settings,
	            defaultSettings.attribute2.stimulusMedia, defaultSettings.attribute2.title.startStimulus),
	        m('.row top-buffer',[
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

	let outputComponent = {
	    controller: controller$7,
	    view:view$7
	};
	function controller$7(settings, defaultSettings, blocksObject){
	    let error_msg = [];

	    validityCheck(settings);

	    return {printToPage, createFile, error_msg}
	    

	    function validityCheck(settings){
	        let containsImage = false;
	        let category_headlines = ['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth'];

	        let temp1,temp2,temp3 = false;
	        if(settings.parameters.practiceBlock){
	            temp1 = checkMissingElementName(settings.practiceCategory1, 'First Pratice Category', error_msg);
	            temp2 = checkMissingElementName(settings.practiceCategory2, 'Second Pratice Category', error_msg);
	        }
	        settings.categories.map(function(category, index){
	            let temp = checkMissingElementName(category, category_headlines[index]+' Category', error_msg);
	            if (temp) temp3 = true;
	        });
	        let temp4 = checkMissingElementName(settings.attribute1, 'First Attribute', error_msg);
	        let temp5 = checkMissingElementName(settings.attribute2, 'Second Attribute', error_msg);

	        if (temp1 || temp2 || temp3 || temp4 || temp5) containsImage = true;
	        else containsImage = false;
	    
	        if(settings.parameters.base_url.length === 0 && containsImage)
	            error_msg.push('Image\'s\ url is missing and there is an image in the study');    
	        
	        //check for blocks problems
	        let currBlocks = clone(settings.blocks);
	        let clearBlocks = blocksObject.slice(-1)[0]; //blocks parameters with zeros as the values, used to check if the current parameters are also zeros.
	   
	        ['focalAttribute', 'firstFocalAttribute', 'focalCategoryOrder'].forEach(function(key){
	            delete currBlocks[key];
	            delete clearBlocks[key];
	        });

	        if(JSON.stringify(currBlocks) === JSON.stringify(clearBlocks))
	            error_msg.push('All the block\'s parameters equals to 0, that will result in not showing the task at all');    
	    }

	    function createFile(settings, type){
	        return function(){
	            let output,textFileAsBlob;
	            let downloadLink = document.createElement('a');
	            if (type === 'JS') {
	                output = toString(settings);
	                textFileAsBlob = new Blob([output], {type:'text/plain'});
	                downloadLink.download = 'BIAT.js';
	            }
	            else {
	                output = updateSettings(settings);
	                textFileAsBlob = new Blob([JSON.stringify(output,null,4)], {type : 'application/json'});
	                downloadLink.download = 'BIAT.json';
	            }
	            if (window.webkitURL != null) {downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);}
	            else {
	                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	                downloadLink.style.display = 'none';
	                document.body.appendChild(downloadLink);
	            }
	            downloadLink.click();
	        };
	    }

	    function printToPage(settings){
	        return function() {
	            let para = document.getElementById('textDiv');
	            para.style.visibility = 'visible';
	            let text_area = document.getElementById('textArea');
	            text_area.value = toString(settings);
	        };
	    }

	    function toString(settings){return toScript(updateSettings(settings));}

	    function removeIndexFromCategories(settings){
	        let categories = settings.categories;
	        categories.forEach(element => delete element.key);
	    }
	    function updateSettings(settings){
	        removeIndexFromCategories(settings);
	        let output = {};
	        if (settings.parameters.practiceBlock) {
	            output.practiceCategory1 = settings.practiceCategory1;
	            output.practiceCategory2 = settings.practiceCategory2;
	        }
	        output.categories = settings.categories;
	        output.attribute1 = settings.attribute1;
	        output.attribute2 = settings.attribute2;
	        output.base_url = settings.parameters.base_url;
	        output.remindError =  settings.parameters.remindError;
	        output.showStimuliWithInst = settings.parameters.showStimuliWithInst;
	        output.isTouch = settings.parameters.isTouch;
	        output.practiceBlock = settings.parameters.practiceBlock;
	        if(settings.parameters.isQualtrics) output.isQualtrics = settings.parameters.isQualtrics; 
	        Object.assign(output, settings.blocks);
	        settings.parameters.isTouch ? Object.assign(output, settings.touch_text) : Object.assign(output, settings.text); 
	        return output;
	    }

	    function toScript(output){
	        return `define(['pipAPI' ,'${output.isQualtrics ? 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js': 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/biat6.js'}'], function(APIConstructor, iatExtension) {var API = new APIConstructor(); return iatExtension(${JSON.stringify(output,null,4)});});`;
	    }



	}
	function view$7(ctrl, settings){
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
	                    m('button.CreateFile', {onclick: ctrl.createFile(settings,'JS')},[
	                        m('i.fas fa-file-download'), ' Download Script']),
	                    m('button.CreateJSONFile', {onclick: ctrl.createFile(settings,'JSON')},[
	                        m('i.fas fa-file-download'), ' Download JSON']),
	                    m('button.CreateJSONFile', {onclick: ctrl.printToPage(settings)}, 'Print to Browser')
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

	let importComponent = {
	    controller:controller$8,
	    view:view$8
	};

	function view$8(ctrl){
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


	function controller$8(settings) {
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
	    function updateSettings(input) {
	        if(input.practiceBlock) {
	            settings.practiceCategory1 = input.practiceCategory1;
	            settings.practiceCategory2 = input.practiceCategory2;
	        }
	        settings.categories = input.categories;
	        settings.attribute1 = input.attribute1;
	        settings.attribute2 = input.attribute2;
	        settings.parameters.base_url = input.base_url;
	        settings.parameters.remindError = input.remindError;
	        settings.parameters.showStimuliWithInst = input.showStimuliWithInst;
	        settings.parameters.isTouch = input.isTouch;
	        settings.parameters.practiceBlock = input.practiceBlock;

	        settings.blocks.nMiniBlocks = input.nMiniBlocks;
	        settings.blocks.nTrialsPerMiniBlock = input.nTrialsPerMiniBlock;
	        settings.blocks.nPracticeBlockTrials = input.nPracticeBlockTrials;
	        settings.blocks.nCategoryAttributeBlocks = input.nCategoryAttributeBlocks;
	        settings.blocks.focalAttribute = input.focalAttribute;
	        settings.blocks.firstFocalAttribute = input.firstFocalAttribute;
	        settings.blocks.focalCategoryOrder = input.focalCategoryOrder;
	        if(input.isQualtrics) settings.parameters.isQualtrics = input.isQualtrics;
	        if (input.isTouch){
	            settings.touch_text.remindErrorText = input.remindErrorText;
	            settings.touch_text.leftKeyText = input.leftKeyText;
	            settings.touch_text.rightKeyText = input.rightKeyText;
	            settings.touch_text.orKeyText = input.orKeyText;
	            settings.touch_text.finalText = input.finalText;
	            settings.touch_text.instTemplate = input.instTemplate;
	        }
	        else {
	            settings.text.remindErrorText = input.remindErrorText;
	            settings.text.leftKeyText = input.leftKeyText;
	            settings.text.rightKeyText = input.rightKeyText;
	            settings.text.orKeyText = input.orKeyText;
	            settings.text.finalText = input.finalText;
	            settings.text.instTemplate = input.instTemplate;
	        }
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
	    {name: 'isTouch', options:['Keyboard', 'Touch'], label:'Keyboard input or touch input?', desc:'Minno does not auto-detect the input method. If you need a touch version and a keyboard version, create two different scripts with this tool.'},
	    {name: 'isQualtrics',  options:['Regular','Qualtrics'], label:'Regular script or Qualtrics?', desc: ['If you want this BIAT to run from Qualtrics, read ', m('a',{href: 'https://minnojs.github.io/minnojs-blog/qualtrics-biat/'}, 'this blog post '),'to see how.']},
	    {name: 'practiceBlock', label: 'Practice Block', desc: 'Should the task start with a practice block?'},
	    {name: 'remindError', label: 'Error feedback on incorrect responses', desc: 'It is recommended to show participants an error feedback on error responses'},
	    {name: 'showStimuliWithInst', label: 'Show Stimuli with Instructions', desc: 'Whether to show the stimuli of the IN categories at the beginning of the block.'},
	    {istouch:false, isQualtrics:false, practiceBlock:false, showStimuliWithInst:false, remindError:false, base_url:''}
	];

	let blocksDesc = [
	    {name: 'nMiniBlocks', label: 'Mini Blocks', desc: 'Each block can be separated to a number of mini-blocks, to reduce repetition of the same response in consecutive trials. The default, 1, means that we don\'t actually use mini blocks.'},
	    {name: 'nTrialsPerMiniBlock', label: 'Trials in Mini Blocks', desc: '50% on the right, 50% left, 50% attributes, 50% categories.'},
	    {name: 'nPracticeBlockTrials', label: 'Trials in Practice Block', desc:'Should be at least 8 trials'},
	    {name: 'nCategoryAttributeBlocks', label: 'Blocks per focal category-attribute combination', desc: 'Number of blocks per focal category-attribute combination'},
	    {name: 'focalAttribute', label: 'Focal Attribute', desc: 'Sets whether we use a certain focal attribute throughout the task, or both.', options: ['attribute1','attribute2','both']},
	    {name: 'firstFocalAttribute', label: 'First Focal Attribute', desc: 'Sets what attribute appears first. Irrelevant if Focal Attribute is not \'both\'.', options: ['attribute1','attribute2','random']},
	    {name: 'focalCategoryOrder', label: 'Focal Category Order', desc: 'If bySequence then we always start with the first category in the list as the first focal category.', options: ['bySequence','random']},
	    {nMiniBlocks: 0, nTrialsPerMiniBlock: 0, nPracticeBlockTrials:0, nCategoryAttributeBlocks:0,
	        focalAttribute: 'attribute1', firstFocalAttribute : 'random', focalCategoryOrder: 'random'}
	];

	let textDesc = [
	    {name: 'instTemplate', nameTouch: 'instTemplateTouch',label:'Instructions', desc: 'Instructions'},
	    {name: 'remindErrorText', nameTouch: 'remindErrorTextTouch' , label:'Screen\'s Bottom (error reminder)', desc:'We use this text to remind participants what happens on error. Replace this text if you do not require participants to correct their error responses (see General Parameters page).'},
	    {name: 'leftKeyText', nameTouch:'leftKeyTextTouch',label:'Top-left text (about the left key)', desc: 'We use this text to remind participants what key to use for a left response.'},
	    {name: 'rightKeyText', nameTouch:'rightKeyTextTouch',label:'Top-right text (about the right key)', desc: 'We use this text to remind participants what key to use for a right response.'},
	    {name: 'orText', label:'Or', desc: 'We show this text in the combined blocks to separate between the two categories that use the same key.'},
	    {name: 'finalText', nameTouch: 'finalTouchText' , label:'Text shown at the end', desc: 'Text shown at the end'},
	    {remindErrorText:'', leftKeyText:'', rightKeyText:'', orText:'', 
	        instTemplate:'', finalText:''},
	    {remindErrorTextTouch:'', leftKeyTextTouch:'', rightKeyTextTouch:'',  
	    instTemplateTouch:'', finalTouchText:''}
	];

	let elementClear = [{
	    name : '',
	    title : {
	        media : {image : ''},
	        css : {color:'#000000','font-size':'0em'},
	        height : 4, 
	        startStimulus : { 
	            media : {image : ''}, 
	            css : {color:'#000000','font-size':'0em'}, 
	            height : 2
	        }
	    },
	    stimulusMedia : [], 
	    stimulusCss : {color:'#000000','font-size':'0em'} }];

	let tabs = [
	    {value: 'parameters', text: 'General parameters', component: parametersComponent, rowsDesc: parametersDesc },
	    {value: 'blocks', text: 'Blocks', component: blocksComponent, rowsDesc: blocksDesc},
	    {value: 'practice', text: 'Practice Block', component: prCategoriesComponent, rowsDesc: elementClear},
	    {value: 'categories', text: 'Categories', component: categoriesComponent, rowsDesc: elementClear},
	    {value: 'attributes', text: 'Attributes', component: attributesComponent, rowsDesc: elementClear},
	    {value: 'text', text: 'Texts', component: textComponent, rowsDesc: textDesc},
	    {value: 'output', text: 'Complete', component: outputComponent, rowsDesc: blocksDesc},
	    {value: 'import', text: 'Import', component: importComponent},
	    {value: 'help', text: 'Help', component: helpComponent, rowsDesc:'BIAT'}
	];

	let biat = {
	    controller: function(settings$1){
	        return {settings: settings$1 ? settings$1 : clone(settings)};
	    },
	    view: function(ctrl){
	        return m('.container', 
	            m('.header.p-3 mb-2 bg-info text-white', {style:{'background-color': 'coral'}},
	                m('h1.display-4', 'Create my BIAT script')),
	            m.component(tabsComponent, tabs, ctrl.settings, settings)
	        );
	    }
	};

	//m.mount(document.documentElement, Main);
	m.mount(document.getElementById('dashboard'), biat);

}());
//# sourceMappingURL=biat_index.js.map
