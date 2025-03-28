document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("see");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let value = button.value;

            if (value === "AC") {
                display.value = "";
            } else if (value === "DEL") {
                display.value = display.value.toString().slice(0, -1);
            } else if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else {
                display.value += value;
            }
        });
    });
});
