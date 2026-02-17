document.addEventListener("DOMContentLoaded", () => {

  /* ================= AUTH PROTECTION ================= */

  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
  }

  /* ================= SIDEBAR NAVIGATION ================= */

  const navButtons = document.querySelectorAll(".nav-btn");
  const selectContainer = document.getElementById("employeeSelectContainer");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      const sectionId = btn.getAttribute("data-section");

      if (sectionId === "employees") {
        selectContainer?.classList.add("hidden");
      } else {
        selectContainer?.classList.remove("hidden");
      }

      document.querySelectorAll(".section").forEach(section => {
        section.classList.add("hidden");
      });

      document.getElementById(sectionId).classList.remove("hidden");

      navButtons.forEach(b => {
        b.classList.remove("text-blue-400", "font-bold");
      });

      btn.classList.add("text-blue-400", "font-bold");
    });
  });

  /* ================= DASHBOARD DATA ================= */

  const employeeData = {
    1: {
      name: "Juan Pérez",
      metrics: {
        "2025-01": {
          avgCallTime: "5 min 30 sec",
          customerSatisfaction: "92%",
          qualityAssurance: "95%"
        }
      }
    },
    2: {
      name: "Ana López",
      metrics: {
        "2025-01": {
          avgCallTime: "4 min 50 sec",
          customerSatisfaction: "97%",
          qualityAssurance: "98%"
        }
      }
    }
  };

  const select = document.getElementById("employeeSelect");
  const monthSelect = document.getElementById("monthSelect");
  const avgCallTime = document.getElementById("avgCallTime");
  const customerSatisfaction = document.getElementById("customerSatisfaction");
  const qualityAssurance = document.getElementById("qualityAssurance");

  function updateDashboard(employeeId, month) {
    const data = employeeData[employeeId];
    if (!data) return;

    const monthData = data.metrics[month];
    if (!monthData) return;

    avgCallTime.textContent = monthData.avgCallTime;
    customerSatisfaction.textContent = monthData.customerSatisfaction;
    qualityAssurance.textContent = monthData.qualityAssurance;
  }

  if (select && monthSelect) {
    select.addEventListener("change", () => {
      updateDashboard(select.value, monthSelect.value);
    });

    monthSelect.addEventListener("change", () => {
      updateDashboard(select.value, monthSelect.value);
    });

    updateDashboard(select.value, monthSelect.value);
  }

  /* ================= ADD MONTHLY METRICS ================= */

  document.getElementById("addMetricBtn")?.addEventListener("click", () => {

    const empId = select.value;
    const month = document.getElementById("metricMonth").value;
    const callTime = document.getElementById("metricCallTime").value;
    const csat = document.getElementById("metricCSAT").value;
    const qa = document.getElementById("metricQA").value;

    if (!month || !callTime || !csat || !qa) {
      alert("Complete all fields");
      return;
    }

    employeeData[empId].metrics[month] = {
      avgCallTime: callTime,
      customerSatisfaction: csat,
      qualityAssurance: qa
    };

    if (!monthSelect.querySelector(`option[value="${month}"]`)) {
      const option = document.createElement("option");
      option.value = month;
      option.textContent = month;
      monthSelect.appendChild(option);
    }

    monthSelect.value = month;

    updateDashboard(empId, month);
  });

  /* ================= EMPLOYEE TABLE ================= */

  let employees = [
    { name: "Juan Pérez", department: "Sales", status: "Active" },
    { name: "Ana López", department: "Support", status: "Active" },
    { name: "Carlos Gómez", department: "QA", status: "On Leave" }
  ];

  const table = document.getElementById("employeeTable");

  function renderEmployees() {
    if (!table) return;

    table.innerHTML = "";

    employees.forEach((emp, index) => {
      const row = `
        <tr class="border-b border-gray-700">
          <td class="py-2">${emp.name}</td>
          <td>${emp.department}</td>
          <td class="${emp.status === "Active" ? "text-green-400" : "text-yellow-400"}">
            ${emp.status}
          </td>
          <td>
            <button data-index="${index}" 
              class="delete-btn bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
              Delete
            </button>
          </td>
        </tr>
      `;
      table.innerHTML += row;
    });

    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        employees.splice(index, 1);
        renderEmployees();
      });
    });
  }

  document.getElementById("addEmployeeBtn")?.addEventListener("click", () => {

    const name = document.getElementById("newName").value.trim();
    const department = document.getElementById("newDepartment").value.trim();

    if (!name || !department) {
      alert("Please fill all fields");
      return;
    }

    employees.push({
      name,
      department,
      status: "Active"
    });

    document.getElementById("newName").value = "";
    document.getElementById("newDepartment").value = "";

    renderEmployees();
  });

  renderEmployees();

  /* ================= LOGOUT ================= */

  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
  });

});
