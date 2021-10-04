Ext.define('MyApp.view.calculadora.Calculadora', {
    extend: 'Ext.panel.Panel',
    xtype: 'calculadora',

    controller: 'calculadora',
    background: 'blue',

    items: [
        {
            title: 'Calculadora'
        },
        {
            xtype: 'numberfield', // permite solo numeros en el imput
            label: ' Operando 1',
            reference: 'Operando1',
            width: 200,
            margin: '0 0 0 15',
            
        },
        {
            xtype: 'combobox',
            label: 'Operacion',
            queryMode: 'local',
            displayField: 'operacion',
            reference: 'operacion',
            valueField: 'abbr',
            editable: false,
            width: 200,
            margin: '0 0 0 15',
            itemTpl: '<span role="option" class="x-boundlist-item">{abbr}</span>',

              
            displayTpl: '{abbr}',

            store: [
                { abbr: '+', name: 'suma' },
                { abbr: '-', name: 'resta' },
                { abbr: 'x', name: 'multiplicacion' },
                {abbr: '/', name: 'division' }
            ]
        },
        {
            xtype: 'numberfield',
            label: ' Operando 2',
            imputType: 'Number',
            reference: 'Operando2',
            width: 200,
            margin: '0 0 0 15'
        },
        {
            text: 'calcular',
            xtype: 'button',
            handler: 'calcular'
        },
        {
            xtype: 'label',
            bold: 'negrita', 
            html: '<b> Resultado =  </b>',
            reference: 'Resultado',
            width: 200,
            margin: '0 0 0 15'
        }
    ]
});