# imun-app
   <!DOCTYPE html>
   <html lang="id">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Aplikasi SIMPUS Sederhana</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <div class="container">
           <h1>Daftar Pasien</h1>
           <form id="patientForm">
               <input type="text" id="patientName" placeholder="Nama Pasien" required>
               <button type="submit">Tambah Pasien</button>
           </form>
           <ul id="patientList"></ul>
       </div>
       <script src="script.js"></script>
   </body>
   </html>
      body {
       font-family: Arial, sans-serif;
       background-color: #f4f4f4;
       margin: 0;
       padding: 20px;
   }

   .container {
       max-width: 600px;
       margin: auto;
       background: white;
       padding: 20px;
       border-radius: 5px;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }

   h1 {
       text-align: center;
   }

   form {
       display: flex;
       justify-content: space-between;
   }

   input[type="text"] {
       flex: 1;
       padding: 10px;
       margin-right: 10px;
   }

   button {
       padding: 10px 15px;
   }
      document.getElementById('patientForm').addEventListener('submit', function(e) {
       e.preventDefault();
       
       const patientName = document.getElementById('patientName').value;
       const patientList = document.getElementById('patientList');

       const li = document.createElement('li');
       li.textContent = patientName;
       patientList.appendChild(li);

       document.getElementById('patientName').value = '';
   });
   
