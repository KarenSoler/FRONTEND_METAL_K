interface Category {
	id: number;
	name: string;
	description: string;
	sections: { [key: string]: number[] | undefined };
	icon: string;
}

import { writable, type Writable } from "svelte/store";


// Guarda el estado de la categoria (si hay una categoria seleccionada o no)
export const selectedCategories: Writable<Category | null> = writable(null);

//Guarda un arreglo de los tags disponibles dependiendo de la categoria elegida (inicialmente vacío)
export const availableTags: Writable<Tags[]> = writable([]);

//Guarda un arrglo de los tags que han sido seleccionados (inicialmente vacío)
export const selectedTags: Writable<Tags[]> = writable([]);


//Es un arreglo que guarda si un grupo de tags ha sido seleccionado
export const selectedGroup:Writable<TagsGroups | null>  = writable(null);





// // Función para cargar datos del JSON (se puede llamada a la API)
// export const loadCategories = async () => {
//   const res = await fetch('../stores/categoriesStore.ts');
//   const data = await res.json();
//   categories.set(data.categorias);
// };
