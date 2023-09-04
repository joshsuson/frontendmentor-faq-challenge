const questions = document.querySelectorAll(".faq-item");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
      }
    });
    question.classList.toggle("active");
  });
});
