function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signUpForm = document.querySelector("#signUp");

    document.querySelector("#linkSignUp").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        signUpForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogIn").addEventListener("click", e => {
        e.preventDefault();
        signUpForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 10)
            {
                setInputError(inputElement, "Username must be at least 10 characters or more in length")
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});