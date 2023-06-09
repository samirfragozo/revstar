import {useForm} from '@inertiajs/react';
import Form      from '@/Pages/Company/Partials/Form.jsx';

export default function Show({auth}) {
    const title = 'Crear Empresa';
    const {
        data,
        post,
        setData,
        errors,
        processing,
    } = useForm({
        address: '',
        name:    '',
        nit:     '',
        phone:   '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('companies.store'));
    };

    return (
        <Form
            auth={auth}
            buttonName={title}
            data={data}
            errors={errors}
            handleSubmit={handleSubmit}
            setData={setData}
            processing={processing}
            title={title}
        />
    );
}
