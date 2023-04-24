import { multiplica } from "./methods/multiplica.js"
import { soma } from "./methods/soma.js"
import { subtrai } from "./methods/subtrai.js"

import {soma as soma2} from "./functions/soma.js"
import {multiplica as multiplica2} from "./functions/multiplica.js"
import {subtrai as subtrai2} from "./functions/subtrai.js"


export class MyMath {
    soma = soma
    subtrai = subtrai
    multiplica = multiplica
}


export const operations = {
    soma2,
    multiplica2,
    subtrai2
}


export default operations
