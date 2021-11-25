import {ActionType} from '../action-types/index'
// type Action = {
//     type:string,
//     payload?:number
// }

interface DepositAction {
    type: ActionType.DEPOSIT
    payload:number
}
interface WithdrawAction {
    type: ActionType.WITHDREW
    payload:number
}
interface BankruptAction {
    type: ActionType.BANKRUPT
}




export type Action = DepositAction | WithdrawAction | BankruptAction