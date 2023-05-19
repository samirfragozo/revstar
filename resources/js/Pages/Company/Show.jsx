import AuthenticatedLayout   from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import Table                 from '@/Pages/Partials/Table.jsx';
import {useRef, useState}    from 'react';
import Modal                 from '@/Components/Modal.jsx';
import InputLabel            from '@/Components/InputLabel.jsx';
import TextInput             from '@/Components/TextInput.jsx';
import InputError            from '@/Components/InputError.jsx';
import PrimaryButton         from '@/Components/PrimaryButton.jsx';

export default function Show({
    auth,
    company,
}) {
    const title = `Detalles de la Empresa: ${company.name}`;
    const emailInput = useRef();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors,
    } = useForm({
        email: '',
    });

    const closeModal = () => {
        setModalIsOpen(false);

        reset();
    };

    const handleSendPdf = (e) => {
        e.preventDefault();

        post(route('products.send-pdf', company.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => emailInput.current.focus(),
            onFinish: () => reset(),
        });
    };

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
                            {auth.permissions.includes('update companies') && (
                                <Link
                                    href={route('companies.edit', company.id)}
                                    className="px-4 py-2 font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
                                >
                                    Editar Empresa
                                </Link>
                            )}
                        </div>

                        <div className="mt-6 space-y-6">
                            <Field name="NIT" value={company.nit}/>
                            <Field name="Nombre" value={company.name}/>
                            <Field name="Dirección" value={company.address}/>
                            <Field name="Teléfono" value={company.phone} border={false}/>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 mt-12">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Inventario</h2>
                        <div>
                            {auth.permissions.includes('view products') && (
                                <a
                                    href={route('products.download-pdf', company.id)}
                                    className="ml-4 px-4 py-2 font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
                                    target="_blank"
                                >
                                    Descargar PDF
                                </a>
                            )}

                            {auth.permissions.includes('view products') && (
                                <button
                                    onClick={() => setModalIsOpen(true)}
                                    className="ml-4 px-4 py-1.5 font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
                                >
                                    Enviar PDF
                                </button>
                            )}

                            {auth.permissions.includes('create products') && (
                                <Link
                                    href={route('products.create', company.id)}
                                    className="ml-4 px-4 py-2 font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
                                >
                                    Añadir Artículos
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="bg-white shadow sm:rounded-lg">
                        <Table
                            permissions={auth.permissions}
                            routesKey="products"
                            routesParameters={{
                                company: company.id,
                            }}
                            rows={{
                                name:        'Nombre',
                                quantity:    'Cantidad',
                                description: 'Descripción',
                            }}
                            values={company.products}
                        />
                    </div>
                </div>
            </div>

            <Modal show={modalIsOpen} onClose={closeModal}>
                <form onSubmit={handleSendPdf} className="p-6">
                    <div>
                        <InputLabel htmlFor="email" value="Correo electronico" />

                        <TextInput
                            id="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            ref={emailInput}
                            required
                            isFocused
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 font-semibold text-gray-500 hover:text-gray-700"
                        >
                            Cancel
                        </button>

                        <PrimaryButton
                            className="ml-3"
                            disabled={processing}
                        >
                            Enviar PDF
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
