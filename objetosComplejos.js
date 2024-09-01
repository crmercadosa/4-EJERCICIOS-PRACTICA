const curso = {
    nombre: "Matemáticas",
    alumnos: [
        { nombre: "Leonel", calificacion: 85 },
        { nombre: "Ana", calificacion: 92 },
        { nombre: "Pedro", calificacion: 78 }
    ]
};

function calcularPromedio(curso) {
    const totalCalificaciones = curso.alumnos.reduce((total, alumno) => total + alumno.calificacion, 0);
    return totalCalificaciones / curso.alumnos.length;
}

console.log(`El promedio es: ${calcularPromedio(curso)}`); 
