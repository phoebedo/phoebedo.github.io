import * as Student from "./students.model";
import $ from "jquery";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import { Modal } from "bootstrap";
import * as Validation from "./validate";
import * as Render from "./render";

$(function () {
    history.pushState({ ...history.state, search: null }, null, null);

    const modal = document.getElementById("modal");
    const bsModal = new Modal(modal);
    const $form = $("#student");
    const $btnAdd = $(".btn-add");
    const $btnDelete = $(".btn-delete");
    const $name = $("#name");
    const $dob = $("#dob");
    const $email = $("#email");
    const $phone = $("#phone");
    const $search = $("#search");

    $dob.on("keypress", function (e) {
        const key = e.originalEvent.key;

        if (isNaN(Number(key))) {
            e.preventDefault();
        }
    });

    $phone.on("keypress", function (e) {
        const key = e.originalEvent.key;

        if (isNaN(Number(key))) e.preventDefault();
    });

    $name.on("change blur", Validation.validateName);
    $dob.on("change blur", Validation.validateAge);
    $email.on("change blur", Validation.validateEmail);
    $phone.on("change blur", Validation.validatePhone);
    $btnAdd.on("click", Render.fillModal);
    $btnDelete.on("click", function () {
        if (confirm("Deleted data cannot be recovered. Are you sure you want to delete?")) {
            Student.removeOne($form.data().id);
            bsModal.hide();

            Render.render();
        }
    });

    $search.on("input", function () {
        const val = $search.val().trim();
        history.pushState(
            { ...history.state, page: 1, search: val },
            null,
            null
        );
        Render.render();
    });

    // TODO: Attack modal event via jQuery not work
    modal.addEventListener("hidden.bs.modal", Render.clearModal);

    $form.on("submit", function (e) {
        e.preventDefault();

        Validation.validateName();
        Validation.validateAge();
        Validation.validateEmail();
        Validation.validatePhone();

        if ($form[0].reportValidity()) {
            bsModal.hide();
            const { id, name, dob, email, phone } = $form.data();

            if (!id) {
                Student.addOne({ name, dob, email, phone });
                Render.render();
            } else {
                Student.updateOne({ id, name, dob, email, phone });
                Render.render();
            }
        }
    });

    Render.render();
});
