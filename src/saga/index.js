import { noteItemWatcher } from "./noteItem";
// import { noteListWatcher } from "./noteList";
import { spawn } from "@redux-saga/core/effects";

export function* rootSaga() {
    yield spawn(noteItemWatcher);
    // yield spawn(noteListWatcher);
}