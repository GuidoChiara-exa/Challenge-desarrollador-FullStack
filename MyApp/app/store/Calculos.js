Ext.define('MyApp.store.Calculos', {
    extend: 'Ext.data.Store',

    alias: 'store.Calculos',

    model: 'MyApp.model.Calculos',

    data:{ items: [
        {
            Operando1: '5',
            Operacion: '-',
            Operando2: '4',
            Resultado: '1'
        }
    ]}



});
