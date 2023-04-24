import { multiplica } from "./methods/multiplica.js"
import { soma } from "./methods/soma.js"
import { subtrai } from "./methods/subtrai.js"


class MyMath {
    soma = soma
    subtrai = subtrai
    multiplica = multiplica
}


export default new MyMath
