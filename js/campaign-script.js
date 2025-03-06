// document
//   .getElementById("campaignSummary")
//   .addEventListener("click", function () {
//     let platform = document.getElementById("platform").value || "";
//     let subPlatform = document.getElementById("subPlatform").value || "";
//     let category = document.getElementById("category").value || "";
//     let brand = document.getElementById("brand").value || "";
//     let subBrand = document.getElementById("subBrand").value || "";
//     let objective = document.getElementById("objective").value || "";
//     let objective1 = document.getElementById("objective1").value || "";
//     let plannedBudget = document.getElementById("plannedBudget").value || "";
//     let agency = document.getElementById("agency").value || "";

//     function formatValue(label, value) {
//       return ` ${value}`;
//     }

//     let summary = [
//       formatValue("", platform),
//       formatValue("", subPlatform),
//       formatValue("", category),
//       formatValue("", brand),
//       formatValue("", subBrand),
//       formatValue("", objective),
//       formatValue("", objective1),
//       formatValue("", plannedBudget),
//       formatValue("", agency),
//     ].join(" || "); // Yeh sab ko ek hi line me join karega

//     document.querySelector(".summary-line").textContent = summary;
//   });

document
  .getElementById("campaignSummary")
  .addEventListener("click", function () {
    let platform = document.getElementById("platform").value.trim();
    let subPlatform = document.getElementById("subPlatform").value.trim();
    let category = document.getElementById("category").value.trim();
    let brand = document.getElementById("brand").value.trim();
    let subBrand = document.getElementById("subBrand").value.trim();
    let objective = document.getElementById("objective").value.trim();
    let objective1 = document.getElementById("objective1").value.trim();
    let plannedBudget = document.getElementById("plannedBudget").value.trim();
    let agency = document.getElementById("agency").value.trim();

    // Empty values hata do
    let values = [
      platform,
      subPlatform,
      category,
      brand,
      subBrand,
      objective,
      objective1,
      plannedBudget,
      agency,
    ].filter((value) => value !== "");

    // `||` ke bina sirf values join karo
    let summary = values.join(" || ");

    document.querySelector(".summary-line").textContent = summary;
  });

document.getElementById("adsetSummary").addEventListener("click", function () {
  let platform = document.getElementById("adsetPlatform").value.trim();
  let subPlatform = document.getElementById("adsetSubPlatform").value.trim();
  let category = document.getElementById("adsetCategory").value.trim();
  let brand = document.getElementById("adsetBrand").value.trim();
  let subBrand = document.getElementById("adsetSubBrand").value.trim();
  let contentType = document.getElementById("adsetContentType").value.trim();
  let objective = document.getElementById("adsetObjective").value.trim();
  let geography = document.getElementById("adsetGeography").value.trim();
  let adType1 = document.getElementById("adsetAdType1").value.trim();
  let adType2 = document.getElementById("adsetAdType2").value.trim();
  let duration = document.getElementById("adsetDuration").value.trim();
  let bumper = document.getElementById("adsetBumper").value.trim();
  let festival = document.getElementById("adsetFestival").value.trim();
  let objective1 = document.getElementById("adsetObjective1").value.trim();
  let plannedBudget = document
    .getElementById("adsetPlannedBudget")
    .value.trim();
  let agency = document.getElementById("adsetAgency").value.trim();

  // Empty values hata do
  let values = [
    platform,
    subPlatform,
    category,
    brand,
    subBrand,
    contentType,
    objective,
    geography,
    adType1,
    adType2,
    duration,
    bumper,
    festival,
    objective1,
    plannedBudget,
    agency,
  ].filter((value) => value !== ""); // ✅ Empty values hata diye

  // Sirf valid values ko `||` se join karo
  let adsetSummary = values.join(" || ");

  document.querySelector(".summary-line2").textContent = adsetSummary;
});

document.getElementById("resetCampaign").addEventListener("click", function () {
  // Reset all input fields in the Campaign section
  document
    .querySelectorAll("#campaignSection input, #campaignSection select")
    .forEach((element) => {
      if (element.tagName === "SELECT") {
        element.selectedIndex = 0; // Reset dropdowns
      } else {
        element.value = ""; // Clear input fields
      }
    });

  // Reset the campaign summary line
  document.querySelector(".summary-line").textContent =
    "Selected Campaign Details: None";
});

document.getElementById("resetAdset").addEventListener("click", function () {
  // Reset all input fields in the Adset section
  document
    .querySelectorAll("#adsetSection input, #adsetSection select")
    .forEach((element) => {
      if (element.tagName === "SELECT") {
        element.selectedIndex = 0; // Reset dropdowns
      } else {
        element.value = ""; // Clear input fields
      }
    });

  // Reset the adset summary line
  document.querySelector(".summary-line2").textContent =
    "Selected Adset Details: None";
});

document.getElementById("resetAll").addEventListener("click", function () {
  // Reset all input and select fields in the entire form
  document.querySelectorAll("input, select").forEach((element) => {
    if (element.tagName === "SELECT") {
      element.selectedIndex = 0; // Reset dropdowns
    } else {
      element.value = ""; // Clear input fields
    }
  });

  // Reset both campaign and adset summary lines
  document.querySelector(".summary-line").textContent =
    "Selected Campaign Details: None";
  document.querySelector(".summary-line2").textContent =
    "Selected Adset Details: None";
});

// document.getElementById("autoFill").addEventListener("click", function () {
//   Mapping Campaign inputs to Adset inputs
//   const mappings = [
//     { campaign: "pastCampaigns", adset: "adsetPastCampaigns" },
//     { campaign: "fromMonth", adset: "adsetFromMonth" },
//     { campaign: "toMonth", adset: "adsetToMonth" },
//     { campaign: "platform", adset: "adsetPlatform" },
//     { campaign: "subPlatform", adset: "adsetSubPlatform" },
//     { campaign: "category", adset: "adsetCategory" },
//     { campaign: "brand", adset: "adsetBrand" },
//     { campaign: "subBrand", adset: "adsetSubBrand" },
//     { campaign: "objective", adset: "adsetObjective" },
//     { campaign: "objective1", adset: "adsetObjective1" },
//     { campaign: "plannedBudget", adset: "adsetPlannedBudget" },
//     { campaign: "agency", adset: "adsetAgency" },
//   ];

//   mappings.forEach(({ campaign, adset }) => {
//     const campaignElement = document.getElementById(campaign);
//     const adsetElement = document.getElementById(adset);

//     if (campaignElement && adsetElement) {
//       adsetElement.value = campaignElement.value;
//     }
//   });

//   alert("Adset details have been autofilled!");
// });

document.getElementById("autoFill").addEventListener("click", function () {
  // Mapping Campaign inputs to Adset inputs
  const mappings = [
    { campaign: "pastCampaigns", adset: "adsetPastCampaigns" },
    { campaign: "fromMonth", adset: "adsetFromMonth" },
    { campaign: "toMonth", adset: "adsetToMonth" },
    { campaign: "platform", adset: "adsetPlatform" },
    { campaign: "subPlatform", adset: "adsetSubPlatform" },
    { campaign: "category", adset: "adsetCategory" },
    { campaign: "brand", adset: "adsetBrand" },
    { campaign: "subBrand", adset: "adsetSubBrand" },
    { campaign: "objective", adset: "adsetObjective" },
    { campaign: "objective1", adset: "adsetObjective1" },
    { campaign: "plannedBudget", adset: "adsetPlannedBudget" },
    { campaign: "agency", adset: "adsetAgency" },
  ];

  mappings.forEach(({ campaign, adset }) => {
    const campaignElement = document.getElementById(campaign);
    const adsetElement = document.getElementById(adset);

    if (campaignElement && adsetElement) {
      adsetElement.value = campaignElement.value;
      adsetElement.dispatchEvent(new Event("change")); // 🔥 Trigger change event
    }
  });
});

document.getElementById("saveData").addEventListener("click", function () {
  let formData = {};
  let isFormValid = true; // Flag to track if all required fields are filled

  // Function to get input values and check if empty
  function getValue(id) {
    let element = document.getElementById(id);
    if (element) {
      let value = element.value.trim();
      if (value === "") {
        isFormValid = false; // Mark form as invalid if any field is empty
      }
      return value;
    }
    return "";
  }

  // Campaign Level Data
  formData.pastCampaigns = getValue("pastCampaigns");
  formData.month = getValue("Month");
  formData.fromMonth = getValue("fromMonth");
  formData.toMonth = getValue("toMonth");
  formData.platform = getValue("platform");
  formData.subPlatform = getValue("subPlatform");
  formData.category = getValue("category");
  formData.brand = getValue("brand");
  formData.subBrand = getValue("subBrand");
  formData.objective = getValue("objective");
  formData.objective1 = getValue("objective1");
  formData.plannedBudget = getValue("plannedBudget");
  formData.agency = getValue("agency");

  // Adset Level Data
  formData.adsetPastCampaigns = getValue("adsetPastCampaigns");
  formData.adsetFromMonth = getValue("adsetFromMonth");
  formData.adsetToMonth = getValue("adsetToMonth");
  formData.adsetPlatform = getValue("adsetPlatform");
  formData.adsetSubPlatform = getValue("adsetSubPlatform");
  formData.adsetCategory = getValue("adsetCategory");
  formData.adsetBrand = getValue("adsetBrand");
  formData.adsetSubBrand = getValue("adsetSubBrand");
  formData.adsetContentType = getValue("adsetContentType");
  formData.adsetObjective = getValue("adsetObjective");
  formData.adsetGeography = getValue("adsetGeography");
  formData.adsetAdType1 = getValue("adsetAdType1");
  formData.adsetAdType2 = getValue("adsetAdType2");
  formData.adsetDuration = getValue("adsetDuration");
  formData.adsetBumper = getValue("adsetBumper");
  formData.adsetFestival = getValue("adsetFestival");
  formData.adsetObjective1 = getValue("adsetObjective1");
  formData.adsetPlannedBudget = getValue("adsetPlannedBudget");
  formData.adsetAgency = getValue("adsetAgency");

  if (isFormValid) {
    console.log("Form Data:", formData);
    alert("All details Saved Successfully!");
  }
  // else {
  //   alert("Please fill all required fields before saving.");
  // }
});

// #######################

document.addEventListener("DOMContentLoaded", function () {
  // Mapping for dependent dropdowns
  const subPlatformOptions = {
    Instagram: ["Reels", "Stories", "Feed"],
    Facebook: ["Marketplace", "Groups", "Feed"],
    Google: ["Search", "Display", "YouTube"],
  };

  const brandOptions = {
    Category1: ["Saffola", "Fortune", "Amul"],
    Category2: ["Garnier", "L'Oréal", "Godrej"],
    Category3: ["Livon", "Streax", "L'Oréal"],
    Category4: ["Head & Shoulders", "Dove", "Sunsilk"],
    Category5: ["Dettol", "Lifebuoy", "Savlon"],
  };

  const subBrandOptions = {
    Saffola: ["Saffola Gold", "Saffola Active", "Saffola Tasty"],
    Fortune: ["Fortune Sunlite", "Fortune Kachi Ghani"],
    Amul: ["Amul Butter", "Amul Cheese"],
    Garnier: ["Garnier Black", "Garnier Brown"],
    "L'Oréal": ["L'Oréal Excellence", "L'Oréal Casting Creme"],
    Godrej: ["Godrej Expert", "Godrej Nupur"],
    Livon: ["Livon Serum", "Livon Hair Gain"],
    Streax: ["Streax Shine", "Streax Damage Control"],
    "Head & Shoulders": ["Anti-Dandruff", "Smooth & Silky"],
    Dove: ["Dove Intense Repair", "Dove Daily Shine"],
    Sunsilk: ["Sunsilk Thick & Long", "Sunsilk Black Shine"],
    Dettol: ["Dettol Original", "Dettol Aloe Vera"],
    Lifebuoy: ["Lifebuoy Total 10", "Lifebuoy Lemon Fresh"],
    Savlon: ["Savlon Herbal", "Savlon Moisture Shield"],
  };

  function updateDropdown(selectElement, options) {
    selectElement.innerHTML = "<option value=''></option>"; // Reset
    options.forEach((option) => {
      let opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      selectElement.appendChild(opt);
    });
  }

  function setupDropdowns(
    platformId,
    subPlatformId,
    categoryId,
    brandId,
    subBrandId
  ) {
    // Platform -> Sub Platform
    document.getElementById(platformId).addEventListener("change", function () {
      let subPlatformSelect = document.getElementById(subPlatformId);
      let selectedPlatform = this.value;
      subPlatformSelect.innerHTML = "<option value=''></option>"; // Reset
      if (selectedPlatform in subPlatformOptions) {
        updateDropdown(subPlatformSelect, subPlatformOptions[selectedPlatform]);
      }
    });

    // Category -> Brand
    document.getElementById(categoryId).addEventListener("change", function () {
      let brandSelect = document.getElementById(brandId);
      let subBrandSelect = document.getElementById(subBrandId);
      let selectedCategory = this.value;

      brandSelect.innerHTML = "<option value=''></option>"; // Reset brand
      subBrandSelect.innerHTML = "<option value=''></option>"; // Reset sub-brand

      if (selectedCategory in brandOptions) {
        updateDropdown(brandSelect, brandOptions[selectedCategory]);
      }
    });

    // Brand -> Sub Brand
    document.getElementById(brandId).addEventListener("change", function () {
      let subBrandSelect = document.getElementById(subBrandId);
      let selectedBrand = this.value;

      subBrandSelect.innerHTML = "<option value=''></option>"; // Reset

      if (selectedBrand in subBrandOptions) {
        updateDropdown(subBrandSelect, subBrandOptions[selectedBrand]);
      }
    });
  }

  // Setup for both sections
  setupDropdowns("platform", "subPlatform", "category", "brand", "subBrand");
  setupDropdowns(
    "adsetPlatform",
    "adsetSubPlatform",
    "adsetCategory",
    "adsetBrand",
    "adsetSubBrand"
  );
});
