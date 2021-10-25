import { types } from "./actionTypes";
import { call, takeEvery} from "@redux-saga/core/effects";

const addNoteToDB = async(url, payload) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
      payload
    )

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    const response = await fetch(url, requestOptions)
    .then(res => res.json())
    .catch(e => console.warn("getNoteList", e));
    return response;   
}

export function* noteItemWatcher() {
    yield takeEvery(types.ADD_NOTE_SAGA, noteItemWorker)
}

function* noteItemWorker({payload}) {
    const result = yield call(addNoteToDB, `http://localhost:5000/note`, payload);
    // yield put(setInfoData(result));
}