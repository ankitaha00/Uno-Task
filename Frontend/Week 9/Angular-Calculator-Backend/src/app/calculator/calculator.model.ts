export class CalculatorModel {

    functionButtons: { sign: string, value: string, type: string }[] = [
        { sign: 'AC', value: 'AC', type: 'FUNCTION' },
        { sign: '+/-', value: '+/-', type: 'FUNCTION' },
        { sign: 'C', value: 'C', type: 'FUNCTION' }
    ]

    numericButtons: { sign: string, value: string, type: string }[] = [
        { sign: '7', value: '7', type: 'NUMERIC' },
        { sign: '8', value: '8', type: 'NUMERIC' },
        { sign: '9', value: '9', type: 'NUMERIC' },
        { sign: '4', value: '4', type: 'NUMERIC' },
        { sign: '5', value: '5', type: 'NUMERIC' },
        { sign: '6', value: '6', type: 'NUMERIC' },
        { sign: '1', value: '1', type: 'NUMERIC' },
        { sign: '2', value: '2', type: 'NUMERIC' },
        { sign: '3', value: '3', type: 'NUMERIC' },
        { sign: '.', value: '.', type: 'NUMERIC' },
        { sign: '0', value: '0', type: 'NUMERIC' }
    ]

    operationButtons: { sign: string, value: string, type: string }[] = [
        { sign: '+', value: 'Add', type: 'OPERATION' },
        { sign: '-', value: 'Subtract', type: 'OPERATION' },
        { sign: '*', value: 'Multiply', type: 'OPERATION' },
        { sign: '/', value: 'Divide', type: 'OPERATION' },
        { sign: '=', value: 'Equals', type: 'OPERATION' }
    ]

}
