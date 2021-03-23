$(function () {
    const modal = $("#js-modal");
    const openBtn = $("#js-open");
    const closeBtn = $("#js-close");

    openBtn.on("click", () => {
        modal.addClass("show");
    });

    closeBtn.on("click", () => {
        modal.removeClass("show");
    });
});