import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link}        from '@inertiajs/react';
import InputError          from '@/Components/InputError.jsx';
import InputLabel          from '@/Components/InputLabel.jsx';
import TextInput           from '@/Components/TextInput.jsx';
import PrimaryButton       from '@/Components/PrimaryButton.jsx';

export default function Form({
    auth,
    buttonName,
    data,
    errors,
    handleSubmit,
    setData,
    processing,
    routeId,
    title,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
        >
            <Head title={title}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                            <div>
                                <InputLabel htmlFor="name" value="Nombre" />

                                <TextInput
                                    id="name"
                                    className="mt-1 block w-full"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    autoComplete="name"
                                />

                                <InputError className="mt-2" message={errors.name} />
                            </div>

                            <div>
                                <InputLabel htmlFor="description" value="Descripción" />

                                <TextInput
                                    id="description"
                                    className="mt-1 block w-full"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />

                                <InputError className="mt-2" message={errors.description} />
                            </div>

                            <div>
                                <InputLabel htmlFor="quantity" value="Cantidad" />

                                <TextInput
                                    id="quantity"
                                    className="mt-1 block w-full"
                                    value={data.quantity}
                                    onChange={(e) => setData('quantity', e.target.value)}
                                    required
                                />

                                <InputError className="mt-2" message={errors.quantity} />
                            </div>

                            <div className="flex justify-end items-center gap-4">
                                <Link
                                    href={route('companies.show', routeId)}
                                    className="px-4 py-2 font-semibold text-gray-500 hover:text-gray-700"
                                >
                                    Cancelar
                                </Link>

                                <PrimaryButton disabled={processing}>{buttonName}</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
