console.log("✅ script.js cargó correctamente");

const API_URL = "https://unactec-project.onrender.com/api/employees";

const employeeSelect = document.getElementById("employeeSelect");

async function cargarEmpleados() {
  try {
    const response = await fetch(API_URL);
    const empleados = await response.json();

    console.log("Empleados desde API:", empleados);

    employeeSelect.innerHTML = `
      <option value="">Select Employee</option>
    `;

    empleados.forEach(emp => {
      const option = document.createElement("option");
      option.value = emp.id;
      option.textContent = `${emp.nombre} - ${emp.cargo}`;
      employeeSelect.appendChild(option);
    });

  } catch (error) {
    console.error("Error cargando empleados:", error);
  }
}


employeeSelect.addEventListener("change", (e) => {
  console.log("Empleado seleccionado:", e.target.value);
});

cargarEmpleados();
