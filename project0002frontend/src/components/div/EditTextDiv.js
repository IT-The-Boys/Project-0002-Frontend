import React, { useState } from 'react';

export const EditTextDiv = ({ mode, onChange, value, id, title, hasPermission }) => {
    const [editMode, setEditMode] = useState(mode);
    const handleToggle = () => {
        setEditMode(!editMode);
    };

    return (
        <div>
            {title}
            <br />
            {editMode ?
                <div>
                    <input id={id}
                        autoFocus
                        type="text"
                        value={value ? value : ""}
                        onChange={onChange}
                        onFocus={e => e.target.select()}
                        onBlur={handleToggle} />
                </div>
                : <div>
                    {value}
                </div>}
            <button
                disabled={!hasPermission}
                id={id}
                onMouseDown={e => e.preventDefault()}
                onClick={handleToggle}>
                {editMode ? "Save" : "Edit"}
            </button>
        </div>
    );
};
