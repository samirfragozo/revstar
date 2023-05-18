import {useForm} from '@inertiajs/react';
import Form      from '@/Pages/Company/Partials/Form.jsx';

export default function Show({
    auth,
    company,
}) {
    const title = `Actualizar Empresa: ${company.name}`;
    const {
        data,
        patch,
        setData,
        errors,
        processing,
    } = useForm({
        address: company.address,
        name: company.name,
        nit: company.nit,
        phone: company.phone,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route('companies.update', company.id));
    };

    return (
        <Form
            auth={auth}
            buttonName="Actualizar Empresa"
            data={data}
            errors={errors}
            handleSubmit={handleSubmit}
            setData={setData}
            processing={processing}
            title={title}
        />
    );
}
