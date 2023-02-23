import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//E-commerce
import ecommerce from "./e-commerce/reducer"

//Calendar
import calendar from "./calendar/reducer"

//chat
import chat from "./chat/reducer"

//crypto
import crypto from "./crypto/reducer"

//invoices
import invoices from "./invoices/reducer"

//projects
import projects from "./projects/reducer"

//mails
import mails from "./mails/reducer"

//tasks
import tasks from "./tasks/reducer"

//contacts
import contacts from "./contacts/reducer"

//technology
import technologydata from "./technology/reducer"

//career
import careers from "./career/reducer"

//careerform
import careerforms from "./careerform/reducer"

//future
import futures from "./future/reducer"

//talentfaq
import talentfaqs from "./talentfaq/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  ecommerce,
  calendar,
  mails,
  chat,
  crypto,
  invoices,
  projects,
  tasks,
  contacts,
  technologydata,
  careers,
  careerforms,
  futures,
  talentfaqs
})

export default rootReducer
