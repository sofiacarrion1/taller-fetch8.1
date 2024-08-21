// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  
  container.innerHTML = '';

  // El for itera sobre los elementos del array
    for (const item of dataArray) {
      container.innerHTML += `
        <div class="list-item">
          <h5>${item.name} ${item.lastname}</h5>
          <p>Edad: ${item.age}</p>
        </div>`;
    }
  }

// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData
fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    const students = data.students;
    showData(students); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

