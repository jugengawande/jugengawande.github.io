window.onscroll = function() {
    // Get the current scroll position
    var scrollPosition = document.getElementsByClassName("tests").scrollTop ;

    // Get the section elements
    var section1 = document.getElementById("project-1");
    var section2 = document.getElementById("project-2");
    var section3 = document.getElementById("project-3");
    var sectionTop = document.getElementById("overview");

    console.log(scrollPosition)
    // Check which section the user is currently viewing and update the active dot
    if (scrollPosition < section1.offsetTop) {
      document.querySelector(".sidebar a:nth-of-type(1) .dot").classList.add("active");
      document.querySelector(".sidebar a:nth-of-type(2) .dot").classList.remove("active");
      document.querySelector(".sidebar a:nth-of-type(3) .dot").classList.remove("active");
      document.querySelector(".sidebar a:nth-of-type(4) .dot").classList.remove("active");
    } else if (scrollPosition < section2.offsetTop) {
      document.querySelector(".sidebar a:nth-of-type(1) .dot").classList.remove("active");
      document.querySelector(".sidebar a:nth-of-type(2) .dot").classList.add("active");
      document.querySelector(".sidebar a:nth-of-type(3) .dot").classList.remove("active");
      document.querySelector(".sidebar a:nth-of-type(4) .dot").classList.remove("active");
    } else if (scrollPosition < section3.offsetTop) {
      document.querySelector(".sidebar a:nth-of-type(1) .dot").classList.remove("active");
      document.querySelector(".sidebar a:nth-of-type(2) .dot").classList.remove("active");
      document.querySelector(".sidebar a:nth-of-type(3) .dot").classList.add("active");
      document.querySelector(".sidebar a:nth-of-type(4) .dot").classList.remove("active");
    } else  {
        document.querySelector(".sidebar a:nth-of-type(1) .dot").classList.remove("active");
        document.querySelector(".sidebar a:nth-of-type(2) .dot").classList.remove("active");
        document.querySelector(".sidebar a:nth-of-type(3) .dot").classList.remove("active");
        document.querySelector(".sidebar a:nth-of-type(4) .dot").classList.add("active");
    }
}
