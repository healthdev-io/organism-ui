import { ModalHeader } from ".";
export default {
    title: "Dialogs/ModalHeader",
    component: ModalHeader,
};
export var Default = {
    args: {
        onClose: function () {
            console.log("Here you close your modal");
        },
        title: "Título do modal",
    },
};
