
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',
    id: 'mainlist',
    reference: 'lista',
    // 

    requires: [
        'MyApp.store.Calculos'
    ],
    
    title: 'Historial',
    store: {
        type: 'Calculos'
    },
    height: 500,
    columns: [{ 
        width: 202.75,
        text: 'Operando1',
        dataIndex: 'Operando1',
        
    }, {
        width: 202.75,
        text: 'Operacion',
        dataIndex: 'Operacion',
         
    }, { 
        width: 202.75,
        text: 'Operando2',
        dataIndex: 'Operando2',
        
    },
    { 
        width: 202.75,
        text: 'Resultado',
        dataIndex: 'Resultado',
        
    }],
    

});
