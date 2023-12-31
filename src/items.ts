import { ReactModal } from "./classes/ReactModal";
import { createModal } from "./creators/createModal";

import { MIResult } from "tunangn-modal";

import {
  DEFAULT_DIALOG_NAME,
  DEFAULT_SIDE_NAME,
  DEFAULT_SNACKBAR_NAME
} from "./components/TunangnModal";

import {
  DefaultDialogReceivedData,
  DefaultSideReceivedData,
  DefaultSnackbarReceivedData
} from "./types";

// Create default Modal React Element and default open function.
const [TunangnModal, openTMI] = createModal();

/**
 * Use this function to open default __`dialog`__. You can pass data to this function.
 * @param data Assign data to modify all contents of default `Dialog`.
 */
function dialog(data: DefaultDialogReceivedData) {
  if(!ReactModal.isTunangnModalCreated) return Promise.resolve<MIResult>({ isAgree: false });
  return openTMI(DEFAULT_DIALOG_NAME, data);
}

/**
 * Use this function to open default __`side`__. You can pass data to this function.
 * @param data Assign data to modify all contents default of `Side`.
 */
function side(data: DefaultSideReceivedData) {
  if(!ReactModal.isTunangnModalCreated) return Promise.resolve<MIResult>({ isAgree: false });
  return openTMI(DEFAULT_SIDE_NAME, data);
}

/**
 * Use this function to open default __`snackbar`__. You can pass data to this function.
 * @param data Assign data to modify all contents of default `Snackbar`.
 */
function snackbar(data: DefaultSnackbarReceivedData) {
  if(!ReactModal.isTunangnModalCreated) return Promise.resolve<MIResult>({ isAgree: false });
  return openTMI(DEFAULT_SNACKBAR_NAME, data);
}

export {
  TunangnModal,
  openTMI,
  dialog,
  side,
  snackbar
}