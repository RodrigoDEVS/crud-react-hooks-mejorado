# Proyecto Funcional Usando react-hook-form 

Proyecto de un CRUD funcional de acuerdo a lo aprendido mediante el uso de la librería react-hook-form 

## Mejoras Implementadas

En el proyecto se pueden evidenciar los siguientes cambios realizados con el fin de mejorar la aplicación:

### Implementación de Rutas

Se realizó la instalación de la dependencia react-router-dom

se crea el componente con las rutas iniciales para la aplicación.

se crea la Landing Page y se implementa dentro del App.js para que al cargar la aplicación arranque desde esta.

### Refactorización y Funcionalidad

Se organizaron los componentes para que se encuentren en paquetes separados de acuerdo a su funcionalidad dentro de la aplicación, se crearon paquetes para las rutas, las páginas y los componentes funcionales.

Se refactorizó la funcionalidad de mostrar usuarios y editar usuarios para que se muestren por los componentes de forma individual.

Se agregó la funcionalidad para mostrar y esconder el formulario de registro.

Agregado el link en forma de botón de salida que nos lleva a la ruta '/' 

### Persistencia de Datos

Se agregó el useEffect para cargar los datos del localStorage y se modificaron los métodos del CRUD para que los datos sean redirigidos hacia el localStorage
