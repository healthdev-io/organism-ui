import { Button } from ".";
export default {
    title: "Form/Button",
    component: Button,
};
export var Default = {
    args: { children: "Texto do botão", size: "default" },
};
export var Disabled = {
    args: { children: "Texto do botão", size: "default", disabled: true },
};
export var Loading = {
    args: {
        children: "Texto do botão",
        size: "default",
        loading: true,
        loadingText: "Carregando...",
    },
};
export var Outlined = {
    args: {
        children: "Texto do botão",
        size: "default",
        variant: "outlined",
    },
};
