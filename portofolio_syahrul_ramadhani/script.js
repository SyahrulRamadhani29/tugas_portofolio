const formKontak = document.getElementById("formKontak");

formKontak.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!formKontak.checkValidity()) {
        event.stopPropagation();
    } else {
        const modal = new bootstrap.Modal(
            document.getElementById("modalPesanBerhasil")
        );

        modal.show();
        return;
    }

    formKontak.classList.add("was-validated");
});

document.getElementById("tombolKonfirmasi")
    .addEventListener("click", function () {
        formKontak.reset();
        formKontak.classList.remove("was-validated");
    });