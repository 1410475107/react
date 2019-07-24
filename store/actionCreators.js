import {DEL_STUDENT, ADD_STUDENT} from './actionTypes';
export const ADD_STUDENT_CREATOR = (value)=>{
    return {
        type:ADD_STUDENT,
        value
    }
}

export const DEL_STUDENT_CREATOR = (value)=>{
    return {
        type:DEL_STUDENT,
        value
    }
}