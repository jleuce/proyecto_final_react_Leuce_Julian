import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore'; 

//Exporto una funcion para que puedan traer datos de firebase, tanto para los pedidos o para los productos
export  const traerDatos = (coleccion,setHook,setLoading,campoBusqueda,elementoBusqueda) => {
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

export  const checkUser = (usuarioInput,contraseñaInput,userHook,userOk) => {
            
            console.log("ejecutando funcion checkUser");
            const db = getFirestore()
            const colRef = collection(db, 'Usuarios')
            const q = query(colRef,where('usuario','==',usuarioInput))

                getDocs(q).then( res => {
                    const data = res.docs.map( e => ({id: e.id, ...e.data()}))
                    if (data.length != 0){
                        console.log("Usuario Existe")
                        const q = query(colRef,where('contraseña','==',contraseñaInput))
                        getDocs(q).then( res => {
                            const data = res.docs.map( e => ({id: e.id, ...e.data()}))
                            if (data.length != 0){
                            console.log("Contraseña Correcta")
                            userHook(usuarioInput);
                            userOk(true);
                            }else{
                            console.log("Contraseña Incorrecta");
                            }
                            } )
                    }else{
                        console.log("Usuario No existe");
                    }
                } )
        }

export  const enviarPedido = (user,productList) => {
            console.log("generar pedido usuario")
            const order = {
                usuario: user,
                productos: productList,
                totalProductos:productList.length,
                fechaPedido: (new Date()).toISOString().split('T')[0]
            }
            const db = getFirestore()
            const ordersCollection = collection( db, "Pedidos")
            addDoc( ordersCollection, order).then(res => {console.log(res)})
            console.log("pedido generado")
}

export const writeSomething = (coleccion,objetoAInsertar) => {
            console.log("ejecutando writeSomething");
            console.log(objetoAInsertar)
            const db = getFirestore()
            const ordersCollection = collection( db, coleccion)
            addDoc( ordersCollection, objetoAInsertar).then(res => {console.log(res)})
}

export const updateSomething = (coleccion,idElementoEnColeccion,atributosAActualizar) => {
            console.log("ejecutando updateSomething");
            const db = getFirestore();
            const ordersCollection = collection( db, coleccion);
            const orderDoc = doc( ordersCollection, idElementoEnColeccion);
            updateDoc(orderDoc, atributosAActualizar)
}


