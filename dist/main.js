"use strict";
class Router {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.routes = options.routes;
    }
}
const router = new Router({
    baseUrl: '/',
    routes: [
        {
            path: '',
            name: 'root',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: {}
        },
        {
            path: '/office',
            name: 'office',
            component: {},
            children: [
                { path: '/home', component: {} }
            ]
        }
    ]
});
console.log(router);
/*
{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: {}
        },
        {
            path: '/office',
            component: {},
            children: []
        }
        */
/* type TA = {
    a: number,
    b: number,
    c?: never
}

type TC = {
    a?: never,
    b: number,
    c: number
}

type haha = TA | TC;
let a: haha = { a: 1, b: 2, c: 3 };
console.log(a); */
/*
type haha = TA & TC;
let a: haha = { a: 0, b: 1, c: 2  };
 */
/* let a: number = 1;
let b: string = '1';
let c: number = a */
/* function sum(a: number, b: number){
    return a + b;
}

console.log(sum(1, 2)); */
/* const userValueInput = document.querySelector('.user-value');

if(userValueInput instanceof HTMLInputElement){
    userValueInput.value = '100';
} */
/*
    != null
    typeof some === 'string'
    userValueInput instanceof HTMLInputElement
    'value' in userValueInput
*/
/* let a: number = 1;
let b: string = 'a';
let c: boolean = true;*/
//let d: RegExp = /.*/;
/*let e: number[] = [ 1 ]; */
/* let g: Array<number> = [ 1 ]; */
// react useState(0)
/* let counter = 1; */
/* let some = [ counter, () => counter++ ]; */
/* type ns = number | string;

 function sum(a: ns, b: ns) : number{
    if(typeof a === 'string'){
        a = parseInt(a);
    }
    
    if(typeof b === 'string'){
        b = parseInt(b);
    }

    return a + b;
}

console.log(sum(1, '2'));
/* */
/* let bn = 100n;

function useState(initial: number) : [ number, (newValue: number) => void ]{
    let value = initial;
    
    function setValue(newValue: number) : void{
        value = newValue;
    }

    return [ value, setValue ];
}

let [ counter, setCounter ] = useState(1);
console.log(counter * 2);
setCounter(1);

let nz: [ number, string, boolean ] = [ 1, '2', true ];
 */
// future... ,m lesson 2-3-4
/* function useState<T>(initial: T) : [ T, (newValue: T) => void ]{
    let value = initial;
    
    function setValue(newValue: T) : void{
        value = newValue;
    }

    return [ value, setValue ];
}

let [ counter, setCounter ] = useState(1);
let [ userName, setUserName ] = useState('Dmitry');
console.log(counter * 2);
setCounter(1); */
/* type TUser = {
    name: string,
    some?: number
}

function setUser(user: TUser) : void{

}

function updateUser(id: number, user: TUser) : void{

}
 
setUser({
    name: 's'
})

const freeState = 'free';
type TOrderState = typeof freeState | 'pending' | 'done';
let order1: TOrderState = 'free';

console.log(order1); */
/*
updateUser(1, {

}) */
/* let figures = {

} */
/* type TFigure = {
    type: 'square' | 'circle'
}

type TSquare = {
    type: 'square'
    x: number,
    y: number,
    perimeter: () => number,
    area: () => number
}

type TCircle = {
    type: 'circle',
    r: number,
    area: () => number
}

function analizeFigire(f){

} */ 
