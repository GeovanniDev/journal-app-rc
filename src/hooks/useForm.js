import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidationState, setFormValidationState ] = useState({});

    useEffect(() => {
        onCheckFormValidations();
    }, 
    [ formState ])

    const isFormValid = useMemo(() => {
        for (const key in formValidationState) {
            if (formValidationState[key] !== null) return false;
        }

        return true;
    }, [ formValidationState ]);
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const onCheckFormValidations = () => {
        const newFormValidations = {};
        Object.keys(formState).forEach( key => {
            if (formValidations[key]) {
            const [ validation, message ] = formValidations[key];
            newFormValidations[`${key}Valid`] = validation(formState[key]) ? null : message;
            }
        });
    
        setFormValidationState(newFormValidations);

    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        isFormValid,
        ...formValidationState
    }
}