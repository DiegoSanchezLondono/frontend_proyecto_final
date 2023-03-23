# PROYECTO FRONT #

## PROYECTO ##
- Este proyecto se basa en realizar un Front que hace llamdas a una API que contiene usuarios, roles, videos, pictogramas y favoritos.Se ha utilizado REACT-VITE-REDUX-JAVASCRIPT-CSS3. Me he decantado por desarrollar un front limpio,sencillo e intuitivo.
- En este Front tanto los usuarios No registrados como los que ya tienen una cuenta en la app pueden buscar los videos y pictogramas por nombre, tambien una vez registrados pueden añadir a favoritos cualquier video y/o pictograma.

## TECNOLOGIAS ##
- ![image](https://user-images.githubusercontent.com/116036050/215578829-df32cd0c-fe39-4a66-bfa2-edd84943c4a2.png) REACT. ![image](https://user-images.githubusercontent.com/116036050/215579153-0d7e1129-8f79-4178-8e14-f29dbd3f7042.png) REDUX. ![image](https://user-images.githubusercontent.com/116036050/215579444-bde4c2cc-9483-4bec-87f8-e78133c946ae.png) JAVASCRIPT. ![image](https://user-images.githubusercontent.com/116036050/215579630-269be669-57c1-4a37-8ddf-5679d4f1990b.png) CSS3.

## PROCESO ##
- Desarrollo principal de la idea.
- Creación del Front con sus diferentes vistas (inicio de sesión, registro, perfil, home).
- Se lleva a cabo la organización de los videos.
- Se lleva a cabo la organización de los pictogramas.
- Se lleva a cabo la organización de los usuarios.
- se lleva a cabo la opcion de añadir videos a favoritos.
- se lleva a cabo la opcion de añadir pictogramas a favoritos.
- últimas pinceladas para dejar finiquitado el trabajo, aun queda mucho por mejorar.

## VISTA HOME ##
![image](https://user-images.githubusercontent.com/116036050/227289396-4947c7e2-7761-48a0-85f4-1e0e3dbe2601.png)
![image](https://user-images.githubusercontent.com/116036050/227289563-a3e9b960-d22a-40ba-81c4-2eace0cdfc83.png)

- En esta vista tenemos los videos y pictogramas, tambien contamos con la opcion de iniciar sesión y de registro de nuevos usuarios.
## VISTA DE REGISTRO ##
![image](https://user-images.githubusercontent.com/116036050/227290605-8b0e12f0-c901-470f-9633-9cbabcdc6cb4.png)

- En esta vista tenemos la opcion de registrarnos introduciendo unos datos claves para identificar al usuario, tambien tenemos la opcion de volver a home.
## VISTA DE LOGIN ##
![image](https://user-images.githubusercontent.com/116036050/227289816-cb63479e-f035-47be-a7a2-a88ac93558e4.png)

- En esta vista accedemos a nuestro perfil.
## VISTA DE PERFIL DE USUARIO ##
![image](https://user-images.githubusercontent.com/116036050/227291551-1645517a-870c-4512-9590-5f747d16b63f.png)

- En esta vista el usuario puede ver sus datos y los videos y/o pictogramas que ha añadido a sus favoritos.
## VISTA DEL ADMINISTRADOR ##
![image](https://user-images.githubusercontent.com/116036050/227292118-d8b87dd7-1d97-480b-b2c9-2128627cc456.png)

- Esta vista la podra ver UNICAMENTE el administrador, aqui apareceran los datos de todo los usuarios registrados.
## VISTA DETALLE VIDEO ##
![image](https://user-images.githubusercontent.com/116036050/227293548-9dc2f845-331d-4410-ad59-d1de6c3a3b8a.png)

- Esta vista la podran ver todos los usuarios, aqui aparecera el detalle de los videos.
## VISTA DETALLE PICTOGRAMA ##
![image](https://user-images.githubusercontent.com/116036050/227294172-cc0d5da7-19e8-445c-977e-7df030129412.png)

- Esta vista la podran ver todos los usuarios, aqui aparecera el detalle de los pictogramas.


#### Endpoints de llamadas a la API ####

###### Con este Endpoint el usuario puede iniciar sesión ######
- router.post("/login", UsersController.loginUser); Con este Endpoint el usuario podra loguearse y tendrá la opcion de añadir a favoritos tanto videos como pictogramas.
http://localhost:5500/users/login

###### Con este Endpoint el usuario podrá registrarse ######
- router.post("/register", UsersController.newUser); Con este Endpoint el usuario tendrá la posibilidad de registrarse para poder tener un perfil personal.
http://localhost:5500/users/register

###### Con este Endpoint el usuario podrá actualizar datos ######
- router.put("/",auth, UsersController.updateUser); Con este Endpoint el usuario tendrá la posibilidad de actualizar datos de su perfil personal.
http://localhost:5500/users

###### Con este Endpoint el usuario (Admin )podrá ver todos los usuarios ######
- router.get("/",auth, isAdmin, UsersController.getAllUsers); Con este Endpoint el usuario (Admin) tendrá la posibilidad de ver todos los usuarios.
http://localhost:5500/users

###### Con este Endpoint el usuario (Admin )podrá eliminar algun usuario ######
- router.delete("/",auth, isAdmin, UsersController.deleteUser); Con este Endpoint el usuario (Admin) tendrá la posibilidad de eliminar algun usuario que no cumpla con la politica de la App.
http://localhost:5500/users

###### Con este Endpoint el usuario (Admin )podrá agregar videos ######
- router.post("/register",auth, isAdmin, VideosController.newVideo);  Con este Endpoint el usuario (Admin) tendrá la posibilidad de agregar videos a la app.
http://localhost:5500/videos/register

###### Con este Endpoint los usuarios podrán ver todos los videos ######
- router.get("/", VideosController.getAllVideos); Con este Endpoint los usuarios tendrá la posibilidad de ver todos los videos que esten agregados actualmente en la app.
http://localhost:5500/videos

###### Con este Endpoint el usuario (Admin) podrá eliminar videos ######
- router.delete("/",auth, isAdmin, VideosController.deleteVideo); Con este Endpoint el usuario (Admin) tendrá la posibilidad de eliminar algun video, por que ha salido uno nuevo o simplemente tiene mejor resolucion.
http://localhost:5500/videos

###### Con este Endpoint el usuario (Admin) podrá crear pictogramas de su autoria ######
- router.post("/register",auth, isAdmin, PictogramsController.newPictogram);  Con este Endpoint el usuario (Admin) tendrá la posibilidad de crear pictogramas de autoria propia.
http://localhost:5500/pictograms/register

###### Con este Endpoint los usuarios podrán ver todos los pictogramas guardados en la BD ######
- router.get("/",auth, PictogramsController.getAllPictograms);  Con este Endpoint los usuarios tendrán la posibilidad de ver todos los pictogramas.
http://localhost:5500/pictograms

###### Con este Endpoint los usuarios podrán ver todos los pictogramas ######
- router.post("/data_id",auth, PictogramsController.postPictogramById);  Con este Endpoint los usuarios tendrán la posibilidad de ver todos los pictogramas traidos desde la api de arasaac.
http://localhost:5500/pictograms

###### Con este Endpoint los usuarios podrán agregar a favoritos ######
- router.post("/", auth, FavoritesController.newFavorite);  Con este Endpoint los usuarios tendrán la posibilidad de agregar tanto videos como pictogramas a favoritos para asi tenerlos detallados en su perfil de usuario.
http://localhost:5500/favorites

###### Con este Endpoint los usuarios podrán ver todos sus videos favoritos ######
- router.get("/", auth, FavoritesController.getAllFavoritesUser);  Con este Endpoint los usuarios tendrán la posibilidad ver sus videos favoritos.
http://localhost:5500/favorites?type=video

###### Con este Endpoint los usuarios podrán ver todos sus pictogramas favoritos ######
- router.get("/", auth, FavoritesController.getAllFavoritesUser);  Con este Endpoint los usuarios tendrán la posibilidad ver sus pictogramas favoritos.
http://localhost:5500/favorites?type=pictogram


## OBJETIVO ##
- Se pretende mejorar la parte Front a medida que vamos adquiriendo mas conocimientos, con un objetivo final de ser utilizado por usuarios reales.

## AUTOR ##
- Diego Sánchez Londoño 
