import { FormInputContainer, FormLabel, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <FormInputContainer {...otherProps} />
            <FormLabel shrink={otherProps.value.length}>{label}</FormLabel>
        </Group>
    );
};

export default FormInput;
