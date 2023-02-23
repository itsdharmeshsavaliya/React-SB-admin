import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import ecommerceSaga from "./e-commerce/saga"
import calendarSaga from "./calendar/saga"
import chatSaga from "./chat/saga"
import cryptoSaga from "./crypto/saga"
import invoiceSaga from "./invoices/saga"
import projectsSaga from "./projects/saga"
import mailsSaga from "./mails/saga"
import tasksSaga from "./tasks/saga"
import contactsSaga from "./contacts/saga"
import technologySaga from "./technology/saga"
import careerSaga from "./career/saga"
import careerformsaga from "./careerform/saga"
import futuresaga from "./future/saga"
import talentfaqsaga from "./talentfaq/saga"

export default function* rootSaga() {
  yield all([
    //public
    AccountSaga(),
    fork(AuthSaga),
    ProfileSaga(),
    ForgetSaga(),
    LayoutSaga(),
    fork(ecommerceSaga),
    fork(calendarSaga),
    fork(chatSaga),
    fork(cryptoSaga),
    fork(invoiceSaga),
    fork(projectsSaga),
    fork(mailsSaga),
    fork(tasksSaga),
    fork(contactsSaga),
    fork(technologySaga),
    fork(careerSaga),
    fork(careerformsaga),
    fork(futuresaga),
    fork(talentfaqsaga)
  ])
}
