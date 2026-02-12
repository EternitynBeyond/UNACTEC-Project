
const employees = {
  1: {
    name: "Juan Pérez",
    avgCallTime: "5 min 30 sec",
    customerSatisfaction: "92%",
    qualityAssurance: "95%"
  },
  2: {
    name: "Ana López",
    avgCallTime: "4 min 50 sec",
    customerSatisfaction: "97%",
    qualityAssurance: "98%"
  }
};


const select = document.getElementById("employeeSelect");
const avgCallTime = document.getElementById("avgCallTime");
const customerSatisfaction = document.getElementById("customerSatisfaction");
const qualityAssurance = document.getElementById("qualityAssurance");


function updateDashboard(employeeId) {
  const data = employees[employeeId];

  avgCallTime.textContent = data.avgCallTime;
  customerSatisfaction.textContent = data.customerSatisfaction;
  qualityAssurance.textContent = data.qualityAssurance;
}


select.addEventListener("change", (e) => {
  updateDashboard(e.target.value);
});


updateDashboard(select.value);
