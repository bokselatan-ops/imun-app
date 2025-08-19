<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aplikasi Imunisasi</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">

  <!-- Login -->
  <div id="login-section" class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
    <input id="username" type="text" placeholder="Username" class="w-full p-2 border rounded mb-3">
    <input id="password" type="password" placeholder="Password" class="w-full p-2 border rounded mb-3">
    <button onclick="login()" class="w-full bg-blue-500 text-white p-2 rounded">Masuk</button>
    <p id="login-error" class="text-red-500 text-center mt-3 hide">Username atau password salah</p>
  </div>

  <!-- Dashboard -->
  <div id="dashboard-section" class="hidden w-full p-8">
    <h2 class="text-xl font-bold mb-4">Dashboard</h2>
    <button onclick="logout()" class="mb-4 bg-red-500 text-white px-3 py-1 rounded">Logout</button>

    <h3 class="text-lg font-semibold">Data Imunisasi</h3>
    <button onclick="showFormImunisasi()" class="bg-green-500 text-white px-3 py-1 rounded mb-3">+ Tambah</button>
    <table class="w-full bg-white rounded shadow">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2">No</th>
          <th class="p-2">Nama Anak</th>
          <th class="p-2">Jenis Imunisasi</th>
          <th class="p-2">Tanggal</th>
          <th class="p-2">Aksi</th>
        </tr>
      </thead>
      <tbody id="imunisasi-table" class="text-center"></tbody>
    </table>
  </div>

  <!-- Form Imunisasi -->
  <div id="form-section" class="hidden max-w-md w-full bg-white p-8 rounded-lg shadow-md">
    <h3 class="text-xl font-bold mb-4">Tambah Imunisasi</h3>
    <input id="nama-anak" type="text" placeholder="Nama Anak" class="w-full p-2 border rounded mb-3">
    <input id="jenis-imunisasi" type="text" placeholder="Jenis Imunisasi" class="w-full p-2 border rounded mb-3">
    <input id="tgl-imunisasi" type="date" class="w-full p-2 border rounded mb-3">
    <button onclick="simpanI
