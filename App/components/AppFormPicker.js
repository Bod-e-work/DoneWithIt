import React from 'react';
import AppPicker from './AppPicker';
import { ErrorMessage } from './forms';

function AppFormPicker({items, name, placeholder}) {

    const { errors, setFieldValue, touched, values } = useFormikContext();
    
    return (
        <>
        <AppPicker 
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={validateYupSchema.name}
            />
        <ErrorMessage error={errors.name} visible={touched.name} />
    </>
    );
}

export default AppFormPicker;