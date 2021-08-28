import $ from "jquery";
import * as Student from "./students.model";

const $table = $(".list");
const $pagination = $(".pagination");
const $modalTitle = $(".modal-title");
const $btnSubmit = $(".btn-submit");
const $btnDelete = $(".btn-delete");
const $form = $("#student");
const $name = $("#name");
const $dob = $("#dob");
const $email = $("#email");
const $phone = $("#phone");
const $result = $(".result");

function render() {
    const page = history.state?.page || 1;
    const search = history.state?.search;

    const { current, pages, total, data } = search
        ? Student.search(search, page)
        : Student.getOnePage(page);

    if (!data) {
        if (page > 1) {
            history.pushState({ page: page - 1 }, null, null);
            render();
        } else {
            createTable(data);
            createPagination(current, pages);
        }
    } else {
        createTable(data);
        createPagination(current, pages);
    }

    if (search && total) $result.text("( " + total + " found)");
    else $result.text("");
}

function createTable(data) {
    $table.html(null);

    if (data) {
        $.each(data, (_, student) => {
            const { id, name, dob, email, phone } = student;

            $table.append(
                $(`<tr data-bs-toggle="modal" data-bs-target="#modal" />`)
                    .append(
                        `<td>${id}</td>`,
                        `<td>${name}</td>`,
                        `<td>${dob}</td>`,
                        `<td>${email}</td>`,
                        `<td>${phone}</td>`
                    )
                    .on("click", () =>
                        fillModal({ title: name, id, name, dob, email, phone })
                    )
            );
        });
    } else {
        $table.append(
            `<tr><td colspan="5" class="text-center">No data to display</td></tr>`
        );
    }
}

function createPagination(current, total, search) {
    $pagination.html(null);

    console.log(search);

    for (let i = 1; i <= total; i++) {
        const isCurrent = i === current;

        $pagination.append(
            $(`<li class="page-item ${isCurrent ? "active" : ""}" />`)
                .append(`<a class="page-link">${i}</a>`)
                .on("click", function () {
                    history.pushState(
                        { ...history.state, page: i },
                        null,
                        null
                    );
                    render();
                })
        );
    }
}

function fillModal(data = {}) {
    const { id, name, dob, email, phone, title } = data;

    $modalTitle.text(title || "New Student");
    $form.data(data);
    $name.val(name || "");
    $dob.val(dob || "");
    $email.val(email || "");
    $phone.val(phone || "");
    $btnSubmit.text(id ? "Update" : "Save");
    $btnDelete.css({ display: id ? "" : "none" });
}

function clearModal() {
    $form[0].reset();
    $name[0].setCustomValidity("");
    $dob[0].setCustomValidity("");
    $email[0].setCustomValidity("");
    $phone[0].setCustomValidity("");
}

export { render, fillModal, clearModal };
