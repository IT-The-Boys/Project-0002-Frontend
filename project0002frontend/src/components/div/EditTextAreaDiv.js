import React, { useState } from 'react';

export const EditTextAreaDiv = ({ mode, onChange, value, id, title, hasPermission }) => {
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
                    <textarea
                        id={id}
                        autoFocus
                        value={value ? value : ""}
                        onChange={onChange}
                        onFocus={e => e.target.select()}
                        onBlur={handleToggle}>
                    </textarea>
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
