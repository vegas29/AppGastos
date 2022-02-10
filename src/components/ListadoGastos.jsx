import Gasto from "./Gasto";

const ListadoGastos = ({
        gastos, 
        setGastoEditar, 
        eliminarGasto,
        filtro,
        gastosFiltrados
}) => {
    return (
        <div className="listado-gastos contenedor">
            

            {
                filtro ?  (
                    <>
                        <h2 className="text-center">{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoria'}</h2>
                        {gastosFiltrados.map(gastoFiltrado => (
                            <Gasto 
                                key={gastoFiltrado.id}
                                gasto={gastoFiltrado}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) : (
                    <>  
                        <h2 className="text-center">{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
                        {gastos.map(gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
            }
            
        </div>   
    );
}
 
export default ListadoGastos;