import React from 'react';
import Popup from 'reactjs-popup';
import FormPostagem from '../formPostagem/FormPostagem';
import "reactjs-popup/dist/index.css"

function ModalPostam() {
    return (
        <>
            <Popup
                trigger={<button className="border rounded px-4 hover:bg-white hover:text-indigo-800">Nova Postagem</button>}modal>
                    <div>
                        <FormPostagem/>
                    </div>

            </Popup>
        </>
    )
}

export default ModalPostam