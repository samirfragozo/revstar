import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head}              from '@inertiajs/react';

export default function Show({
    auth,
    company,
}) {
    const title = `Detalles de la Empresa - ${company.name}`;

    const Field = ({
        border = true,
        name,
        value,
    }) => (
        <div className={`${border ? 'border-b border-gray-200' : ''} py-4`}>
            <h4 className="text-xs font-medium text-gray-500">{name}</h4>
            <p className="text-gray-500">{value}</p>
        </div>
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
        >
            <Head title={title}/>

            <div className="m-4 flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <div className="px-6 py-3 bg-white">
                                <Field name="NIT" value={company.document}/>
                                <Field name="Nombre" value={company.name}/>
                                <Field name="Dirección" value={company.address}/>
                                <Field name="Teléfono" value={company.phone} border={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
