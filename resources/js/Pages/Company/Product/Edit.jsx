import {useForm} from '@inertiajs/react';
import Form      from '@/Pages/Company/Product/Partials/Form.jsx';

export default function Show({
    auth,
    company,
    product,
}) {
    const title = `Actualizar Articulo: ${product.name}`;
    const {
        data,
        patch,
        setData,
        errors,
        processing,
    } = useForm({
        description: product.description,
        name:        product.name,
        quantity:    product.quantity,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route('products.update', {
            company: company.id,
            product: product.id,
        }));
    };

    return (
        <Form
            auth={auth}
            buttonName="Actualizar Articulo"
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
