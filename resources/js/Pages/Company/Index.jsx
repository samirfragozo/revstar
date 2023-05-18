import AuthenticatedLayout   from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import Table                 from '@/Pages/Company/Partials/Table.jsx';

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

                        <Table
                            routesKey="companies"
                            rows={{
                                nit:     'Nit',
                                name:    'Nombre',
                                address: 'Dirección',
                                phone:   'Teléfono',
                            }}
                            values={companies}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
