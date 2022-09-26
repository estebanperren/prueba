Proyecto creado por Perren Esteban en el curso de React en CoderHouse.
Dicho proyecto es un E-commerce desarrollado en React. El mismo es responsive. 


# Demo
Puedes probar el proyecto funcionando en la siguiente url:
https://coderhouse-fawn.vercel.app/

# Estructura de directorios

-Components
    -Buttons    #Plantillas de botones
    -Cards      #Plantillas de tarjetas de item e itemDetail
    -Cart       #Componentes correspondiente al carrito
    -Navbar     #Componentes del navbar
    -Pages:     #Paginas del sitio web
        -Account    #pagina de informacion de las compras del usuario
        -Products   #Pagina de productos
        -Checkout   #Pagina de checkout
    .App.jsx                    #Componente de carga inicial y configuracion de rutas
    .ItemCount.jsx              #Contador y boton de +Agregar
    .ItemDetailContainer.jsx    #Pagina de detalle de producto
    .ItemList.jsx               #Funcion map para listar productos
    .ItemListContainer.jsx      #Pagina con listado de productos
    -Context    #Contiene el contexto del carrito y el usuario
    -Hooks:
        .UseCounter.jsx             #Hook con funciones para el boton contador
        .UseFirebase.jsx            #Hook con todas las funciones necesarias para interacturar con Firebase
    .usuario.json   #Archivo para simular los datos del usuario

Archivo Gif en la carpeta public/preentrega.gif
# Instalacion
-Instalar node 18
-Abrir una terminal en el directorio raiz del proyecto
-Ejecutar `npm install`
-Ejecutar `npm run start`
-Abrir el navegador e ingresar a la url: "localhost:3000"