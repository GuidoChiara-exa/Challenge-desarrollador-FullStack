Ext.define('MyApp.view.historial.Historial', {
    extend: 'Ext.panel.Panel',
    xtype: 'historial',

    controller: 'historial',

    items: [
        
        {
            text: 'Reset',
            xtype: 'button',
            handler: 'reset'
        },
        {
            xtype: 'mainlist'
        }
    ]

    
});