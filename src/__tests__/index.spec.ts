class TodoList {
  nombre: string;
  tarea: string;
  contenido: string;
  ubicacion: string;
  telefono: number;
  completado: boolean;

  constructor(
    nombre: string,
    tarea: string,
    contenido: string,
    ubicacion: string,
    telefono: number,
    completado: boolean
  ) {
    this.nombre = nombre;
    this.tarea = tarea;
    this.contenido = contenido;
    this.ubicacion = ubicacion;
    this.telefono = telefono;
    this.completado = completado;
  }
  showTask() {
    return this.nombre;
  }
}

describe('TodoList', () => {
  /*let tasks = new TodoList(
    "npm",
    "estudiar",
    "imprescindible",
    "Barcelona",
    699699699,
    false
  );*/
  let tasks: TodoList;

  beforeEach(() => {
    tasks = new TodoList(
      'npm',
      'estudiar',
      'imprescindible',
      'Barcelona',
      699699699,
      false
    );
  });
  it('debería inicializar la clase TodoList', () => {
    expect(tasks).toBeInstanceOf(TodoList);
    //expect(tasks).toBeTruthy();
  });
  it('deberia poder construir la clase', () => {
    expect(tasks.nombre).toBe('npm');
    //expect(lista.tarea).toBe("estudiar")
    //expect(lista.contenido).toBe("imprescindible")
    //expect(lista.ubicacion).toBe("Barcelona")
    //expect(lista.telefono).toBe(699699699)
  });
});
//});
