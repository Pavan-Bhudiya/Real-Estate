document.addEventListener("DOMContentLoaded", function () {
    console.log("Home page script loaded!");
  });
  function togglesidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "250px";
    }
  }
  