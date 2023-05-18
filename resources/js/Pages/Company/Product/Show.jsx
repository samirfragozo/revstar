import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link}        from '@inertiajs/react';
import pluralize           from 'pluralize';

export default function Show({
    auth,
    company,
    product,
}) {
    const title = `Detalles de la Articulo: ${product.name}`;

    const Field = ({
        border = true,
        name,
        value,
    }) => (
        <div className={border ? 'border-b border-gray-200' : ''}>
            <h4 className="font-medium text-sm text-gray-700">{name}</h4>
            <p className="text-gray-500">{value}</p>
        </div>
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
        >
            <Head title={title}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="flex justify-end items-center">
                            <Link
                                href={route('products.edit', {
                                    company: company.id,
                                    product: product.id,
                                })}
                                className="px-4 py-2 font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
                            >
                                Editar Articulo
                            </Link>
                        </div>

                        <div className="mt-6 space-y-6">
                            <Field name="Nombre" value={product.name}/>
                            <Field name="Descripción" value={product.description}/>
                            <Field name="Cantidad" value={product.quantity} border={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
