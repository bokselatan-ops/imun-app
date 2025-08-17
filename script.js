   document.getElementById('patientForm').addEventListener('submit', function(e) {
       e.preventDefault();
       
       const patientName = document.getElementById('patientName').value;
       const patientList = document.getElementById('patientList');

       const li = document.createElement('li');
       li.textContent = patientName;
       patientList.appendChild(li);

       document.getElementById('patientName').value = '';
   });
   
