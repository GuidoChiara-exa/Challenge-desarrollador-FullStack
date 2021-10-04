Ext.define('MyApp.view.historial.HistorialController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.historial',

    reset: function (){
        var referencia = this.getReferences()
        var store = referencia.lista.getStore()
        store.removeAll()
    },
});