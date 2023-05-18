import {useForm} from '@inertiajs/react';
import Form      from '@/Pages/Company/Product/Partials/Form.jsx';

export default function Show({
    auth,
    company,
}) {
    const title = 'Crear Articulo';
    const {
        data,
        post,
        setData,
        errors,
        processing,
    } = useForm({
        description: '',
        name:        '',
        quantity:    '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('products.store', company.id));
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
            routeId={company.id}
            title={title}
        />
    );
}
