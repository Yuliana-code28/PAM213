import { Usuario } from "../models/usuario";
import DatabaseService from "../database/DatabaseService";

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    // Inicializar el controlador con el service
    async initialize() {
        await DatabaseService.initialize();
    }

    async obtenerUsuario() {
        try {
            const data = await DatabaseService.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener usuarios: ', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    } // fin obtener usuario

    async crearUsuario(nombre) {
        try {
            Usuario.validar(nombre);
            const nuevoUsuario = await DatabaseService.add(nombre.trim());
            this.notifyListeners();
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario: ', error);
            throw error;
        }
    }

    // Actualizar usuario
    async actualizarUsuario(id, nombre) {
        try {
            Usuario.validar(nombre);
            await DatabaseService.actualizar(id, nombre.trim());
            this.notifyListeners();
        } catch (error) {
            console.error('Error al actualizar usuario: ', error);
            throw error;
        }
    }

    // Eliminar usuario
    async eliminarUsuario(id) {
        try {
            await DatabaseService.eliminar(id);
            this.notifyListeners();
        } catch (error) {
            console.error('Error al eliminar usuario: ', error);
            throw error;
        }
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}
