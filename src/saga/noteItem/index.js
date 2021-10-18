import { types } from "./actionTypes";

export function* noteItemWatcher() {
    // yield takeEvery(types.ADD_NOTE_SAGA, noteItemWorker)
}

function* noteItemWorker(action) { //закинкть в базу
    // const result
    // yield put(setInfoData(result));
}