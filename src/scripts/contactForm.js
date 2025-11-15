export function initContactForm() {
  const form = document.getElementById("form");

  if (!form) return;

  function validateInput(input) {
    const errorEl = input.parentElement.querySelector(".form__input-error");
    const value = input.value.trim();

    if (value === "") {
      errorEl.textContent = "This field is required.";
      input.classList.add("input-error");
      return false;
    }

    errorEl.textContent = "";
    input.classList.remove("input-error");
    return true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formName = document.getElementById("name");
    const formSubject = document.getElementById("subject");
    const formMessage = document.getElementById("message");

    const isNameValid = validateInput(formName);
    const isSubjectValid = validateInput(formSubject);
    const isMessageValid = validateInput(formMessage);

    if (!isNameValid || !isSubjectValid || !isMessageValid) {
      return;
    }

    form.submit();
  });
}
