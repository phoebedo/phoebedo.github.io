import $, { ready } from "jquery";
import _ from "lodash";

const $form = $("#student");
const $name = $("#name");
const $dob = $("#dob");
const $email = $("#email");
const $phone = $("#phone");

function validateName() {
    const name = $name.val().trim();

    if (name.length == 0) {
        $name[0].setCustomValidity(" ");
        return false;
    } else {
        $name[0].setCustomValidity("");
        $form.data().name = _.startCase(name);
        return true;
    }
}

function validateAge() {
    const dob = Number($dob.val());

    if (!dob || dob < 10 || dob > 30) {
        $dob[0].setCustomValidity(" ");
        return false;
    } else {
        $dob[0].setCustomValidity("");
        $form.data().dob = dob;
        return true;
    }
}

function validateEmail() {
    const email = $email.val().trim();

    if (
        email.length == 0 ||
        !/^[a-z][a-z0-9_\.]{2,}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(email)
    ) {
        $email[0].setCustomValidity(" ");
        return false;
    } else {
        $email[0].setCustomValidity("");
        $form.data().email = email;
        return true;
    }
}

function validatePhone() {
    const phone = $phone.val().trim();

    if (/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/.test(phone)) {
        $phone[0].setCustomValidity(" ");
        return false;
    } else {
        $phone[0].setCustomValidity("");
        $form.data().phone = phone;
        return true;
    }
}

export { validateName, validateAge, validateEmail, validatePhone };
