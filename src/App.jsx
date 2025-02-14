import { useState } from "react"
import { useEffect } from "react"
import keycloak from "./keycloak"
import ChangePassword from "./change-password"
import FormUserFieldPlan from "./form-user-field-plan"
import FormWeekReport from "./form-week-report"
import FormDailyReport from "./form-daily-report"
import FormDailyRouting from "./form-daily-routing"

const url = "http://localhost:8000"

async function fetchWeeklyField(body) {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }
  const response = await fetch(`${url}/weekly-plan/user`, option)
  const data = await response.json()
  return data
}

async function fetchWeekReportAllUser(body) {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }

  const response = await fetch(`${url}/weekly-plan/result`, option)
  const data = await response.json()
  return data
}

async function fetchDailyReportUser(body) {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }

  const response = await fetch(`${url}/daily-plan/statistics`, option)
  const data = await response.json()
  return data
}

async function fetchDailyRounting(body) {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }

  const response = await fetch(`${url}/weekly-plan/daily-routing`, option)
  const data = await response.json()
  return data
}

function App() {

  const [weeklyFieldPlan, setWeeklyFieldPlan] = useState()
  const [weekReportAllUser, setWeekReportAllUser] = useState()
  const [dailyReportUser, setDailyReportUser] = useState()
  const [dailyRouting, setDailyRouting] = useState()

  useEffect(() => {
    fetchWeeklyField({
      "assignee": "longtv",
      "week": 1,
      "month": 12,
      "year": 2024
  }).then(data => setWeeklyFieldPlan(data))

  fetchWeekReportAllUser({
    "week": 1,
    "month": 2,
    "year": 2024
  }).then(data => setWeekReportAllUser(data))

  fetchDailyReportUser({
    "assignee": "lontv",
    "fromDate": "01-12-2024",
    "toDate": "31-12-2024"
  }).then(data => setDailyReportUser(data))

  fetchDailyRounting({
    "weekId": "123456789"
  }).then(data => setDailyRouting(data))
  }, [])

  return <div>
    <div style={{fontSize:'20px', fontWeight: '600'}}>Thông tin weekly plan</div>
    <FormUserFieldPlan onSubmit={(data) => {fetchWeeklyField(data).then(data => setWeeklyFieldPlan(data))}}/>
    <div>{JSON.stringify(weeklyFieldPlan)}</div>

    <div style={{fontSize:'20px', fontWeight: '600'}}>Thông tin weekly report</div>
    <FormWeekReport onSubmit={(data) => {fetchWeekReportAllUser(data).then(data => setWeekReportAllUser(data))}}/>
    <div>{JSON.stringify(weekReportAllUser)}</div>

    <div style={{fontSize:'20px', fontWeight: '600'}}>Thông tin daily report</div>
    <FormDailyReport onSubmit={(data) => {fetchDailyReportUser(data).then(data => setDailyReportUser(data))}}/>
    <div>{JSON.stringify(dailyReportUser)}</div>

    <div style={{fontSize:'20px', fontWeight: '600'}}>Thông tin daily rounting</div>
    <FormDailyRouting onSubmit={(data) => {fetchDailyRounting(data).then(data => setDailyRouting(data))}}/>
    <div>{JSON.stringify(dailyRouting)}</div>
  </div>
}

// function App () {
//   const [auth, setAuth] = useState(false)

//   useEffect(() => {
//     keycloak.init({ onLoad: 'login-required' }).then(res => setAuth(res))
//     console.log(keycloak.token)
//   }, [])

//   if (auth) {
//     return <div style={{width: '100%'}}>
//     <div style={{display: 'flex', width: '100%'}}>
//       <div style={{flexGrow: '1'}}>Welcome to my app</div>
//       <button onClick={() => keycloak.logout()}>logout</button>
//       <button onClick={event =>  {window.location.href='http://localhost:8080/realms/test/login-actions/reset-credentials'}}>update password</button>
//     </div>
//     <ChangePassword/>
//   </div>
//   }
  
//   return <div>Loading...</div>
// }

export default App
