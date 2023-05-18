import AuthenticatedLayout   from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';

export default function Index({
    auth,
    companies,
}) {
    const title = 'Empresas';
    const {delete: destroy} = useForm();

    const handleDelete = async (company) => {
        destroy(route('companies.destroy', company.id), {
            preserveScroll: true,
            onSuccess:      () => alert('Empresa eliminada correctamente'),
            onError:        () => () => alert('Ha ocurrido un erro mientras se eliminaba la orden'),
        });
    };

    const Td = ({children}) => (
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {children}
        </td>
    );

    const Th = ({children}) => (
        <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
            {children}
        </th>
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
                        <div className="flex justify-end items-center">
                            <Link
                                href={route('companies.create')}
                                className="px-4 py-2 font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
                            >
                                Crear Empresa
                            </Link>
                        </div>

                        <div className="mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <Th>Nit</Th>
                                    <Th>Nombre</Th>
                                    <Th>Dirección</Th>
                                    <Th>Teléfono</Th>
                                    <Th/>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {companies.map((company) => (
                                    <tr key={company.id}>
                                        <Td>{company.nit}</Td>
                                        <Td>{company.name}</Td>
                                        <Td>{company.address}</Td>
                                        <Td>{company.phone}</Td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <Link
                                                href={`/companies/${company.id}`}
                                                className="text-blue-600 hover:text-blue-900 mr-2"
                                            >
                                                Ver
                                            </Link>
                                            <Link
                                                href={`/companies/${company.id}/edit`}
                                                className="text-green-600 hover:text-green-900 mr-2"
                                            >
                                                Editar
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(company)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
