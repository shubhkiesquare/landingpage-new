document.querySelectorAll(".nav-link").forEach((link) => {
  // Add hover effect (mouseenter) to show the content
  link.addEventListener("mouseenter", function () {
    // Remove background from all nav links before applying it to the current one
    document.querySelectorAll(".nav-link").forEach((nav) => {
      nav.style.backgroundColor = ""; // Reset background color for all links
      nav.style.color = ""; // Reset text color for all links
    });

    // Apply background color for the current hovered nav link (No change in background color anymore)
    this.style.backgroundColor = ""; // No background color on hover (transparent)
    this.style.color = "black"; // Set text color to white on hover

    const targetId = this.getAttribute("data-target");
    const targetContent = document.querySelector(targetId);

    // Temporarily show the corresponding tab content
    document.querySelectorAll(".tab-pane").forEach((tab) => {
      tab.style.display = "none"; // Hide all tab content
      tab.style.opacity = "0"; // Set opacity to 0 for a smooth transition
    });

    // Show the content corresponding to the hovered tab
    targetContent.style.display = "block";
    targetContent.style.opacity = "1";
  });
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

document.querySelectorAll(".toggle-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Close all open sections
    document.querySelectorAll(".toggle-content").forEach((content) => {
      content.style.display = "none";
    });
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.classList.remove("open");
    });

    // Toggle the clicked section
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector(".arrow");
    if (content.style.display === "block") {
      content.style.display = "none";
      arrow.classList.remove("open");
    } else {
      content.style.display = "block";
      arrow.classList.add("open");
    }
  });

  // Open only the first section on initial load
  if (index === 0) {
    btn.nextElementSibling.style.display = "block";
    btn.querySelector(".arrow").classList.add("open");
  } else {
    btn.nextElementSibling.style.display = "none";
    btn.querySelector(".arrow").classList.remove("open");
  }
});

// document
//   .getElementById("emailForm")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();
//     const fname = document.getElementById("firstName").value;
//     const lname = document.getElementById("lastName").value;
//     const email = document.getElementById("email").value;
//     const requestType = document.getElementById("requestType").value;
//     const comments = document.getElementById("comments").value;

//     const serviceID = "service_417wr48";
//     const templateID = "template_ttokt0s";
//     const userID = "hariharan.p@kiesquare.com";

//     try {
//       const response = await emailjs.send(
//         serviceID,
//         templateID,
//         {
//           fname,
//           lname,
//           email,
//           requestType,
//           comments,
//         },
//         userID
//       );
//       console.log("response", response);
//       alert("Email sent successfully!");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Failed to send email. Please try again.");
//     }
//   });
