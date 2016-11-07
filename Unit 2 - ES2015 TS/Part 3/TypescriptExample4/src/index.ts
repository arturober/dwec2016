import { Promise } from "es6-promise";
import { Backend } from './backend';
import * as $ from 'jquery';

$("#button").click((event) => {
    let num1 = parseInt($("#num1").val());
    let num2 = parseInt($("#num2").val());


    let doubleProm = doubleNumber(Backend.getSum(num1, num2));

    doubleProm.then(double => {
        $("#result").val(double);
    })
});


function doubleNumber(p: Promise<number>): Promise<number> {
    return p.then(n => {
        return n * 2;
    })
}