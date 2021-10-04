Ext.define('MyApp.view.calculadora.CalculadoraController' , {
    extend: 'Ext.app.ViewController',
    alias: 'controller.calculadora',


    calcular: function (){
        var referencias = this.getReferences()
        var operando1 = referencias.Operando1.getValue()
        var operando2 = referencias.Operando2.getValue()
        var operacion = referencias.operacion.getValue()

        if(operacion === '+'){
            res = operando1 + operando2
        }
        if(operacion === '-'){
            res = operando1 - operando2
        }
        if(operacion === 'x'){
            res = operando1 * operando2
        }
        if(operacion === '/'){
            res = operando1 / operando2
        }
        var item={
            Operando1: operando1,
            Operacion: operacion,
            Operando2: operando2,
            Resultado: res
        }

        var store = Ext.getCmp('mainlist').getStore() //llama al componente del padre
        store.add(item)

        referencias.Resultado.setHtml('<b> Resultado = ' + res + '</b>')
    }
});