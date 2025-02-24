import { useState } from "react";
import { useEffect } from "react";
import keycloak from "./keycloak";
import ChangePassword from "./change-password";
import FormUserFieldPlan from "./form-user-field-plan";
import FormWeekReport from "./form-week-report";
import FormDailyReport from "./form-daily-report";
import FormDailyRouting from "./form-daily-routing";
import { InputComponent } from "./components/input";
import { Button } from "./components/button";
import { ArrayInput } from "./components/arrayInput";
import { PollItem } from "./components/pollItem";

// FIELD_PLAN ================================================

const url = "http://localhost:8000/api/v1";

async function fetchWeeklyField(body) {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${url}/weekly-plan/user`, option);
  const data = await response.json();
  return data;
}

async function fetchWeekReportAllUser(body) {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(`${url}/weekly-plan/result`, option);
  const data = await response.json();
  return data;
}

async function fetchDailyReportUser(body) {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(`${url}/daily-plan/statistics`, option);
  const data = await response.json();
  return data;
}

async function fetchDailyRounting(body) {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(`${url}/weekly-plan/daily-routing`, option);
  const data = await response.json();
  return data;
}

function App() {
  const [weeklyFieldPlan, setWeeklyFieldPlan] = useState();
  const [weekReportAllUser, setWeekReportAllUser] = useState();
  const [dailyReportUser, setDailyReportUser] = useState();
  const [dailyRouting, setDailyRouting] = useState();

  useEffect(() => {
    fetchWeeklyField({
      assignee: "longtv",
      week: 1,
      month: 12,
      year: 2024,
    }).then((data) => setWeeklyFieldPlan(data));

    fetchWeekReportAllUser({
      week: 1,
      month: 2,
      year: 2024,
    }).then((data) => setWeekReportAllUser(data));

    fetchDailyReportUser({
      assignee: "lontv",
      fromDate: "01-12-2024",
      toDate: "31-12-2024",
    }).then((data) => setDailyReportUser(data));

    fetchDailyRounting({
      weekId: "123456789",
    }).then((data) => setDailyRouting(data));
  }, []);

  return (
    <div>
      <div style={{ fontSize: "20px", fontWeight: "600" }}>
        Thông tin weekly plan
      </div>
      <FormUserFieldPlan
        onSubmit={(data) => {
          fetchWeeklyField(data).then((data) => setWeeklyFieldPlan(data));
        }}
      />
      <div>{JSON.stringify(weeklyFieldPlan)}</div>

      <div style={{ fontSize: "20px", fontWeight: "600" }}>
        Thông tin weekly report
      </div>
      <FormWeekReport
        onSubmit={(data) => {
          fetchWeekReportAllUser(data).then((data) =>
            setWeekReportAllUser(data)
          );
        }}
      />
      <div>{JSON.stringify(weekReportAllUser)}</div>

      <div style={{ fontSize: "20px", fontWeight: "600" }}>
        Thông tin daily report
      </div>
      <FormDailyReport
        onSubmit={(data) => {
          fetchDailyReportUser(data).then((data) => setDailyReportUser(data));
        }}
      />
      <div>{JSON.stringify(dailyReportUser)}</div>

      <div style={{ fontSize: "20px", fontWeight: "600" }}>
        Thông tin daily rounting
      </div>
      <FormDailyRouting
        onSubmit={(data) => {
          fetchDailyRounting(data).then((data) => setDailyRouting(data));
        }}
      />
      <div>{JSON.stringify(dailyRouting)}</div>
    </div>
  );
}

// KEYCLOAK ======================================

// async function updatePassword() {
//   const option = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJiSHBndFhjNnBaR0RiWm9JejY4dXNsWnQ1V2RoalRIMmhkWDFaMG9mc3hjIn0.eyJleHAiOjE3Mzk3NzI2NjYsImlhdCI6MTczOTc3MjM2NiwiYXV0aF90aW1lIjoxNzM5NzcxOTgwLCJqdGkiOiIwZjczYzM2NC01N2ZlLTRhM2MtODNlNy1hMWQzMjI0MDJmNWUiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL3Rlc3QiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMDJhOTM0NjktODIxNS00OGZmLTg0OWMtOWE0MDc4ZDVhNDViIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibGluaHQtdGVzdCIsInNpZCI6IjU2MzRiOTUzLTdiMzUtNDAxMi05MTBhLTA1YWJlNWIxODRkZiIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy10ZXN0Iiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJUcmluaCBUdWFuIExpbmgiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJsaW5odHQiLCJnaXZlbl9uYW1lIjoiVHJpbmgiLCJsb2NhbGUiOiJ2aSIsImZhbWlseV9uYW1lIjoiVHVhbiBMaW5oIiwiZW1haWwiOiJsaW5odHRAbmV4dXN0aS52biJ9.bkjR5Xx7PuZAwPCZU6iphs3_YZf0dpa_eXfNVEEeOGgueLweqDOdGMLn6Cn7gY-dlmt4QlQg7OY8nGzMC0abJMtbt9VQsarubYtIwRlX6YEzJ9HeKHQCylmiuNDC5S9G4XzmtUg4MkkmmKoskbjPas7AfIxr5p2Xci9FdsjD0r6HtO8KSbnPyA9yJBTuHhw9LRZAQuMimMuYCFaONPbyUTeQvdkcxroB-bL9s9gdSXkXz-YOytIv0H3uotcQownts2oNaOAu0TwInQoIHxek5tAVyoYiHGeF1Y4GdkmuFAp1deUJw6FX75OjrxiF4IBnaz15kxS6C-dL6RIi4gFflQ`,
//     },
//     body: JSON.stringify({
//       type: "password",
//       value: "Hanoi01@",
//       temporary: false,
//     }),
//   };

//   const response = await fetch(
//     "http://locahost:8080/admin/realms/user/linhtt/reset-password",
//     option
//   );
// }

// function App() {
//   const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     keycloak.init({ onLoad: "login-required" }).then((res) => setAuth(res));
//     console.log(keycloak.token);
//   }, []);

//   if (auth) {
//     return (
//       <div style={{ width: "100%" }}>
//         <div style={{ display: "flex", width: "100%" }}>
//           <div style={{ flexGrow: "1" }}>Welcome to my app</div>
//           <button onClick={() => keycloak.logout()}>logout</button>
//           <button
//             onClick={() => {
//               keycloak.login({ action: "UPDATE_PASSWORD" });
//             }}
//           >
//             update password
//           </button>
//         </div>
//         <ChangePassword />
//       </div>
//     );
//   }

//   return <div>Loading...</div>;
// }

// POLL APPLICATION ==============================

// const url = "http://localhost:9002";

// async function createPoll(body) {
//   const option = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   };

//   const response = await fetch(`${url}/poll/create`, option);
//   const data = await response.json();
//   return data;
// }

// async function votePoll(body) {
//   const option = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   };

//   const response = await fetch(`${url}/poll/vote`, option);
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
// }

// async function getAllPoll() {
//   const option = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const response = await fetch(`${url}/poll/get-all`, option);
//   const data = await response.json();
//   return data;
// }

// function App() {
//   const [formData, setFormData] = useState({
//     question: "",
//     options: [],
//   });

//   const [options, setOptions] = useState([
//     { voteOption: "", voteCount: 0 },
//     { voteOption: "", voteCount: 0 },
//   ]);

//   const [errorMessage, setErrorMessage] = useState("");

//   const [listPoll, setListPoll] = useState([]);

//   useEffect(() => {
//     getAllPoll().then((res) => setListPoll(res));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.question.trim() === "") {
//       setErrorMessage("Câu hỏi khảo sát không được để trống.");
//       return;
//     }
//     for (const option of options) {
//       if (option.voteOption.trim() === "") {
//         setErrorMessage("Tất cả giá trị khảo sát phải điền đầy đủ.");
//         return;
//       }
//     }
//     setErrorMessage("");
//     createPoll({ ...formData, options: options })
//       .then(() => getAllPoll())
//       .then((res) => setListPoll(res));
//   };

//   const handleAddOption = (e) => {
//     e.preventDefault();
//     setOptions((prevOptions) => [
//       ...prevOptions,
//       { voteOption: "", voteCount: 0 },
//     ]);
//   };

//   const handleVote = (id, optionIndex) => {
//     votePoll({ pollId: id, optionIndex })
//       .then(() => {
//         console.log("Vote submitted successfully.");
//         return getAllPoll();
//       })
//       .then((res) => {
//         console.log("Updated poll list:", res);
//         setListPoll(res);
//       });
//   };

//   return (
//     <div className="app">
//       <div className="text-center uppercase font-bold p-2">
//         poll application
//       </div>

//       <div className="p-2">
//         <div className="font-bold uppercase">Tạo bình chọn mới</div>
//         <form onSubmit={handleSubmit}>
//           <InputComponent
//             name="question"
//             value={formData.question}
//             onChange={handleChange}
//             placeholder="Điền câu hỏi khảo sát..."
//           />
//           <ArrayInput options={options} setOptions={setOptions} />
//           {errorMessage !== "" && (
//             <div className="text-red-500 pt-2 px-2 font-medium">
//               {errorMessage}
//             </div>
//           )}
//           <div className="flex flex-row items-center gap-x-1">
//             <Button type="button" onClick={handleAddOption}>
//               Thêm lựa chọn
//             </Button>
//             <Button type="submit">Tạo khảo sát</Button>
//           </div>
//         </form>
//       </div>

//       <div className="flex flex-col grow p-2 overflow-y-auto rounded-[5px] shadow bg-indigo-100">
//         <div className="font-bold uppercase">Danh sách bình chọn</div>
//         <div className="overflow-y-auto grow">
//           {listPoll.map((item, index) => (
//             <PollItem pollData={item} key={index} onVote={handleVote} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
