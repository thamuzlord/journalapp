import React from 'react';
import { NotesAppBar } from './NotesAppBar';


export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input type="text" className="notes__title-input" placeholder="title" />

                <textarea placeholder="text here" className="notes__textarea"></textarea>

                <div className="notes__image" >
                    <img src="https://img.freepik.com/vector-gratis/escena-naturaleza-rio-colinas-bosque-montana-ilustracion-estilo-dibujos-animados-planos-paisaje_1150-37326.jpg?size=626&ext=jpg&ga=GA1.2.1591765389.1626220800" alt="imagen" />
                </div>
            </div>
        </div>
    )
}
