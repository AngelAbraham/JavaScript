// import { obtenerChiste} from './js/http-provide';
// obtenerChiste().then(console.log);
// import {init} from "./js/usuarios-page";
// init();
// import { obtenerUsuarios} from './js/http-provide';
// obtenerUsuarios().then(console.log);

import * as CRUD from './js/crud-provider';

CRUD.getUsuario(2).then(console.log);