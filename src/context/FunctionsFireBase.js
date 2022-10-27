import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore'; 

//Exporto una funcion para que puedan traer datos de firebase, tanto para los pedidos o para los productos
export const traerDatos = (coleccion,setHook,setLoading,campoBusqueda,elementoBusqueda) => {
            console.log(`ejecutando traer datos de ${coleccion}`);
            setLoading(true);
            const db = getFirestore();
            const colRef = collection(db, coleccion);
            let busqueda;

            if (campoBusqueda === undefined) {
                busqueda = colRef;
            }else{
                busqueda = query(colRef,where(campoBusqueda,"==",elementoBusqueda))
            }

            getDocs(busqueda)
                .then (res => {
                    const data = res.docs.map( e => ({id: e.id, ...e.data()}))
                    setHook(data);
                })
                .then(() => setLoading(false))
                console.log(`Datos de ${coleccion} cargados al hook`);

        }




