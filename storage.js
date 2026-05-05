// Guardar o eliminar capítulo leído
function toggleChapterRead(mangaId, cap) {
    let readChapters = JSON.parse(localStorage.getItem(`read_${mangaId}`)) || [];
    
    if (readChapters.includes(cap)) {
        // Si ya está, lo quitamos
        readChapters = readChapters.filter(c => c !== cap);
    } else {
        // Si no está, lo agregamos
        readChapters.push(cap);
    }
    localStorage.setItem(`read_${mangaId}`, JSON.stringify(readChapters));
    return readChapters.includes(cap); // Retorna true si ahora está leído
}

// Verificar si un capítulo está leído
function isRead(mangaId, cap) {
    let readChapters = JSON.parse(localStorage.getItem(`read_${mangaId}`)) || [];
    return readChapters.includes(cap);
}
