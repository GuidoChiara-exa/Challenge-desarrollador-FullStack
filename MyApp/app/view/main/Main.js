
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    reference: 'main',

    requires: [
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top',
            width: 505.5,
            maxWidth: 505.5
        
        }
    },

    tabBarPosition: 'top',

    items: [
        // 
        {
            title: 'Calculos',
            iconCls: 'x-fa fa-calculator',
            layout: 'fit',
            margin: '0 0 0 500',
            items: [{
                xtype: 'calculadora',
            }]
        },{
            title: 'Historial',
            iconCls: 'x-fa fa-clipboard-list',
            items: [{
                xtype: 'historial'
            },
            
        ]}
    ]
});
