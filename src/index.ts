import { beforeEach, describe, it, todo } from "node:test";

class TodoList {
  nombre: string;
  tarea: string;
  contenido: string;
  ubicacion: string;
  telefono: number;

  constructor(
    nombre: string,
    tarea: string,
    contenido: string,
    ubicacion: string,
    telefono: number
  ) {
    this.nombre = nombre;
    this.tarea = tarea;
    this.contenido = contenido;
    this.ubicacion = ubicacion;
    this.telefono = telefono;
  }
  showTask() {
    return this.nombre;
  }
}

/*describe ('TodoList', () => {
  let pop = TodoList;
  beforeEach(() => {new TodoList("npm","estudiar","imprescindible","Barcelona",699699699);
  })
  it('debería inicializar la clase TodoList', () => {
    expect(pop).toBeInstanceOf(TodoList);
    expect(pop).toBeTruthy();
  });
  it('deberia poder construir la clase', () => {
    expected(pop.nombre).toBe("npm")
    expect(pop.tarea.toBe("estudiar")
    expect(pop.contenido.toBe("imprescindible")
    expect(pop.ubicacion.toBe("Barcelona")
    expect(pop.telefono.toBe(699699699)
  })*/
