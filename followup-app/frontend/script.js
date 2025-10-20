const API_URL = 'http://localhost:4000/api/employees';

const form = document.getElementById('employeeForm');
const list = document.getElementById('employeeList');

async function cargarEmpleados() {
  const res = await fetch(API_URL);
  const empleados = await res.json();
  list.innerHTML = empleados.map(e => `<li>${e.nombre} - ${e.cargo} (${e.puntaje})</li>`).join('');
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const cargo = document.getElementById('cargo').value;
  const puntaje = document.getElementById('puntaje').value;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, cargo, puntaje }),
  });

  form.reset();
  cargarEmpleados();
});

cargarEmpleados();
