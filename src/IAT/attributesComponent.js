import elementComponent from './elementComponent.js';

let attributesComponent = {
    controller:controller,
    view:view
};

function controller(settings, defaultSettings, clearElement){
    return {reset:reset, clear:clear};
    function reset(){
        Object.assign(settings.attribute1,  JSON.parse(JSON.stringify(defaultSettings.attribute1)));
        Object.assign(settings.attribute2,  JSON.parse(JSON.stringify(defaultSettings.attribute2)));}
    function clear(){
        Object.assign(settings.attribute1, clearElement[0]);
        Object.assign(settings.attribute2, clearElement[0]);
    }
}

function view(ctrl,settings, defaultSettings) {
    return m('.container', [
        m('.row top-buffer',[
            m('col', m('h1.categoryHeadline','First Attribute')),
            m('.col',{style:{'margin-bottom':'7px'}},[
                m('.btn-group btn-group-toggle', {style:{'data-toggle':'buttons', float: 'right'}},[
                    m('button.btn btn btn-danger', {onclick: ctrl.reset},[
                        m('i.fas fa-undo fa-sm'), ' Reset'
                    ]),
                    m('button.btn btn btn-danger',{onclick: ctrl.clear},[
                        m('i.far fa-trash-alt fa-sm'), ' Clear'
                    ])
                ])
            ])
        ]),
        m.component(elementComponent,{key: 'attribute1'} ,settings, defaultSettings.attribute1.stimulusMedia),
        m('h1.categoryHeadline','Second Attribute'),
        m('.row top-buffer'),
        m.component(elementComponent,{key:'attribute2'}, settings, defaultSettings.attribute2.stimulusMedia)
    ]);
}

export default attributesComponent;
