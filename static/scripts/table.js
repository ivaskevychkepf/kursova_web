// Локальні дані — можна редагувати як потрібно
const feeStructure = [
    {
      program: "Підготовча програма",
      ageGroup: "3–4 роки",
      annualTuition: "1500",
      registrationFee: "100",
      activityFee: "80"
    },
    {
      program: "Початкова школа",
      ageGroup: "5–6 років",
      annualTuition: "1800",
      registrationFee: "120",
      activityFee: "90"
    },
    {
      program: "Середня школа",
      ageGroup: "7–9 років",
      annualTuition: "2000",
      registrationFee: "150",
      activityFee: "100"
    },

  ];
  
  const additionalServices = [
    { service: "Харчування", cost: "200 / рік" },
    { service: "Транспорт", cost: "300 / рік" },
    { service: "Подовжений день", cost: "150 / рік" },
  ];
  
  // Функція рендеру основної таблиці
  function renderFeeStructure() {
    const tableBody = document
      .getElementById("fee_table")
      .querySelector("tbody");
  
    feeStructure.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.program}</td>
        <td>${item.ageGroup}</td>
        <td>${item.annualTuition}</td>
        <td>${item.registrationFee}</td>
        <td>${item.activityFee}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Функція рендеру додаткових послуг
  function renderAdditionalServices() {
    const tableBody = document
      .getElementsByClassName("add-services")[0]
      .querySelector("tbody");
  
    additionalServices.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.service}</td>
        <td>${item.cost}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Старт рендеру
  function initTables() {
    renderFeeStructure();
    renderAdditionalServices();
  }
  
  document.addEventListener("DOMContentLoaded", initTables);
  